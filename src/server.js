import app from './app';
import { PORT } from './config/app';

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API server started... on port ${PORT}`);
});
