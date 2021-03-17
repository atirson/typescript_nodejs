import express from 'express';

import { categoriesRoutes } from './routes/contegories.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.get('/', (request, response) => {
  return response.json({ message: 'Teste Hello' });
});

app.listen(3333, () => console.log('Server is running!'));
