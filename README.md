---

# File Tree Generator

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Support](https://img.shields.io/badge/☕-Buy_Me_A_Coffee-yellow.svg)](https://www.buymeacoffee.com/murbonas)

File Tree Generator is a Visual Studio Code extension that helps you visualize and document your project structure. It generates an easy-to-read tree view of your files and directories, making it perfect for documentation, README files, or getting a clear overview of your project structure.

It's highly customizable - you can include file contents, ignore specific patterns (using .gitignore syntax), and configure exactly what you want to see in your generated tree.

## Features

1. **File Tree Generation:** Generate a tree structure of the file system starting from a specified directory.
2. **File Content Inclusion:** The option to include the content of the files in the generated tree.
3. **Ignoring Files:** Ability to ignore certain files and directories when generating the tree, as defined in the `.gitignore` file, or by specifying your own patterns in the extension settings.
4. **Output to file:** The generated file tree is saved to a file named `generated-tree.txt`.

## Getting Started

### Prerequisites

- Visual Studio Code
- Node.js

### Installation

#### VS Code Marketplace

You can install this extension directly from the Visual Studio Code Marketplace:

1. Open Visual Studio Code
2. Go to the Extensions view (or press `Ctrl+Shift+X`)
3. Search for `File Tree Generator`
4. Click on `Install`

#### Manual Installation

Alternatively, you can build and install it from source:

1. Clone this repository
2. Run `npm install` to install all dependencies
3. Run `npm run compile` to build the extension
4. Open Visual Studio Code, go to the Extensions view, and click on the "..." menu on the top-right
5. Choose `Install from VSIX...` and select the `.vsix` file that was created in the `dist` directory

You can also load the extension in development mode:

1. Clone this repository
2. Open the repository in Visual Studio Code
3. Press `F5` to start debugging. This will open a new VS Code window with the extension loaded.

## Usage

After installing the extension:

1. Open a directory in VS Code
2. Right-click on the directory in the explorer panel
3. Select `Generate File Tree`

The file tree will be generated and saved to a file named `generated-tree.txt` in the root of your workspace.

## Extension Settings

This extension contributes the following settings:

- `file-tree-generator.includeFileContent`: Include file content in the file tree. Default: `false`
- `file-tree-generator.ignorePatterns`: Enter file or directory patterns to ignore when generating file tree. Use `.gitignore` syntax. Default: `[".git", "node_modules", "package-lock.json"]`
- `file-tree-generator.useGitignore`: Whether to ignore files specified in the `.gitignore` file. Default: `false`

## ☕ Support the Project

If you find this extension helpful, consider buying me a coffee! Your support helps maintain and improve the project.

<a href="https://www.buymeacoffee.com/murbonas"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=murbonas&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>

## Contribute

Have an idea for a new feature? Found a bug? Want to make the extension better? Your contributions are welcome!

You can help in many ways:
- 💡 Suggest new features or improvements
- 🐛 Report bugs or issues
- 📝 Improve documentation
- 🧑‍💻 Submit pull requests

All feedback and contributions are greatly appreciated! Feel free to open an issue on GitHub to start a discussion about your ideas.

## License

The File Tree Generator extension is open-source software licensed under the MIT license.

## Disclaimer

The extension is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.