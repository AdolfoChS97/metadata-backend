import * as snowflake from 'snowflake-sdk'
import * as dotenv from 'dotenv'
import getEnvVariable from '../getEnvVariables'

dotenv.config()

const snowFlakeConnection = snowflake.createConnection({
    account: getEnvVariable('SNOWFLAKE_ACCOUNT'),
    username: getEnvVariable('SNOWFLAKE_USER'),
    password: getEnvVariable('SNOWFLAKE_PASSWORD'),
    warehouse: getEnvVariable('SNOWFLAKE_WAREHOUSE'),
})

export default snowFlakeConnection