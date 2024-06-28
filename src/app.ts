import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get('/', (_req: Request, res: Response) => {
  return res.send('Hello world !');
});

// global error handler
app.use(globalErrorHandler);

// not found

app.use(notFound);

export default app;
