import { MongoClient, Collection } from 'mongodb'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AccountModel } from '../../../../domain/models/account'

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
  },

  map: (accountData: AddAccountModel, id: Uint8Array): AccountModel => {
    return {
      email: accountData.email,
      id: id.toString(),
      name: accountData.name,
      password: accountData.password
    }
  }
}
