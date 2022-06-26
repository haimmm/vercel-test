const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("server is working!");
})


app.listen(process.env.port, () => console.log("server is running on port 5050"));