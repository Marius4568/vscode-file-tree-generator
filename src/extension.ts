import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import ignore from 'ignore';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('my-awesome-extension.generateFileTree', (folder: vscode.Uri) => {
    // Read the configuration settings
    let config = vscode.workspace.getConfiguration('file-tree-generator');
    let includeFileContent = config.get('includeFileContent') as boolean;
    let ignorePatterns = config.get('ignorePatterns') as string[];
    let useGitignore = config.get('useGitignore') as boolean;

    // Prepare the ignore
    let ig = ignore();
    ig.add(ignorePatterns);

    // If useGitignore setting is true, add .gitignore content to the ignore list
    if (useGitignore) {
      let gitignorePath = path.join(folder.fsPath, '.gitignore');
      if (fs.existsSync(gitignorePath)) {
        let gitignoreContent = fs.readFileSync(gitignorePath).toString();
        ig.add(gitignoreContent.split('\n').map(line => line.trim()));
      }
    }

    // If there are no workspace folders open, show an error and return
    if (!vscode.workspace.workspaceFolders) {
      vscode.window.showErrorMessage('No workspace folders are open');
      return;
    }

    let outputPath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, 'generated-tree.txt');

    // Clear the output file first
    fs.writeFileSync(outputPath, '');

    // Generate the file tree
    let tree = generateTree(folder.fsPath, folder.fsPath, ig, includeFileContent);

    fs.writeFileSync(outputPath, tree);
  });

  context.subscriptions.push(disposable);
}

function generateTree(rootDir: string, dir: string, ig: ReturnType<typeof ignore>, includeContent: boolean, prefix = ''): string {
  let result = '';
  let entries = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => {
    // Sort folders first, then files
    if (a.isDirectory() && b.isFile()) return -1;
    if (a.isFile() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name);
  });
  for (let i = 0; i < entries.length; i++) {
    let entry = entries[i];
    let relativePath = path.relative(rootDir, path.join(dir, entry.name));
    if (ig.ignores(relativePath)) {
      continue;
    }
    let newPrefix = prefix + (i < entries.length - 1 ? '┣ ' : '┗ ');
    if (entry.isDirectory()) {
      result += newPrefix + '📂' + entry.name + '\n';
      result += generateTree(rootDir, path.join(dir, entry.name), ig, includeContent, prefix + (i < entries.length - 1 ? '┃ ' : '  '));
    } else {
      result += newPrefix + '📜' + entry.name;
      if (includeContent) {
        let fileContent = fs.readFileSync(path.join(dir, entry.name), 'utf-8');
        result += '\n' + fileContent;
      }
      result += '\n';
    }
  }
  return result;
}

export function deactivate() {}