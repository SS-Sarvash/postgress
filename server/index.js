const express=require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/adbk", async(req,res)=>{
    try {
        const { name,phno,adrs,city,pincode } = req.body;
        const qry = await pool.query("INSERT INTO addr(name,phno,adrs,city,pincode) values($1,$2,$3,$4,$5)",
        [name,phno,adrs,city,pincode]);
        res.json(qry);

    } catch (error) {
        console.log(error);
    }
})
app.get("/adbk", async(req,res)=>{
    try {
        const qry = await pool.query("SELECT * from addr");
        res.json(qry.rows);

    } catch (error) {
        console.log(error);
    }
})

app.get("/adbk/:id/:val", async(req,res)=>{
    try {
        const { id,val }= req.params;
        
        const qry = await pool.query(`SELECT * FROM addr WHERE ${id} = $1`,[val]);
        res.json(qry.rows);
        // res.send(id+val);
 
    } catch (error) {
        console.log(error);
    }
})

app.put("/adbk/:id", async(req,res)=>{
    try {
        
        const { id } = req.params;
        const { name,phno,adrs,city,pincode } = req.body;
        const qry = await pool.query("update addr set name=$1,phno=$2,adrs=$3,city=$4,pincode=$5 where id=$6",[name,phno,adrs,city,pincode,id]);
        res.json("adbk was updated!");
    } catch (error) {
        console.log(error);
    }
})

app.delete("/adbk/:id", async(req,res)=>{
    try {
        
        const { id } = req.params;
        const qry = await pool.query("delete from addr where id=$1",[id]);
        res.json("delete successful");

    } catch (error) {
        console.log(error);
    }
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})