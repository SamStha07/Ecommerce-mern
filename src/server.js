const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');

const GlobalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

const authRoute = require('./routes/authRoute');
const authAdminRoute = require('./routes/admin/authAdminRoute');

const app = express();

// environment variable
env.config();

// mongoose DB
const db = process.env.MONGO_URI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Database connected...');
  });

// middleware
app.use(express.json());

// routes
app.use('/api/users', authRoute);
app.use('/api/admin', authAdminRoute);

// middleware for unknown route to show error for all HTTPHeaders
// Global error handling Middleware
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(GlobalErrorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
