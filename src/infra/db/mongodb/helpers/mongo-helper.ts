import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect (uri: string): Promise<void> {
    // this.client = await MongoClient.connect(process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://127.0.0.1:59635/')
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map: (collection: any, id: Uint8Array): any => {
    return Object.assign({}, collection, { id: collection._id })
  }
}
