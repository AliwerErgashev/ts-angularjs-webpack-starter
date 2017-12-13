import * as express from "express";
import * as bodyParser from "body-parser";
import { api } from "./api";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.use("/api", api);

app.listen(9000, () => console.info("HTTP server up on port 9000"));
