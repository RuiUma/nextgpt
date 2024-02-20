'use server'
import OpenAI from "openai";




export async function callOpenAI(inputString: string) {

    const openai = new OpenAI();

    const stream = await openai.chat.completions.create({
        messages: [{ role: "system", content: inputString }],
        model: "gpt-4-turbo-preview",
        stream: true,
    });



    return stream
}

// 
