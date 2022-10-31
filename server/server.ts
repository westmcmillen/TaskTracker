import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
