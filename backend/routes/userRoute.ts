import express from 'express'
import getUserInfo from '../controllers/userController'

const router = express.Router()

router.get('/:user', getUserInfo)

export default router
