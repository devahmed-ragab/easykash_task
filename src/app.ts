import express from "express";
import helmet from "helmet";

const port = 3000;

const app = express();
app.use(helmet());

app.use("/", (req: express.Request, res: express.Response) => {
  res.send("server is working...");
});

app.listen(port, (): void => {
  // eslint-disable-next-line no-console
  console.log("server is working...");
});

export default app;
