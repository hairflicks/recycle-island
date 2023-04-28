import * as dotenv from 'dotenv'
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);

const ENV = process.env.NODE_ENV || 'production'
console.log(ENV)

// const __dirname = dirname(__filename)
dotenv.config({
    path: `${__dirname}/../.env.${ENV}`
})

console.log(process.env.DATABASE_URL)

