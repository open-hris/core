const { MongoClient } = require('mongodb')

module.exports = async function connectToCluster(uri) {
  let mongoClient

  try {
    mongoClient = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.info('🚶 MONGODB: Connecting to MongoDB')
    await mongoClient.connect()
    console.info('✅ MONGODB: Successfully connected to MongoDB')
    return mongoClient
  } catch (error) {
    console.error('❌ MONGODB: Connection to MongoDB failed!')
    console.error(error)
    process.exit()
  }
}
