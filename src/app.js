const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(' MongoDB connecté'))
.catch((err) => console.error(' Erreur de connexion MongoDB :', err));

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

app.use(errorHandler);

module.exports = app;
