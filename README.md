# entry_manager
An entry management software

## How to run 
1. first of all you should have install npm and Node.js . you can install it form here https://nodejs.org/en/download/
2. now as I am using some third party API to send email , msg and mongoDB for storing visitor and host informatin.You have to have a acount on the following to use this application.
  - MongoDb - https://www.mongodb.com/cloud/atlas
  - Nexmo - https://www.nexmo.com/
3. then create a file ".env" which will contain key, secret, etc. above API and set the value following variables
      EMAIL="Your_email_id"
      PASSWORD="Your_email_id's_password"
      MONGODB="MONGODB_Connection_url"
      NEXMO_KEY="nexmo_key"
      NEXMO_SERECT="nexmo_secret"
4. And default host information
      HOST_ADDRESS="Default_host_address"
      HOST_EMAIL="Default_host_email"
      HOST_NAME="Default_host_name"
      HOST_PHONE="Default_host_phone"

5 . after all this do *npm installl* and *npm start* .
6 . the server will get start on port: 3000 
