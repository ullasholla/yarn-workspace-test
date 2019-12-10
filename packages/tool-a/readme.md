# Introduction

This repository contains a very simple VSCode extension in a monorepo. The monorepo uses [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).
[lerna](https://github.com/lerna/lerna) is used to build the packages.

The VSCode extension has a dependency to `@foobar/lib` ( from the folder, `packages/tool-a/lib`). The `@foobar/lib` package exports a single function `foo()` that returns a string `"bar"`.

# Build Packages

Run `yarn && yarn install` at the project/workspace root to build the packages.

# Build Package extension

Run `yarn package` in the `packages/tools-a/ext` directory after building the packages to create the `.vsix` file.

# Install & run the extension

Run `code --install-extension <path-to-vsix-file>` to install the extension. After installation, invoke the `Hello World` command from the Command Palette.
The extension built from this binary does not run correctly as the package `lib` is not bundled. Examine the console in Developer Tools verify this (or just look at the generated `.vsix` file). On the other hand, if you debug the extension, it will run fine.

If you examine the `node_modules` folder in `packages/tool-a/ext` there is no `@foobar/lib`. Instead that package is hoisted to the root of the workspace (and in turn is a symlink to `packages/tool-a/lib`).
