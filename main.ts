/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * � Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Parser from './src/Parser';
import * as readline from 'readline';

(async () => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question('Please enter a file or path to parse: ', async (input: string) => {
		console.log('Parsing...');
		const { result } = await Parser.ParseFiles(input.includes('.') ? { files: [input] } : { path: input });
		console.log('Parsing complete! \n Extracted data:');
		console.log(result);
	});
})();
