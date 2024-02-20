'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"
import { remark } from 'remark';
import html from 'remark-html';

interface ChatBoxProps {
    msg: string
    role: string
    userName: string
}

const ChatBox: React.FC<ChatBoxProps> = ({ msg, role, userName }) => {

    const [time, setTime] = useState('')
    const convertMDtoHTML = (mdText: string) => {

        const res = remark()
            .use(html)
            .processSync(mdText).toString()

        return <div dangerouslySetInnerHTML={{ __html: res }}></div>

    }

    const getCurrentTime = () => {
        const date = new Date()
        const hour = date.getHours().toString()
        const min = date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes()
        setTime(hour + ': ' + min)
    }

    useEffect(() => {
        getCurrentTime()
    })

    if (role === 'user') {
        return <div className="flex flex-col items-start gap-1">
            <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                <p>{convertMDtoHTML(msg)}</p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{userName + ' ' + time}</div>
        </div>
    } else {
        return <div className="flex flex-col items-end gap-1">
            <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                <p>{convertMDtoHTML(msg)}</p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">GPT {' ' + time}</div>
        </div>
    }


}

export default ChatBox