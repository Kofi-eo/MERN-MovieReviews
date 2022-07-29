import app from "./server.js"
import mongodb from "mongodb";
import dotenv from "dotenv";
async function main(){
    dotenv.config()
    const client = new mongodb.MongoClient()
}