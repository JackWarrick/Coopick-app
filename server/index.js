const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send("server running on port 3001")
});


app.listen(3001, () => {
    console.log("server running on port 3001")

});