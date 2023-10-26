import snowflakeCreateConnection from "../utils/database/snowflakeConnection"
import { getTablesMapper } from "../utils/mappers/tables.mapper"
import { SnowFlakeQueryResult } from "@/types/snowflake.dt"
import errorHandler from "../utils/handlers/error.handler"
import { getTablesResponse } from "@/types/tables.dt"

async function getTables(number: number | null = 1 ): Promise<getTablesResponse> {
    try {
        const getTables: Promise<getTablesResponse> = new Promise(async (resolve, reject) => {
            const snowflakeConn = await snowflakeCreateConnection(
                process.env.SNOWFLAKE_ACCOUNT as string,
                process.env.SNOWFLAKE_USER as string,
                process.env.SNOWFLAKE_PASSWORD as string,
                process.env.SNOWFLAKE_WAREHOUSE as string
            )
            snowflakeConn.connect((errConn, conn) => {
                if(errConn) {
                    reject(errConn)
                    return
                }

                conn.execute({
                    sqlText: `SELECT COUNT(${number}) FROM SNOWFLAKE_SAMPLE_DATA.INFORMATION_SCHEMA.TABLES`,
                    fetchAsString: ['JSON'],
                    complete: (err, stmt, rows) => {
                        if(err) {
                            reject(err)
                            return 
                        }
                        const [ queryResult ] = rows as Array<SnowFlakeQueryResult>
                        const [ tableNumbers,  ] = getTablesMapper(queryResult) as unknown as Array<number>
                        resolve({ tables: { qty: tableNumbers } })
                    }
                })
            })

            snowflakeConn.destroy((err, conn) => console.log('Connection destroyed.'))
        })
        return await getTables
    } catch (e) {
        const err = errorHandler(e)
        throw err
    }
}

export default getTables