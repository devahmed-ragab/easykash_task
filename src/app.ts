import { sequelize } from "./sequelize";

import express from "express";
import helmet from "helmet";

import { config } from "./config/config";
import { MODELS } from "./models/models.index";

import { transaction_routes } from "./handlers/trabsaction.handler";
import { loger } from "./middlewares/util";

const port = config.server_port || 3000;
const app = express();

app.use(helmet());
app.use(loger);

transaction_routes(app);

app.use("/", async (req: express.Request, res: express.Response) => {
	res.json("server is working");
});

(async function () {
	try {
		sequelize.addModels(MODELS);
		await sequelize.sync();

		console.log("Database Connected");

		app.listen(port, (): void => {
			console.log(`server is runnin on port ${config.server_port}`);
		});
	} catch (err) {
		console.log("ERROR : SEQUALIZE COULDN'T SYNC MODELS WITH DATABASE TABLES.");
		console.log(err);
	}
	// Start the Server
})();

export default app;
