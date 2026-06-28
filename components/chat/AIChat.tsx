"use client";

import { useState } from "react";

interface Props {
  analysis: any;
}

export default function AIChat({
  analysis,
}: Props) {

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  async function askAI() {

    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const response = await fetch("/api/chat", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          question,

          analysis,

        }),

      });

      const data = await response.json();

      setMessages((prev) => [

        ...prev,

        {

          role: "assistant",

          content: data.answer,

        },

      ]);

      setQuestion("");

    } finally {

      setLoading(false);

    }

  }

  return (

<div className="bg-slate-900 rounded-xl p-6 border border-slate-700">

{/* <h2 className="text-2xl font-bold mb-6">

🤖 InvestIQ Assistant

</h2> */}

<div className="space-y-4 max-h-[450px] overflow-y-auto">

{messages.length===0&&(

<p className="text-gray-400">

Ask anything about this company.

</p>

)}

{messages.map((message,index)=>(

<div
key={index}
className={`rounded-xl p-4 ${
message.role==="user"
?"bg-blue-600 ml-20"
:"bg-slate-800 mr-20"
}`}
>

<p>

{message.content}

</p>

</div>

))}

{loading&&(

<div className="bg-slate-800 rounded-xl p-4 mr-20">

Thinking...

</div>

)}

</div>

<div className="flex gap-3 mt-6">

<input
value={question}
onChange={(e)=>setQuestion(e.target.value)}
placeholder="Ask: Should I invest? What are the risks? Explain valuation..."
className="flex-1 bg-slate-800 rounded-xl px-4 py-3 outline-none"
/>

<button
onClick={askAI}
className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl"
>

Send

</button>

</div>

</div>

);

}