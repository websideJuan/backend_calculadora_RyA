import { Router } from 'express'
import { TicketsController } from '../controllers/controller.tickets.js'
const router = Router()

router.get('/tickets', (req, res) => TicketsController.getTickets(req, res))

router.get('/ticket/:id', (req, res) => TicketsController.getTicket(req, res))

router.post('/tickets', (req, res) => TicketsController.postTicket(req, res))

router.put('/ticket/:id', (req, res) => TicketsController.putTicket(req, res))

router.delete('/ticket/:id', (req, res) => TicketsController.deleteTicket(req, res))

export default router
