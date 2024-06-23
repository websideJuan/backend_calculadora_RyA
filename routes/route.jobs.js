import { Router } from 'express'
import { JobsController } from '../controllers/controller.jobs.js'
const router = Router()

router.get('/jobs', (req, res) => JobsController.getJobs(req, res))

router.get('/job/:id', (req, res) => JobsController.getJob(req, res))

router.post('/jobs', (req, res) => JobsController.postJob(req, res))

router.put('/job/:id', (req, res) => JobsController.putJob(req, res))

router.delete('/job/:id', (req, res) => JobsController.deleteJob(req, res))

export default router
