/**
 * Recursively build a FormData object from a JSON object
 * @param {FormData} formData
 * @param {any} data
 * @param {string} parentKey
 */
function buildFormData(formData, data, parentKey) {
	if (data && typeof data === 'object' && !(data instanceof Date)) {
		Object.keys(data).forEach(key => {
			buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
		});
	} else {
		const value = data == null ? '' : data;

		formData.append(parentKey, value);
	}
}

/**
 * Converts a JSON object to a FormData object
 * @param {any} data
 * @returns {FormData}
 */
function jsonToFormData(data) {
	const formData = new FormData();

	buildFormData(formData, data);

	return formData;
}

module.exports = {
	jsonToFormData,
	buildFormData,
};
