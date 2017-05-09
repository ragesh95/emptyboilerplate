const masterMongoDBName = process.env.APP_DB || 'uniqtracker';

const mongo = {
  host: process.env.MONGO_HOST || 'localhost',
  port: process.env.MONGO_PORT || 27017
};

const mongoURL = ('mongodb://' + mongo.host + ':' + mongo.port + '/' +
  masterMongoDBName);

module.exports = {
  WWW_PORT: process.env.ZYNLA_WWW_PORT || process.env.PORT || 9090,
  MONGO_MASTER_DB_NAME: masterMongoDBName,
  MONGO_MASTER_SERVER: mongo,
  MONGO_URL: mongoURL,
  NEO4J_HOST: 'localhost',
  NEO4J_BOLT_URL: ('bolt://localhost'),
  NEO4J_USR: 'neo4j',
  NEO4J_PWD: 'password'
};
