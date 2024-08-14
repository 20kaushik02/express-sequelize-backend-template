require("dotenv-flow").config();

const util = require('util');
const express = require("express");

const cors = require("cors");
const helmet = require("helmet");

const logger = require("./utils/logger")(module);

const app = express();

// Enable this if you run behind a proxy (e.g. nginx)
app.set('trust proxy', process.env.TRUST_PROXY);

app.use(cors());
app.use(helmet());
app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static
app.use(express.static(__dirname + '/static'));

// Put routes here

// Fallbacks
app.use((req, res) => {
	res.status(200).send("Back-end for");
	logger.info("Unrecognized URL", { url: req.url });
	return;
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	logger.info(`App Listening on port ${port}`);
});

const cleanupFunc = (signal) => {
	if (signal)
		logger.info(`${signal} signal received, shutting down now...`);

	Promise.allSettled([
		// handle DB conn, sockets, etc. here
		util.promisify(server.close),
	]).then(() => {
		logger.info("Cleaned up, exiting.");
		process.exit(0);
	});
}

['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGTERM', 'SIGUSR1', 'SIGUSR2'].forEach((signal) => {
	process.on(signal, () => cleanupFunc(signal));
});
