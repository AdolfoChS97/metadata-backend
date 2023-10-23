import { getTablesMapper } from "../utils/mappers/tables.mapper"
import snowflake from "../utils/database/snowflakeConnection"
import { SnowFlakeQueryResult } from "@/types/snowflake.dt"
import errorHandler from "../utils/handlers/error.handler"
import { getTablesResponse } from "@/types/tables.dt"



async function getTables(number: number | null = 1 ): Promise<getTablesResponse> {
    try {
        const getTables: Promise<getTablesResponse> = new Promise((resolve, reject) => {
            snowflake.connect((errConn, conn) => {
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
        })
        return await getTables
    } catch (e) {
        const err = errorHandler(e)
        throw err
    } finally {
        snowflake.destroy((err, conn) => console.log('Connection destroyed.'))
    }
}

export default getTables