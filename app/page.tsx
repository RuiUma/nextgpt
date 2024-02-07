'use client'
import { useState } from "react";
import { testFun } from "./api/test";

export default function Home() {

  type chatItem = {
    text: String
    color: String
  }

  const [inputValue, setIputValue] = useState('')

  const [chatHistory, setChatHistory] = useState<chatItem[]>([
    {
      text: '1',
      color: 'blue'
    },
    {
      text: '2',
      color: 'green'
    },
    {
      text: '3',
      color: 'blue'
    }
  ])

  const inputMethod = (val: any) => {
    setIputValue(val)
  }

  const calculateBg = (item: chatItem) => {
    if (item.color === "green") {
      return 'bg-lime-400'
    }
    return 'bg-cyan-400'
  }


  const onclick = () => {
    console.log('click');
    const res: chatItem = {
      text: inputValue,
      color: 'blue'
    }
    setChatHistory((chatHistory) => [...chatHistory, res])
    setIputValue('')
    testFun()
  }



  return (
    <main>
      <div className="border border-l-2">
        <button>call api</button>
      </div>

      <div className="md:container px-4 ">
        <div className="box-content min-h-96 w-full m-2 border-orange-500 border border-spacing-4 py-3">
          {chatHistory.map((item: chatItem, i: number) => { return <div className={calculateBg(item)} key={i}>{item.text}</div> })}
        </div>
        <div className="min-h-24 w-full m-2 border-amber-800 border border-spacing-4 py-3">
          <textarea value={inputValue} onInput={(val: any) => inputMethod(val.target.value)} name="inputArea" className="border border-spacing-1 w-full"></textarea>
          <button onClick={() => onclick()} className="">send</button>
        </div>
      </div>

    </main>
  );
}
