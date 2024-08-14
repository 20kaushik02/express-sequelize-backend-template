/**
 * Returns a timestamp string to use for timestamped files
 * @returns {string} String of current datetime in YYYYMMDDHHMMSS format
 */
const dateForFilename = () => {
	return new Date().
		toISOString().slice(-24).
		replace(/\D/g, '').
		slice(0, 14);
}

module.exports = {
	dateForFilename,
};
