import { SnowFlakeQueryResult } from "@/types/snowflake.dt"

function getTablesMapper(object: SnowFlakeQueryResult) {
    try {
        return Object.keys(object).map(key => object[key])
    } catch (e) {
        throw e        
    }
}

export {
    getTablesMapper
}