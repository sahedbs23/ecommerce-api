import express from "express";
import routes from "./routes";

const app = express();

const router = express.Router();

router.use('/api', routes);
router.use('*', (req, res) => {
  return res.json({
    status: 404
  });
});

export default app;
