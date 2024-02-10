import { headers } from 'next/headers'
import { getLogger } from '@/logger/log-util'
import { NextResponse } from 'next/server';
import { createClient } from 'redis';


const USER_EMAIL_ADDRESS_HEADER = 'Cf-Access-Authenticated-User-Email'
const CF_JWT_HEADER = 'cf-access-jwt-assertion'
const logger = getLogger("Chat Server Backend");

const redisClient = await createClient({
    password: 'XnchlcTBWoleK3oMQ2On6CsLRthGNWLr',
    socket: {
        host: 'redis-15912.c323.us-east-1-2.ec2.cloud.redislabs.com',
        port: 15912
    }
});

logger.info('const area excuted')


export async function GET() {

    const headersList = headers()
    const userEmail = headersList.get(USER_EMAIL_ADDRESS_HEADER)
    const jwt = headersList.get(CF_JWT_HEADER)
    logger.info(userEmail)
    logger.info(jwt);

    const redisEmail = await redisClient.get(USER_EMAIL_ADDRESS_HEADER)
    const redisJWT = await redisClient.get(CF_JWT_HEADER)

    if (redisEmail !== userEmail || redisJWT !== jwt) {
        await redisClient.set(USER_EMAIL_ADDRESS_HEADER, userEmail || '')
        await redisClient.set(CF_JWT_HEADER, jwt || '')
    }

    const response = {
        userEmail,
        jwt
    }
    return NextResponse.json(response)


}