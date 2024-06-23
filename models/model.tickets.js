import { randomUUID } from 'node:crypto'
import { calendario } from '../dataBase/tickets.js'

export class modelTickets {
  static getTickets () {
    if (calendario.tickets.length === 0) return false
    return calendario.tickets
  }

  static getTicket ({ id }) {
    const ticketFound = calendario.tickets.find(ticket => ticket.id === id)

    if (ticketFound === undefined) return false

    return ticketFound
  }

  static postTicket ({ body }) {
    const index = calendario.tickets.findIndex(ticket => ticket.id === body.id)

    if (index !== -1) {
      return false
    }

    const newTicket = {
      id: randomUUID(),
      ...body
    }

    const indexDia = calendario.dias.findIndex(dia => dia.dia === newTicket.dia)
    const diaUpdate = calendario.dias[indexDia]

    diaUpdate.message = newTicket.message
    calendario.tickets.push(diaUpdate)

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
