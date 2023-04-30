import React, { useState, useEffect } from "react";

import { Configuration, OpenAIApi } from "openai";

function PlayGround() {
	const [write, setWrite] = useState("");
	const [resutl, setResutl] = useState(null);

	return (
		<div className="bg-purple-500 flex flex-col justify-center px-5 items-center h-5/6  rounded-2xl w-full">
			<div className="flex h-2/6 gap-4 items-center flex-col rounded-2xl py-2 w-full  bg-green-400">
				<textarea
					name=""
					onChange={(e) => setWrite(e.target.value)}
					id="playGround"
					className="outline-none px-2 pt-2 w-5/6 h-56 max-h-72"
				/>
			</div>
			<div className=" w-5/6    scroll-smooth  h-56 text-start pl-2 overflow-scroll    bg-red-200 pt-6 ">
				<p style={{ maxWidth: "100%", overflowWrap: "break-word" }}>{write}</p>
			</div>
		</div>
	);
}

export default PlayGround;
