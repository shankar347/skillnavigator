import express from 'express'
import Authuser from '../middlewares/authuser.js'
import { createcourse, createreport, getallcourse, getcourse } from '../routes/courserotes.js'

const router=express.Router()

router.post('/',Authuser,createcourse)
router.post('/report',Authuser,createreport)
router.get('/',Authuser,getallcourse)
router.get('/:id',Authuser,getcourse)


export default router