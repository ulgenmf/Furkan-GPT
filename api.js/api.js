import axios from "axios";
import { useState } from "react";

export default async function GetApiCalls({ text, source, target, langPair }) {
	const apiKey = import.meta.env.VITE_API_KEY;

	const isWord = /\s/.test(text);

	if (isWord) {
		const options = {
			method: "GET",
			url: "https://petapro-translate-v1.p.rapidapi.com/",
			params: {
				query: text,
				langpair: langPair,
			},
			headers: {
				"content-type": "application/octet-stream",
				"X-RapidAPI-Key": apiKey,
				"X-RapidAPI-Host": "petapro-translate-v1.p.rapidapi.com",
			},
		};

		try {
			const response = await axios.request(options);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	} else {
		const options = {
			method: "POST",
			url: "https://deepl-translator.p.rapidapi.com/translate",
			headers: {
				"content-type": "application/json",
				"X-RapidAPI-Key": "23695454f6msh96221d51eb0afbap1ff6fejsnfe445d482536",
				"X-RapidAPI-Host": "deepl-translator.p.rapidapi.com",
			},
			data: {
				text: text,
				source: source,
				target: target,
			},
		};

		try {
			const response = await axios.request(options);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	}
}
