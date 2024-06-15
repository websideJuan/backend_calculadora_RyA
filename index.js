import express from 'express'
import { router } from './routes/route.jobs.js'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.json())
app.use('/api/v1', router)

app.get('/', (req, res) => {
  res.status(200).send('Server is running')
})

const PORT = process.env.PORT || 3000

app.listen(3000)
console.log(`Server is running on port 3000: http://localhost:${PORT}/`)
