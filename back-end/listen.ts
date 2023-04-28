import { app } from "./app";

const port = 3030;

app.listen(port, (): void => {
  console.log('you have connected to the server...');
})