import express from 'express';
import routes from './routes';
import i18n from './config/i18n';

const app = express();

app.use(i18n.init);

app.use('/api/v1', routes);

export default app;
