import express from 'express'
import Authuser from '../middlewares/authuser.js'
import { createbatch, getallbatch, getbatch } from '../routes/batchroutes.js'

const router=express.Router()

router.post('/',Authuser,createbatch)
router.get('/',Authuser,getallbatch)
router.get('/:id',Authuser,getbatch)


export default router