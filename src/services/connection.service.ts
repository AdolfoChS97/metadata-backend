import { Connection, TestConnectionResponse } from "@/types/connection.dt"
import errorHandler from "../utils/handlers/error.handler"
import snowflakeCreateConnection from "../utils/database/snowflakeConnection"

async function testConnectionService({ accountName, user, password, warehouseName }: Connection): Promise<TestConnectionResponse> {
    try {
        const snowflake = await snowflakeCreateConnection(accountName, user, password, warehouseName)
        const testConnection: Promise<any> = new Promise((resolve, reject) => {
            snowflake.connect((err, conn) => {
                if(err) {
                    reject(err)
                    return
                }
                resolve({ connection: conn.isUp(), user: user, account: accountName, warehouse: warehouseName   })
            })
        })

        return await testConnection
    } catch (e) {
        const err = errorHandler(e)
        throw err   
    }
}

export {
    testConnectionService
}