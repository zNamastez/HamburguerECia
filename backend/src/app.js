const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// Outras rotas e middlewares...

const dashboardRoutes = require('./routes/dashboard');
app.use('/dashboard', dashboardRoutes);

module.exports = app;