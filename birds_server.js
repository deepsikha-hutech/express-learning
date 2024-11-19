const express = require('express')
const app = express()
const birds = require('./birds_routes.js') 


app.use("/birds",birds)
app.use("/user",birds)
app.use("/dashboard",birds)
app.use("/stocks",birds)


app.listen(3000, () => {    
    console.log('Server is running on port 3000')
})




