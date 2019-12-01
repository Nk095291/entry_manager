# entry_manager
An entry management software



## How to run

The app is live on this [link](http://entry-manager.herokuapp.com) .You can check it out there or just follow the following steps.

1. First of all you need Node.js to run this applicaton, If you don't have Node.js installed, head over to [nodejs.org](https://nodejs.org/en/) and download the appropriate installer for your system. 
2. Now to proceed you must have account on both
  - [MongoDb](https://www.mongodb.com/cloud/atlas) - for database
  - [Nexmo](https://www.nexmo.com/) - for sending msg
3. then create a file ".env" which will contain key, secret, etc. for the above API and then set the value following variables
  - EMAIL="Your_email_id"
  - PASSWORD="Your_email_id's_password"   //make sure to allow third party app like this one to use your gmailId, [click here](https://myaccount.google.com/u/2/lesssecureapps?) 
  - MONGODB="MONGODB_Connection_url"
  - NEXMO_KEY="nexmo_key"
  - NEXMO_SERECT="nexmo_secret"

5 .Then just run the following commands
```
  > npm install 
  > npm start
```
6 . the server will get start on port: 3000 

## some highlight features

  - cover almost every case like what is host info. is not provide visitor come or somebody try to check-out before even checking-in.
  - If any some error occur this application will show a error page and send the developer means me :neckbeard: an email about to error to solve the issue asap.
  - user friendly UI :simple_smile:.
  - country code dropdown with flags
  - mobile compatible
  - organised and clean code :dancers:
