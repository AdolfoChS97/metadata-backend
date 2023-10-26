import { Connection } from "@/types/connection.dt"
import { testConnectionService } from '../services/connection.service'

async function testConnection(connection: Connection) {
    try {
        return await testConnectionService(connection)         
    } catch (e) {
        throw e
    }
}

export {
    testConnection
}