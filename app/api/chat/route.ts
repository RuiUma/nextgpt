import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { headers } from 'next/headers'
import logger from '@/logger/log-util'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})



const USER_EMAIL_ADDRESS_HEADER = 'Cf-Access-Authenticated-User-Email'
const CF_JWT_HEADER = 'cf-access-jwt-assertion'

export async function POST(req: Request) {

    const headersList = headers()
    const userEmail = headersList.get(USER_EMAIL_ADDRESS_HEADER)
    const jwt = headersList.get(CF_JWT_HEADER)
    logger.info(userEmail)
    logger.info(jwt);

    const { messages } = await req.json()
    const response = await openai.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        stream: true,
        messages,
    })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
}