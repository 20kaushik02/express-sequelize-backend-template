const logger = require("../utils/logger")(module);

const typedefs = require("../typedefs");

/**
 * Business logic to go in these controller functions.
 * Everything should be contained inside try-catch blocks
 * 
 * @param {typedefs.Req} req Express request object
 * @param {typedefs.Res} res Express response object
 */
const __controller_func = async (req, res) => {
	try {

	} catch (error) {
		res.sendStatus(500);
		logger.error("__controller_func", { error });
		return;
	}
}

module.exports = {
	__controller_func
};
