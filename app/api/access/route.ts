import { headers } from 'next/headers'
import { getLogger } from '@/logger/log-util'
import { NextResponse } from 'next/server';
import { updateUserInfo } from '@/server/getUser';



const USER_EMAIL_ADDRESS_HEADER = 'Cf-Access-Authenticated-User-Email'
const CF_JWT_HEADER = 'cf-access-jwt-assertion'
const logger = getLogger("Chat Server Backend");



export async function GET() {

    const headersList = headers()
    const userEmail = headersList.get(USER_EMAIL_ADDRESS_HEADER)
    const jwt = headersList.get(CF_JWT_HEADER)
    logger.info(userEmail)
    logger.info(jwt);

    updateUserInfo(userEmail, jwt)

    const response = {
        userEmail,
        jwt
    }
    return NextResponse.json(response)


}