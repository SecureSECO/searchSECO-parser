/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * � Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Parser from '../src/Parser';
import Logger, { Verbosity } from '../src/searchSECO-logger/src/Logger';
import path from 'path';

describe('The parser', () => {
	let hashes: string[] = [];
	const expectedHashes = [
		'bc3f118144695b94a2ebf4beadac560c',
		'b4e156d5abd7783bc3f69d868d49498f',
		'4e9ae211289aa2952bc0095b809e5811',
		'2265ae19af53210fff624a55552e2754',
		'b530d6067cdedb1a971647bccefb68df',
		'e98a29cebb7e0c784e380e773420d3e5',
		'2fb63ed9e80d5b0b592d8ed77360e034',
		'87c0b95dd6809eb25d88182619a67cc3',
		'74575f74059e69eda6903e280881dd0e',
		'86d6e84b3e87436fc7a1543885553871',
		'e97f3a052bc552c84481ca54a44c8aa3',
		'74575f74059e69eda6903e280881dd0e',
		'ba6ede36f60c0dbeda878c7e859fa0b2',
		'45495c06036f13bd1bf7ce95a5fff54e',
		'74575f74059e69eda6903e280881dd0e',
		'ba6ede36f60c0dbeda878c7e859fa0b2',
		'45495c06036f13bd1bf7ce95a5fff54e',
		'74575f74059e69eda6903e280881dd0e',
	];

	beforeAll(async () => {
		Logger.SetVerbosity(Verbosity.SILENT);

		const basePath = path.join(__dirname, './to_parse');
		hashes = (await Parser.ParseFiles(basePath, Logger.GetVerbosity())).result.map((hash) => hash.Hash);
	});

	it('parses the correct number of files', () => {
		expect(hashes.length).toBe(expectedHashes.length);
	});

	it('extracts correct function hashes', () => {
		hashes.forEach((hash) => {
			expect(expectedHashes).toContain(hash);
			const idx = expectedHashes.indexOf(hash);
			expectedHashes.splice(idx, 1);
		});
	});
});
