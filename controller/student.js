const express = require('express');

const mongoClient = require('../database/connection');



const studentSignUp = async (req,res) =>{
    const studentData = req.body;
    console.log(studentData);
    try{
        const result = await mongoClient.insertToDB(studentData);
        return res.status(200).send(result);

    }
    catch(err){
        console.log("Something went error");
        return res.status(500).send({message: `something went wrong while performing ${err}`});
    }
}

const findStudent = async (req,res)=>{
    const queryParam = req.query;
    try {
        const result = await mongoClient.findInDB(queryParam);
        console.log(result);
        return res.status(200).send(result);

    } catch (error) {
        return res.status(500).send({message: `Something went wrong ${error}`})
    }
}

const updateStudent = async(req,res)=>{
    const update = req.body;
    const filter = update.filter;
    const value = { $set: update.value};
    try {
        const result = mongoClient.updateInDb(filter,value);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send(error);
    }
}

const deleteStudent = async (req,res)=>{
    const condition = req.query;
    try {
        const result = await mongoClient.deleteInDb(condition);
        return res.status(500).send(result);
    } catch (error) {
        returnres.status(500).send(error);
    }
}
module.exports = {studentSignUp,findStudent, updateStudent, deleteStudent}