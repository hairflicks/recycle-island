import * as dotenv from "dotenv" 
import mongoose from "mongoose"

const ENV = process.env.NODE_ENV || 'production'

dotenv.config({
    path: `${__dirname}/../.env.${ENV}`
})

if (!process.env.DATABASE_URL) {
    throw new Error('PGDATABASE or DATABASE_URL not set');
  }

export const db = mongoose.connect(process.env.DATABASE_URL)


