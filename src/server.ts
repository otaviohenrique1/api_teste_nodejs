import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/static', express.static(__dirname + '/bandeiras'));
app.use(routes);

app.listen(3333, () => console.log('Express iniciado'));
