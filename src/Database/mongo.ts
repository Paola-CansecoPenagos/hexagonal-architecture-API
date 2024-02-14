import { MongoClient, Db } from 'mongodb';

const mongoURI = 'mongodb://localhost:27017/';

let db: Db;

export async function connectToMongoDB(databaseName: string): Promise<void> {
    try {
        const client = await MongoClient.connect(mongoURI);
        db = client.db(databaseName);
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
        throw error;
    }
}

export function getMongoDB(): Db {
    if (!db) {
        throw new Error('No hay conexión a MongoDB establecida');
    }
    return db;
}
