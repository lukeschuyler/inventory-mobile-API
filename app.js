const express = require('express');
const path = require('path');
const { json, urlencoded } = require('body-parser');
const routes = require('./app/routes/');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(json())
// app.use(urlencoded({ extended: false }));

app.use('/api/v1/', routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if(app.get('env') === 'development') {
  app.use( (err, req, res, next) => {
    console.log("development error", err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

app.use( (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

const port = process.env.PORT || 8082;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
