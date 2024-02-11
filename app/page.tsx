'use client';

import { updateUserInfo } from '@/server/redis';
import { useChat } from 'ai/react';
import { useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';


export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const [userName, setUserName] = useState('')


    const getUserInfo = () => {
        return fetch('/api/access', {
            method: 'GET'
        })
    }

    useEffect(() => {
        // convertMDtoHTML()
        // setUserName(localStorage.getItem('userName') || 'User')
        // getUserInfo().then((res => res.json())).then((data) => {
        //     const { userEmail, jwt }: any = data

        //     const userName = String(userEmail).split('@')[0]
        //     localStorage.setItem('userName', userName)
        //     setUserName(userName)

        //     updateUserInfo(userEmail, jwt)
        // })
    })

    const convertMDtoHTML = (mdText: string) => {

        const res = remark()
            .use(html)
            .processSync(mdText).toString()

        return <div dangerouslySetInnerHTML={{ __html: res }}></div>

    }


    const EnterPress = (e: any) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            console.log('pressed enter');
            console.log(input);

            if (input && input.trim() !== '') {
                handleSubmit(e);
            }

        }
    }
    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
            <div className='h-full w-full p-7 m-8 mb-32'>
                {messages.map(m => (
                    <div key={m.id} className="whitespace-pre-wrap bg-slate-300 p-4 m-4 rounded-lg z-0">
                        <h1 className='font-bold text-rose-900'>{m.role === 'user' ? userName + ': ' : 'GPT: '}</h1>
                        {/* <p>{m.content}</p> */}
                        {convertMDtoHTML(m.content)}
                    </div>
                ))}
            </div>


            <form onSubmit={handleSubmit}>
                <textarea
                    className="z-50 fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl min-h-12"
                    value={input}
                    placeholder="let's chat..."
                    onChange={handleInputChange}
                    rows={5}
                    onKeyDown={EnterPress}
                />
                <div className='fixed bottom-0 w-full bg-white z-30 h-28'></div>
            </form>
        </div>
    );
}