import express from 'express'
import axios from 'axios'
import { registerRoutes } from './src/utils'

// const productsApi = axios.create({ baseURL: 'http://localhost:8000/produtos' })

const app = express()
app.use(express.json())
app.get('/', async (req, res) => {
  return res.send({message: 'noting to show'})
})

registerRoutes('produtos', 8000, app)
registerRoutes('servicos', 8001, app)
registerRoutes('clientes', 8002, app)
registerRoutes('users', 8002, app)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})