import { useState } from "react";
import assets from "../assets/assets";

const WordMode = ({ translate }) => {
	const [word, setWord] = useState("");
	const [translation, setTranslation] = useState(null);

	const handleInputChange = (e) => {
		setWord(e.target.value);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		if (word === "") return;

		try {
			const result = await translate(word);
			setTranslation(result);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<form onSubmit={handleFormSubmit} className="w-full sm:w-1/2">
				<input
					type="text"
					placeholder="Enter a word to translate"
					value={word}
					onChange={handleInputChange}
					className="w-full p-4 rounded-lg text-lg focus:outline-none"
				/>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300"
				>
					Translate
				</button>
			</form>
			{translation && (
				<div className="mt-8 w-full sm:w-1/2">
					<div className="flex items-center justify-between border-b-2 border-gray-200 pb-2">
						<h2 className="font-bold text-2xl">{translation.word}</h2>
						<p className="font-bold text-sm">{translation.pos}</p>
					</div>
					<div className="mt-4">
						<p className="text-gray-500">{translation.definition}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default WordMode;
