import { randomUUID } from 'node:crypto'
import { calendario } from '../dataBase/tickets.js'

export class modelTickets {
  static getTickets () {
    if (calendario.dias.length === 0) return false
    return calendario
  }

  static getTicket ({ id }) {
    const ticketFound = calendario.dias.find(ticket => ticket.dia === parseInt(id))

    if (ticketFound === undefined) return false

    return ticketFound
  }

  static postTicket ({ body }) {
    const index = calendario.tickets.findIndex(ticket => ticket.id === body.id)

    if (index !== -1) {
      return false
    }

    calendario.tickets.push({
      ...body,
      id: randomUUID()
    })

    const indexDia = calendario.dias.findIndex(dia => dia.dia === body.dia)
    const diaUpdate = calendario.dias[indexDia]

    diaUpdate.message = body.message
    diaUpdate.type = body.type

    return calendario
  }

  static putTicket ({ id, body }) {
    const index = calendario.tickets.findIndex(data => data.id === id)

    if (index === -1) return false

    calendario.tickets[index] = {
      ...calendario.tickets[index],
      ...body
    }

    return calendario.tickets[index]
  }

  static deleteTicket ({ id }) {
    const index = calendario.tickets.findIndex(data => data.id === id)

    if (index === -1) return false

    const removed = calendario.tickets.splice(index, 1)
    return removed
  }
}
