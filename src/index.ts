import express from 'express'
import * as dotenv from 'dotenv'
import snokeFlakeConnection from './utils/database/snowflakeConnection'
import tableRoutes from './routes/tables'
import connectionRoutes from './routes/connection'
import getEnvVariables from './utils/getEnvVariables'
dotenv.config()



const app = express()
const port = getEnvVariables('APP_PORT') || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/tables', tableRoutes)
app.use('/connection', connectionRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
