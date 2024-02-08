'use server'
import OpenAI from "openai";

export async function callOpenAI(inputString: string) {
    const openai = new OpenAI();
    console.log('server function called');

    console.log(inputString);
    console.log();


    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: inputString }],
        model: "gpt-4-turbo-preview",
    });

    console.log(completion);
    console.log(completion['choices'][0]['message']['content']);


    return completion['choices'][0]['message']['content']
}

// 
