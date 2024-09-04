const express = require("express");

// Define uma classe para organizar a lógica da aplicação
class AppControllers {
  constructor() {
    // Cria uma nova instância do express dentro da classe
    this.express = express();
    // Chama o método middlewares para configurar os middlewares
    this.middlewares();
    // Chama o método routes para definir as rotas da API
    this.routes();
  }

  middlewares() {
    // Permite que a aplicação receba dados em formato JSON nas requisições
    this.express.use(express.json());
  }

  // Define as rotas da nossa API
  routes() {
    const apiRoutes = require("./routes/apiRoutes");
    this.express.use("/Numbers/api/v1/", apiRoutes);

    // Define uma rota GET para o caminho health
    this.express.get("/health/", (req, res) => {
      res.send({
        nome: "Joao pedro alexandre",
        idade: "17 anos",
        CPF: "43604104840",
      });
    }); // Essa rota é usada para verificar se a API está OK
  }
}

// Exportando a instância de Express configurada, para que seja acessada em outros arquivos
module.exports = new AppControllers().express;
