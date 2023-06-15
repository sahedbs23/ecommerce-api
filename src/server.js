import app from './app';
import { PORT } from './config/app';

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API server started... on port ${PORT}`);
});

server.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
});
