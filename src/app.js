const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const taskRoutes = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date() }));
app.use(errorHandler);

module.exports = app;
