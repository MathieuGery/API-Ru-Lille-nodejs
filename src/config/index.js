require('dotenv').config() // load .env file

module.exports = {
  port: 5500,
  app: 'Ru-API',
  env: process.env.NODE_ENV,
  secret: 'epitech42ruapi',
  hostname: 'localhost',
  mongo: {
    uri: 'mongodb+srv://pingu:iqQ5E7Vd4@cluster-api-ru-hxkst.gcp.mongodb.net/test?retryWrites=true&w=majority',
    testURI: process.env.MONGOTESTURI
  },
  transporter: {
    service: process.env.TRANSPORTER_SERVICE,
    email: process.env.TRANSPORTER_EMAIL,
    password: process.env.TRANSPORTER_PASSWORD
  }
}
