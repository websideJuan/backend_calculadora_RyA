import { modelTickets } from '../models/model.tickets.js'
import { validateTicket, validatePartialTicket } from '../schemas/schema.tickets.js'

export class TicketsController {
  static async getTickets (req, res) {
    const response = modelTickets.getTickets()

    if (response) {
      return res.status(200).json(response)
    }
    return res.status(404).json({ message: 'Tickets not found' })
  }

  static async getTicket (req, res) {
    const { id } = req.params
    console.log(id)

    const response = modelTickets.getTicket({ id })

    if (response) {
      return res.status(200).json(response)
    }
    return res.status(404).json({ message: `the ticket ${id} is not found` })
  }

  static async postTicket (req, res) {
    const { body } = req
    const isValidate = validateTicket(body)

    if (isValidate.error) {
      return res.status(400).json({ message: isValidate.error })
    }

    const response = modelTickets.postTicket({ body })

    if (response) {
      return res.status(201).json({ message: 'Ticket created', response })
    }

    return res.status(400).json({ message: 'Ya existe un ticket con esta orden' })
  }

  static async putTicket (req, res) {
    const { id } = req.params
    const { body } = req
    const isValidate = validatePartialTicket(body)

    if (isValidate.error) {
      return res.status(400).json({ message: isValidate.error })
    }

    const response = modelTickets.putTicket({ id, body })

    if (response) {
      return res.status(200).json({ response })
    }

    return res.status(404).json({ message: `the ticket ${id} is not found` })
  }

  static async deleteTicket (req, res) {
    const { id } = req.params
    const response = modelTickets.deleteTicket({ id })

    if (response) {
      return res.status(200).json({ message: `the ticket ${id} is deleted` })
    }

    return res.status(404).json({ message: `the ticket ${id} is not found` })
  }
}
