import * as dotenv from "dotenv" 

const ENV = process.env.NODE_ENV || 'production'
console.log(ENV)

dotenv.config({
    path: `${__dirname}/../.env.${ENV}`
})

console.log(process.env.DATABASE_URL)

