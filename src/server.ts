import { Server } from 'http';
import app from './app';

let server: Server;

async function main() {
  try {
    server = app.listen(5000, () => {
      console.log(`Example app listening on port 5000`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
