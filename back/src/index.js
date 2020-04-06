const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes'); 

app.use(express.json());
app.use(routes);
app.use(cors());

/**
 * MÉTODOS HTTP
 * GET
 * POST
 * PUT
 * DELETE
 */

 /**
  * Tipos de parâmetros:
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação) adicionar parâmetros com o "&"
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */


app.listen(3333);