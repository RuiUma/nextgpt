'use client'
import { useState } from "react";
import { callOpenAI } from "./api/openAI";

export default function Home() {

  type chatItem = {
    text: String | null
    color: String
  }

  const [inputValue, setIputValue] = useState('')

  const [chatHistory, setChatHistory] = useState<chatItem[]>([])

  const [disabled, setDisabled] = useState(false)

  const inputMethod = (val: any) => {
    setIputValue(val)
  }

  const calculateBg = (item: chatItem) => {
    const defaultVal = 'p-5	py-8 m-3'
    if (item.color === "green") {
      return 'bg-lime-400' + defaultVal
    }
    // return "bg-[url('https://img.umatech.work/1330650.png')]"
    return 'bg-cyan-400' + defaultVal
  }


  const onclick = async () => {
    setDisabled(true)
    setIputValue(inputValue.trim())
    if (!inputValue.trim()) {
      console.log('nothing here');

      return
    }
    console.log('click');
    const res: chatItem = {
      text: inputValue,
      color: 'blue'
    }
    setChatHistory((chatHistory) => [...chatHistory, res])
    setIputValue('')
    const outputText = await callOpenAI(inputValue)
    const outputObj: chatItem = {
      text: outputText,
      color: 'green'
    }
    setChatHistory((chatHistory) => [...chatHistory, outputObj])
    setDisabled(false)
  }



  return (
    <main>
      <div className="border border-l-2">
        <h1>Hello, welcome for using!</h1>
      </div>

      <div className="md:container px-4 " >
        <div className="box-content min-h-96 w-full m-2 border-orange-500 border border-spacing-4 py-3">
          {chatHistory.map((item: chatItem, i: number) => { return <div className={calculateBg(item)} key={i}>{item.text}</div> })}
        </div>
        <div className="min-h-24 w-full m-2 border-amber-800 border border-spacing-4 py-3">
          <textarea value={inputValue} onInput={(val: any) => inputMethod(val.target.value)} name="inputArea" className="border border-spacing-1 w-full"></textarea>
          <button disabled={disabled} onClick={() => onclick()} className="">send</button>
        </div>
      </div>

    </main>
  );
}
