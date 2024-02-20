'use server'
import { createClient } from 'redis';
import logger from '@/logger/log-util'
import connectToRedis from '@/redis/connectToRedis'





export const updateUserInfo = async (userEmail: string | null, jwt: string | null) => {

    const redisClient = await connectToRedis()
    const redisJWT = await redisClient.get(userEmail || '')

    if (redisJWT !== jwt) {
        logger.info('redis update')
        await redisClient.set(userEmail || '', jwt || '')
    } else {
        logger.info('redis up to date')

    }
}




