const express = require('express');
const path = require('path');
const { json } = require('body-parser');
const routes = require('./app/routes/');

const app = express();

app.use(json())
app.use(bodyParser.urlencoded({ extended: false }));

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
  console.log(`Listening on port ${port} in this super keen env: ${process.env.NODE_ENV}`);
});

module.exports = app;
