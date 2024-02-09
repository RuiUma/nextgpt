'use server'
import OpenAI from "openai";




export async function callOpenAI(inputString: string) {

    const openai = new OpenAI();

    const stream = await openai.chat.completions.create({
        messages: [{ role: "system", content: inputString }],
        model: "gpt-4-turbo-preview",
        stream: true,
    });

    // for await (const part of stream) {
    //     console.log(part.choices[0]?.delta?.content || '');
    // }

    return stream
}

// 
