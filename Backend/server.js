import express from 'express'

const app = express();
app.use('/', (req, res) => {
  res.send('Site on construction')  
})

app.listen(5000, console.log("Running"))