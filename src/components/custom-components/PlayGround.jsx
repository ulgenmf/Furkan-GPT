import React, { useState, useEffect } from "react";
import { OpenAI, Configuration, OpenAIApi } from "openai";

function PlayGround() {
	const [write, setWrite] = useState("");
	const [response, setResponse] = useState("");
	const configuration = new Configuration({
		apiKey: import.meta.env.VITE_OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);

	const handleSubmit = async () => {
		try {
			const completion = await openai.createChatCompletion({
				model: "gpt-3.5-turbo",
				messages: [{ role: "user", content: write }],
			});
			const message = completion.data.choices[0].message.content;

			// setResponse("!" + write + "!" + "***message***" + message);
			setResponse(message);
			console.log("RESPONSEEEEEE", response);
			console.log(message);
			setWrite("");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="bg-purple-500 flex flex-col justify-center px-5 items-center h-5/6 rounded-2xl w-full">
			<div className="flex h-2/6 gap-4 items-center flex-col rounded-2xl py-2 w-full bg-green-400">
				<textarea
					name=""
					value={write}
					onChange={(e) => setWrite(e.target.value)}
					id="playGround"
					className="outline-none px-2 pt-2 w-5/6 h-56 max-h-72"
				/>
				<button onClick={handleSubmit}>Submit</button>
			</div>
			<div className="w-5/6 scroll-smooth h-56 text-start pl-2 overflow-y overflow-x-hidden bg-red-200 pt-6">
				<p>{response}</p>
			</div>
		</div>
	);
}

export default PlayGround;
