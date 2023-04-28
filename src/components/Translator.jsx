import React, { useState } from "react";
import WordMode from "./WordMode";
import AdvancedMode from "./AdvancedMode";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

function Translator() {
	const [mode, setMode] = useState("word"); // default mode is "word"
	const [fromLang, setFromLang] = useState("English");
	const [toLang, setToLang] = useState("German");

	function handleSwitchLang() {
		setFromLang(toLang);
		setToLang(fromLang);
	}

	return (
		// <div className="h-full bg-white w-full">

		// 	<div className="flex  text-xl mt-2 justify-between sm-max:flex-wrap sm-max:items-center sm-max:justify-center  mb-4 sm-max:mt-2 sm-max:gap-4">
		// 		{/* <div className="flex items-center justify-center  gap-5  flex-colfont-poppin font-semibold   ">
		// 			<p className="w-12 ">{fromLang}</p>
		// 			<button
		// 				className="hover:scale-105 duration-200   mx-2"
		// 				onClick={handleSwitchLang}
		// 			>
		// 				<HiOutlineSwitchHorizontal />
		// 			</button>
		// 			<p className="w-12  ">{toLang}</p>
		// 		</div> */}
		// 		<div className="flex space-x-4">
		// 			<button
		// 				className={`px-2 py-1 rounded ${
		// 					mode === "word" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
		// 				}`}
		// 				onClick={() => setMode("word")}
		// 			>
		// 				Word
		// 			</button>
		// 			<button
		// 				className={`px-2 py-1 rounded ${
		// 					mode === "advanced"
		// 						? "bg-blue-500 text-white"
		// 						: "bg-gray-200 text-gray-800"
		// 				}`}
		// 				onClick={() => setMode("advanced")}
		// 			>
		// 				Advanced
		// 			</button>
		// 		</div>
		// 	</div>

		// 	{mode === "word" && <WordMode />}
		// 	{mode === "advanced" && <AdvancedMode />}
		// </div>
		<div>s</div>
	);
}

export default Translator;
