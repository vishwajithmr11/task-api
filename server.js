const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const taskRoutes = require('./routes/tasks');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

app.use('/api', taskRoutes);

app.get('/', (req, res) => {
  res.send('Task API is running!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
