import {MongoClient} from 'mongodb'

const {
    MONGO_URI = 'mongodb+srv://linagodbole99:dAix1EtU6C6yxJDR@cluster0.oip3eje.mongodb.net/ineuronAssignGirija',

}= process.env

export const client = new MongoClient(MONGO_URI)
export const db = client.db()
