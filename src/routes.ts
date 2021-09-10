import { Router, Request, Response } from "express";
import listaEstadosBrasil from "./listaEstadosBrasil";

const routes = Router();

routes.get('/lista_estados_brasil', (request: Request, response: Response) => {
  return response.status(200).json(listaEstadosBrasil);
});

export default routes;