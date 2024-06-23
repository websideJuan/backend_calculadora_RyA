import express from 'express'
import jobs from './routes/route.jobs.js'
import tickets from './routes/route.tickets.js'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use(express.json())

app.use('/api/v1', jobs)
app.use('/api/v1', tickets)

app.get('/', (req, res) => {
  res.status(200).send('Server is running')
})

app.all('*', (req, res) => {
  res.status(404).send('404 Not Found')
})

const PORT = process.env.PORT || 3000

app.listen(3000)
console.log(`Server is running on port 3000: http://localhost:${PORT}/`)
