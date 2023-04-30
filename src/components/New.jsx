import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import assets from "../assets/assets";
// apiKey: import.meta.env.VITE_OPENAI_API_KEY,
export default function Test() {
	console.log("22");
	const [translations, setTranslations] = useState([]);
	const configuration = new Configuration({});
	const openai = new OpenAIApi(configuration);

	useEffect(() => {
		async function response() {
			await openai.createCompletion({
				model: "text-davinci-003",
				prompt:
					"Translate this into 1. Turkish:\n\nWhat rooms do you have available?\n\n1.",
				temperature: 0.3,
				max_tokens: 100,
				top_p: 1.0,
				frequency_penalty: 0.0,
				presence_penalty: 0.0,
			});
		}
		response();
		console.log(response);
	}, []);

	return <div>lorem*10</div>;
}
