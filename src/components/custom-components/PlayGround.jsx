import React, { useState, useEffect } from "react";
import { OpenAI, Configuration, OpenAIApi } from "openai";
import { BsTelegram } from "react-icons/bs";
import TypeIt from "typeit-react";
import { FaRobot } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BeatLoader } from "react-spinners";
import { AiOutlineArrowDown } from "react-icons/ai";
function PlayGround() {
	const [write, setWrite] = useState("");
	const [isWaiting, setIsWaiting] = useState(false);
	const [response, setResponse] = useState("");
	const [isPrompted, setIsPrompted] = useState(false);
	const [chat, setChat] = useState([
		{
			person: [],
			AI: [],
		},
	]);
	const configuration = new Configuration({
		apiKey: import.meta.env.VITE_OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);
	// https://platform.openai.com/docs/api-reference/chat/create

	const handleSubmit = async () => {
		setIsWaiting(true);
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
			setChat((prevChat) => [
				...prevChat,
				{
					person: write,
					AI: message,
				},
			]);
			setIsPrompted(true);
			setIsWaiting(false);
			setWrite("");
		} catch (error) {
			console.error(error);
		}
	};
	{
		/* <div className="bg-ai p-4 w-full    mt-2">xxx</div>
				<div className="bg-mesage border-t border-gray-600 border-b p-4 w-full    mt-2">
					xxx
				</div> */
	}
	console.log(isPrompted);

	return (
		<div className="bg-ai flex flex-col justify-between p-1 items-center h-full w-full">
			<div className="scroll-smooth self-center w-full p-0 text-white font-light tracking-wide overflow-auto h-full items-center text-start flex-col gap-2  flex rounded-2xl ">
				{isPrompted ? (
					chat.map((message, index) => (
						<div className="w-full" key={index}>
							{message.person ? (
								<div className="bg-mesage flex border-t border-gray-600 border-b p-4 items-center gap-2  mt-2">
									{message.person}
								</div>
							) : (
								<div />
							)}
							{message.AI ? (
								<TypeIt
									options={{ speed: 10, cursor: false }}
									className="bg-ai items-center p-4 w-full flex gap-2  mt-2"
								>
									{message.AI}
								</TypeIt>
							) : (
								""
							)}
						</div>
					))
				) : (
					<div className="flex flex-col gap-2 justify-center text-center mt-52 text-5xl items-center">
						<p>Hey there </p>
						<p>Please type a prompt to get started</p>
						<p>and</p>
						<p>Thank you for visiting my page.</p>
						<div>
							<AiOutlineArrowDown size={100} />
						</div>
					</div>
				)}
			</div>
			<div className="mb-2">
				<BeatLoader size={17} loading={isWaiting} color="#3ce84b" />
			</div>
			<div />

			<div className="flex relative justify-center items-center gap-2 w-full ">
				<textarea
					name=""
					value={write}
					onChange={(e) => setWrite(e.target.value)}
					id="playGround"
					className="outline-none h-40   text-base font-medium tracking-wider font-poppins-400 mb-2 text-white  resize-none   bg-messageBox border-2 shadow-2xl shadow-black rounded-3xl border-gray-600 min px-4  pt-2 w-5/6 "
				/>
				<div className="bg-red-200 h-24"></div>

				<button className=" hover:scale-125 duration-200 " onClick={handleSubmit}>
					{" "}
					<BsTelegram size={30} className=" " />
				</button>
			</div>
		</div>
	);
}

export default PlayGround;
