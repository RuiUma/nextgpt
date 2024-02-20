'use client';
// import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ChatBox from '@/components/component/chat-box';
import { updateUserInfo } from '@/server/redis';
import { useChat } from 'ai/react';
import { useEffect, useState } from 'react';
import { Textarea } from "@/components/ui/textarea";



export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const [userName, setUserName] = useState('')
    const getUserInfo = () => {
        return fetch('/api/access', {
            method: 'GET'
        })
    }

    useEffect(() => {
        setUserName(localStorage.getItem('userName') || 'User')
        getUserInfo().then((res => res.json())).then((data) => {
            const { userEmail, jwt }: any = data

            const userName = String(userEmail).split('@')[0]
            localStorage.setItem('userName', userName)
            setUserName(userName)

            updateUserInfo(userEmail, jwt)
        })
    })


    const EnterPress = (e: any) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();

            if (input && input.trim() !== '') {
                handleSubmit(e);
            }

        }
    }
    return (
        <div className="flex flex-col h-[600px] rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="flex-1 overflow-auto p-6">
                <div className="grid gap-4">
                    <div>
                        {messages.map(m => (
                            <ChatBox key={m.id} msg={m.content} role={m.role} userName={userName} >

                            </ChatBox>
                        ))}
                    </div>

                    <div className="border-t flex items-center p-4">
                        <Textarea className="flex-1 min-w-0" onKeyDown={EnterPress} onChange={handleInputChange} placeholder="Type a message..." value={input} />
                        <Button className="ml-4" type="submit" onClick={(e: any) => handleSubmit(e)}>
                            Send
                        </Button>
                    </div>


                </div>
            </div>
        </div>
    );
}