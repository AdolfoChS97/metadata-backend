import { Connection, TestConnectionResponse } from "@/types/connection.dt"
import { testConnectionService } from '../services/connection.service'

async function testConnectionController(connection: Connection): Promise<TestConnectionResponse> {
    try {
        return await testConnectionService(connection)         
    } catch (e) {
        throw e
    }
}

export {
    testConnectionController
}