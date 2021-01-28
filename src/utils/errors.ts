class FileNotFound extends Error {
    constructor(value : string){
        super(`${value} was not found or is currently unavailable`)

        this.name = 'FileNotFound'

        if(Error.captureStackTrace){
            Error.captureStackTrace(this, FileNotFound)
        }
    }
}

export {FileNotFound}