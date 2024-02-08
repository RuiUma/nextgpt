// 'use client'
// 'use server'
import { callOpenAI } from "@/app/api/chat/openAI"
import React, { useState, useEffect } from "react"
import OutputStreamBox from "../OutputStreamBox/OutputStreamBox"
import OpenAI from "openai"
import { Stream } from "openai/streaming.mjs"

interface Props {
    inputText: string
}

const OutputArea: React.FC<Props> = ({ inputText }) => {

    if (inputText && inputText !== '') {
        console.log(inputText);

        const res = fetch('/api/openai', {
            method: 'POST',
            body: JSON.stringify({ message: inputText })
        })
        console.log(res);

    }


    type chatItem = {
        text: string
        color: string,
        stream: Stream<OpenAI.Chat.Completions.ChatCompletionChunk> | null,
    }
    // const [chatHistory, setChatHistory] = useState<chatItem[]>([])

    const calculateBg = (item: chatItem) => {
        const defaultVal = 'p-5	py-8 m-3'
        if (item.color === "green") {
            return 'bg-lime-400' + defaultVal
        }
        // return "bg-[url('https://img.umatech.work/1330650.png')]"
        return 'bg-cyan-400' + defaultVal
    }

    // const onSubmit = async () => {
    //     const res: chatItem = {
    //         text: inputText,
    //         color: 'blue',
    //         stream: null
    //     }
    //     setChatHistory((chatHistory) => [...chatHistory, res])
    //     const outputStream = await callOpenAI(inputText)

    //     const outputObj: chatItem = {
    //         text: 'null',
    //         color: '',
    //         stream: outputStream
    //     }

    //     setChatHistory((chatHistory) => [...chatHistory, outputObj])

    // }

    // useEffect(() => {
    //     if (inputText) {
    //         console.log(new Date());
    //         console.log(inputText);
    //         onSubmit()
    //     }
    // })

    return <div className="box-content min-h-96 w-full m-2 border-orange-500 border border-spacing-4 py-3">
        {
            // chatHistory.map((item: chatItem, i: number) => {
            //     return <div>
            //         <div className={calculateBg(item)} key={i}>{item.text}</div>
            //         <br />
            //         <OutputStreamBox stream={item.stream} />
            //     </div>
            // })
        }
    </div>
}

export default OutputArea


