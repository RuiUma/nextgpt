import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { headers } from 'next/headers'
import { getLogger } from '@/logger/log-util'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const logger = getLogger("Chat Server Backend");

const USER_EMAIL_ADDRESS_HEADER = 'Cf-Access-Authenticated-User-Email'

export const runtime = 'edge'

export async function POST(req: Request) {

    const headersList = headers()
    const userEmail = headersList.get(USER_EMAIL_ADDRESS_HEADER)

    headersList.forEach(header => {
        logger.info(header)
    })


    logger.info('User Email');

    logger.info(userEmail)


    const { messages } = await req.json()
    const response = await openai.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        stream: true,
        messages,
    })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
}