// 'use client'
// import { useState } from "react";
// // import OutputArea from "@/component/OutputArea/OutputArea";
// import { useChat } from 'ai/react';

// export default function Home() {

//     const { messages, input, handleInputChange, handleSubmit } = useChat();

//     const [disabled, setDisabled] = useState(false)



//     const onclick = async () => {

//     }



//     return (
//         <main>
//             <div className="border border-l-2">
//                 <h1>Hello, welcome for using!</h1>
//             </div>

//             <div className="md:container px-4 " >
//                 {/* <OutputArea inputText={passInput} /> */}
//                 {messages.map(m => (
//                     <div key={m.id} className="whitespace-pre-wrap">
//                         {m.role === 'user' ? 'User: ' : 'AI: '}
//                         {m.content}
//                     </div>
//                 ))}
//                 <div className="min-h-24 w-full m-2 border-amber-800 border border-spacing-4 py-3">
//                     <textarea value={input} onInput={() => { handleInputChange }} name="inputArea" className="border border-spacing-1 w-full"></textarea>
//                     <button disabled={disabled} onClick={() => handleSubmit} className="">send</button>
//                 </div>
//             </div>

//         </main>
//     );
// }




'use client';

import { useChat } from 'ai/react';
import { useEffect, useState } from 'react';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();


    const getUserInfo = () => {
        return fetch('/api/access', {
            method: 'GET'
        })
    }

    const [userEmail, setUserEmail] = useState('')
    const [userJWT, setUserJWT] = useState('')

    useEffect(() => {
        getUserInfo().then((res => res.json())).then((data) => {


            console.log('get user info called');

            console.log(data);

            const { userEmail, jwt }: any = data
            console.log(userEmail);
            console.log(jwt);


            setUserEmail(userEmail)
            setUserJWT(jwt)


        })

    })

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
                        <h1 className='font-bold text-rose-900'>{m.role === 'user' ? 'User: ' : 'GPT: '}</h1>
                        <p>{m.content}</p>
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