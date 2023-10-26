export type Connection = {
    accountName: string,
    user: string,
    password: string,
    warehouseName: string
}

export type ConnectionSuccess = {
    connection: boolean
}

export type TestConnectionResponse = Pick<Connection, "accountName" | "user" | "warehouseName"> & ConnectionSuccess
