'use server'
import { createClient } from 'redis';
import { getLogger } from '@/logger/log-util'


const USER_EMAIL_ADDRESS_HEADER = 'Cf-Access-Authenticated-User-Email'
const CF_JWT_HEADER = 'cf-access-jwt-assertion'

const logger = getLogger("Chat Server Backend");



export const updateUserInfo = async (userEmail: string | null, jwt: string | null) => {

    const redisClient = await createClient({
        password: 'XnchlcTBWoleK3oMQ2On6CsLRthGNWLr',
        socket: {
            host: 'redis-15912.c323.us-east-1-2.ec2.cloud.redislabs.com',
            port: 15912
        }
    });
    const redisEmail = await redisClient.get(USER_EMAIL_ADDRESS_HEADER)
    const redisJWT = await redisClient.get(CF_JWT_HEADER)

    if (redisEmail !== userEmail || redisJWT !== jwt) {
        logger.info('redis update')
        await redisClient.set(USER_EMAIL_ADDRESS_HEADER, userEmail || '')
        await redisClient.set(CF_JWT_HEADER, jwt || '')
    } else {
        logger.info('redis up to date')

    }
}




