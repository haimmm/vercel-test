const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("server is working!");
})


app.listen(5050, () => console.log("server is running on port 5050"));