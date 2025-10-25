
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import env from 'dotenv'

// cofiguraation
env.config()
const app = express()
const port = process.env.PORT

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({
  methods: ['GET','POST','PATCH','DELETE'],
  allowedHeaders: ['contentType']
}))

app.listen(port, ()=>{
  console.log(`App runnig on port -> ${port}`)
})
