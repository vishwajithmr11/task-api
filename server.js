const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('./middleware/logger');
const taskRoutes = require('./routes/tasks');

app.use(express.json());
app.use(logger);

app.use('/api', taskRoutes);

app.get('/', (req, res) => {
  res.send('Task Management API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
