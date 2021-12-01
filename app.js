const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

//app initialize
const app = express();

//middlewares
app.use(cors());

//routes middleware
app.use('/api', employeeRoutes);

//default route
app.use('/', (req, res) => {
  res.status(200).send("You have reached Judy's testing site");
});

//start the app
app.listen(4000, () => {
  console.log('App is started and listening on port 4000');
});
