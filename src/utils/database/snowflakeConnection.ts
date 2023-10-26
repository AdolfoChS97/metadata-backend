import * as snowflake from 'snowflake-sdk'

async function snowflakeCreateConnection(account: string, username: string, password: string, warehouse: string): Promise<snowflake.Connection> {
    return snowflake.createConnection({
        account: account,
        username: username,
        password: password,
        warehouse: warehouse,
    })
}

export default snowflakeCreateConnection