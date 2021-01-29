
class ServerHandler {
    static onError(error: { syscall: string; code: any; }){
        if(error.syscall !== 'listen'){
            throw error
        }
        switch (error.code) {
            case 'EACCES':
                console.log('permission denied');
                process.exit(1)
                break;

            case 'EADDRINUSE':
                console.log('port already in use.')
                process.exit(1)
                break;

            default:
                throw error
        
        }
    }

    static onListen(){
        return console.log(`server started on ${process.env.PORT}`)
    }
}

export default ServerHandler