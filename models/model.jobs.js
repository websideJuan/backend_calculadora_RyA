import { requiere } from '../utilities/requiere.js'
import { randomUUID } from 'node:crypto'

const jobs = requiere('../dataBase/jobs.json')

export class modelJobs {
  static getJobs () {
    if (jobs.length === 0) return false
    return jobs
  }

  static getJob ({ id }) {
    const jobFound = jobs.find(job => job.id === id)

    if (jobFound === undefined) return false

    return jobFound
  }

  static postJob ({ body }) {
    const index = jobs.findIndex(job => job.order === body.order)

    if (index !== -1) {
      return false
    }

    const newJob = {
      id: randomUUID(),
      ...body
    }

    jobs.push(newJob)
    return newJob
  }

  static putJob ({ id, body }) {
    const index = jobs.findIndex(data => data.id === id)

    if (index === -1) return false

    jobs[index] = {
      ...jobs[index],
      ...body
    }

    return jobs[index]
  }

  static deleteJob ({ id }) {
    const index = jobs.findIndex(data => data.id === id)

    if (index === -1) return false

    const removed = jobs.splice(index, 1)
    return removed
  }
}
