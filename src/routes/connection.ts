import express from 'express'
const app = express()
import { error } from "@/types/error.dt"
import { Connection } from '@/types/connection.dt'
import { testConnection } from '../controllers/connection.controller'
app.post('/', async (req: any, res: any) => {
    try {
        const connection : Connection = req.body
        res.status(200).json({ err: 0, message: 'OK', data: await testConnection(connection) }).end()
    } catch (e) {
        const err = e as error
        res.status(500).json({ err: 1, message: err.message }).end()
    }
})

export default app