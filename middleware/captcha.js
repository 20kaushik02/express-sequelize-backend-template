const fetch = require("cross-fetch");

const logger = require("../utils/logger")(module);

const typedefs = require("../typedefs");

/**
 * Google ReCAPTCHA v2 verification
 * 
 * @param {typedefs.Req} req 
 * @param {typedefs.Res} res 
 * @param {typedefs.Next} next 
 */
const verifyCaptcha = async (req, res, next) => {
	try {
		const secretKey = process.env.CAPTCHA_SECRET;

		const verifyCaptchaURL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;

		const captchaResp = await fetch(verifyCaptchaURL);
		const captchaData = await captchaResp.json();
		if (captchaData.success !== undefined && !captchaData.success) {
			res.status(403).send({
				message: "Failed captcha verification"
			});
			logger.error("Recaptcha", { captchaData });
			return;
		}
		next();
	} catch (error) {
		res.sendStatus(500);
		logger.error("verifyCaptcha", { error });
		return;
	}
}

module.exports = {
	verifyCaptcha
};
