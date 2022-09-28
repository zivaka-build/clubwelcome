
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');


// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 *********************

app.get('/emailSender', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/emailSender/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});*/

/****************************
* Example post method *
****************************/

app.post('/emailSender', function(req, res) {
  // Add your code here

  var transport = {
    service: 'Gmail',
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    auth: {
      user: "clubwelcomechinsurah@gmail.com",
      pass: "txlmcmfoqaqmwxxr"
    }
  }

  var transporter = nodemailer.createTransport(transport)
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });
  
  /*var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var category = req.body.category*/

  var name = req.body.name
  var phoneNo = req.body.phoneNo
  var email = req.body.email
  var message = req.body.message
  var category = req.body.category

  var subject = "New Enquiry - "+category + " : "+name
  var content = `name: ${name} \n phoneNo: ${phoneNo} \n email: ${email} \n message: ${message} `
  var mail = {
    from: name,
    to: "clubwelcomechinsurah@gmail.com",  // Change to email address that you want to receive messages on
    subject: subject ,
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({success: 'post call succeed!', url: req.url, body: err})
    } else {
      res.json({
        status: true
      })
    }
  })








  
});

app.post('/emailSender/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
***************************

app.put('/emailSender', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/emailSender/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});*/

/****************************
* Example delete method *
***************************

app.delete('/emailSender', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/emailSender/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});*/

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
