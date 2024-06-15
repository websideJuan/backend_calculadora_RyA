import { modelJobs } from '../models/model.jobs.js'
import { validateJob, validatePartialJob } from '../schemas/schema.jobs.js'

export class JobsController {
  static async getJobs (req, res) {
    const response = modelJobs.getJobs()

    if (response) {
      return res.status(200).json(response)
    }
    return res.status(404).json({ message: 'Jobs not found' })
  }

  static async getJob (req, res) {
    const { id } = req.params
    const response = modelJobs.getJob({ id })

    if (response) {
      return res.status(200).json(response)
    }
    return res.status(404).json({ message: `the job ${id} is not found` })
  }

  static async postJob (req, res) {
    const { body } = req
    const isValidate = validateJob(body)

    if (isValidate.error) {
      return res.status(400).json({ message: isValidate.error })
    }

    const response = modelJobs.postJob({ body })

    if (response) {
      return res.status(201).json({ message: 'Job created', response })
    }

    return res.status(400).json({ message: 'Ya existe un trabajo con esta orden' })
  }

  static async putJob (req, res) {
    const { id } = req.params
    const { body } = req
    const isValidate = validatePartialJob(body)

    if (isValidate.error) {
      return res.status(400).json({ message: isValidate.error })
    }

    const response = modelJobs.putJob({ id, body })

    if (response) {
      return res.status(200).json({ response })
    }

    return res.status(404).json({ message: `the job ${id} is not found` })
  }

  static async deleteJob (req, res) {
    const { id } = req.params
    const response = modelJobs.deleteJob({ id })

    if (response) {
      return res.status(200).json(response)
    }

    return res.status(404).json({ message: `the job ${id} is not found` })
  }
}
