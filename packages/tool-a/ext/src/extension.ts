import * as vscode from 'vscode';
import { foo } from '@foobar/lib';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "ext" is now active!');

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		const msg = foo();
		vscode.window.showInformationMessage(`${msg}: Hello World!`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
