export type Connection = {
    id?: string,
    connectionName: string,
    accountName: string,
    user: string,
    password: string,
    warehouseName: string,
    dataSource?: 'Snowflake'
}