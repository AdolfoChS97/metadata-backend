import { getTablesResponse } from '@/types/tables.dt'
import getTablesService from '../services/tables.service'

async function getTables(number: number | null ): Promise<getTablesResponse> {
    try {
        if(Number.isNaN(number)) return await getTablesService()
        return await getTablesService(number)
    } catch (e) {
        throw e
    }
}


export default getTables