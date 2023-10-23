import getTablesController from '../controllers/tables.controller'
import { getTablesMiddleware } from '../middleware/tables.middleware'
import { error } from '@/types/error.dt'
import express from 'express'
const app = express()

app.get('/:number?', getTablesMiddleware, async (req, res) => {
    try {
        const { params: { number } } = req
        res.status(200).json({ err: 0, message: 'OK', data: await getTablesController(parseInt(number)) }).end()
    } catch (e) {
        const err = e as error
        res.status(500).json({ err: 1, message: err.message }).end()
    }
})

export default app