'use client'
// 'use server'
import OpenAI from "openai"
import { Stream } from "openai/streaming.mjs"
import { useState } from "react"

interface Props {
    stream: Stream<OpenAI.Chat.Completions.ChatCompletionChunk> | null
}

const OutputStreamBox: React.FC<Props> = async ({ stream }) => {

    // const [text, setText] = useState('')
    if (stream) {
        for await (const part of stream) {
            // setText(part.choices[0]?.delta?.content || '');
            console.log(part.choices[0]?.delta?.content || '');

        }
    }


    return <div></div>

}

export default OutputStreamBox
