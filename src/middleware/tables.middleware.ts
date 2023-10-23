import { Request, Response, NextFunction } from "express" 

function getTablesMiddleware(req: Request, res: Response, next: NextFunction) {
    const { params: { number } } = req
    if(parseInt(number) < 0 && number !== undefined) return res.status(400).json({ err: 1, message: 'Invalid number' }).end()
    if(Number.isNaN(parseInt(number)) && number !== undefined) return res.status(400).json({ err: 1, message: 'Param should be a number' }).end()
    next()
}

export {
    getTablesMiddleware
}