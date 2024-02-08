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

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
            {messages.map(m => (
                <div key={m.id} className="whitespace-pre-wrap bg-slate-300 p-3 m-2 rounded">
                    {m.role === 'user' ? 'User: ' : 'AI: '}
                    {m.content}
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <input
                    className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}