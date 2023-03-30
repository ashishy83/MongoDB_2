const { query } = require("express");
const {MongoClient} = require("mongodb");

const url = "mongodb+srv://enigmaticwolf83:449ec5cd@cluster0.7ttlf1s.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

const insertToDB = async(data)=>{
    await client.connect();
    const database = client.db("student");
    const collection = database.collection('information');
    const dbResponse = await collection.insertOne(data);
    await client.close();
    return dbResponse;
}


const findInDB = async (query)=>{
   try {
    await client.connect();
    const database = client.db('student');
    const collection = database.collection('information');
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse;
   } catch (error) {
    console.log('error');
    return error;
   }
}

const updateInDb = async (filterCond, value) =>{
    try {
        await client.connect();
        const database = client.db('student');
        const collection = database.collection('information');
        const dbResponse = await collection.updateOne(filterCond, value);
        await client.close();
        return dbResponse;
        
        
    } catch (error) {
        return error;
    }
}

const deleteInDb = async (filterCond, value)=>{
    try {
        await client.connect();
        const database = client.db('student');
        const collection = database.collection('information');
        const dbResponse = await collection.deleteOne(filterCond,value);
        await client.close();
        return dbResponse;
    } catch (error) {
        return error;
    }
}

module.exports = {insertToDB, findInDB, updateInDb, deleteInDb}