const app = require("./src/app");
const port = 27017;

app.listen(port, () => {
  console.log(`App está rodando na porta ${port}`);
});
