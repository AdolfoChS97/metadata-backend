import { error } from '@/types/error.dt'

function errorHandler(e :unknown): error {
    const err = e as Error
    return { message: err.message, stack: JSON.stringify(err?.stack) }
}

export default errorHandler