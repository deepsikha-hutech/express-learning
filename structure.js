const express = require('express')
const app = express()
const V1 = require('./routes/v1') 
const V2 = require('./routes/v2') 


app.get("/",(req,res)=>{
    res.send("Server is running")
})
app.use("/v1",V1)
app.use("/v2",V2)



app.listen(3000, () => {    
    console.log('Server is running on port 3000')
})




