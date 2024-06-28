/* eslint-disable @typescript-eslint/no-unused-vars */
import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';
import config from './app/config';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.mongodb_url as string);
    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();

// unhandledRejection
process.on('unhandledRejection', () => {
  console.log(`😬 Unhandled Rejection is deleted !`);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// uncaughtException
process.on('uncaughtException', () => {
  process.exit(1);
});
