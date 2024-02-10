'use server'
import { createClient } from 'redis';
import { getLogger } from '@/logger/log-util'


const logger = getLogger("Chat Server Backend");



export const updateUserInfo = async (userEmail: string | null, jwt: string | null) => {

    const redisClient = await createClient({
        password: 'XnchlcTBWoleK3oMQ2On6CsLRthGNWLr',
        socket: {
            host: 'redis-15912.c323.us-east-1-2.ec2.cloud.redislabs.com',
            port: 15912
        }
    });
    await redisClient.connect()
    const redisJWT = await redisClient.get(userEmail || '')

    if (redisJWT !== jwt) {
        logger.info('redis update')
        await redisClient.set(userEmail || '', jwt || '')
    } else {
        logger.info('redis up to date')

    }
    await redisClient.shutdown()
}




