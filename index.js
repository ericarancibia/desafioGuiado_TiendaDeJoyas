import express from 'express';
import joyasRouter from './routes/joyasRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', joyasRouter);
app.get('/', (req, res) => {
  res.send('Oh wow! this is working =)');
});
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  });