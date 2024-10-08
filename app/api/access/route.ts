import { headers } from 'next/headers'
import logger from '@/logger/log-util'
import { NextResponse } from 'next/server';



const USER_EMAIL_ADDRESS_HEADER = 'Cf-Access-Authenticated-User-Email'
const CF_JWT_HEADER = 'cf-access-jwt-assertion'



export async function GET() {

    const headersList = headers()
    const userEmail = headersList.get(USER_EMAIL_ADDRESS_HEADER)
    const jwt = headersList.get(CF_JWT_HEADER)
    logger.info(userEmail)
    logger.info(jwt);


    const response = {
        userEmail,
        jwt
    }
    return NextResponse.json(response)


}