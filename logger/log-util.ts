
import pino, { Logger } from "pino";


const fileTransport = pino.transport({
    targets: [
        {
            target: "pino/file",
            level: 'error',
            options: {
                destination: `/log/gpt/error.log`
            }
        },
        {
            target: "pino/file",
            level: 'info',
            options: {
                destination: `/log/gpt/info.log`
            }
        },
        {
            target: "pino/file",
            level: 'debug',
            options: {
                destination: `/log/gpt/debug.log`
            }
        },
    ],

})

const logger = pino(fileTransport)



export default logger


