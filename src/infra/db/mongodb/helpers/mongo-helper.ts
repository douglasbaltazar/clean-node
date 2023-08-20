import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://127.0.0.1:59635/')
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  }
}
