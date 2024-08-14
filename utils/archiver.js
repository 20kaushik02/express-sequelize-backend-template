const fs = require("fs");
const archiver = require('archiver');

/**
 * @param {string} sourceDir /some/folder/to/compress
 * @param {string} outPath /path/to/created.zip
 * @returns {Promise}
 */
function zipDirectory(sourceDir, outPath) {
	const archive = archiver('zip', { zlib: { level: 9 } });
	const stream = fs.createWriteStream(outPath);

	return new Promise((resolve, reject) => {
		archive
			.directory(sourceDir, false)
			.on('error', err => reject(err))
			.pipe(stream)
			;

		stream.on('close', () => resolve());
		archive.finalize();
	});
}

module.exports = {
	zipDirectory,
};
