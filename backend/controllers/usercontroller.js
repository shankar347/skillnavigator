import express from 'express'
import { getalltrainers, logout, register
    , updateuser } from '../routes/userroutes.js'

import Authuser from '../middlewares/authuser.js'
import { login } from '../routes/userroutes.js'

const router=express.Router()


router.post('/',register)
router.post('/login',login)
router.put('/',Authuser,updateuser)
router.get('/',logout)
router.get('/trainers',getalltrainers)


export default router
