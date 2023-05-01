import React, { useState, useEffect } from "react";
import { OpenAI, Configuration, OpenAIApi } from "openai";
import { BsTelegram } from "react-icons/bs";

import TypeIt from "typeit-react";
import { CiCircleRemove } from "react-icons/ci";
import { FaRobot } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BeatLoader } from "react-spinners";
import { AiOutlineArrowDown } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function PlayGround() {
	const [write, setWrite] = useState("");
	const [isWaiting, setIsWaiting] = useState(false);
	const [response, setResponse] = useState("");
	const [isPrompted, setIsPrompted] = useState(true);
	const [typeWriterMessage, setTypeWriterMessage] = useState("");
	const [chat, setChat] = useState(() => {
		const savedChat = localStorage.getItem("chat");
		return savedChat ? JSON.parse(savedChat) : [{ person: [], AI: [] }];
	});
	console.log(chat);
	useEffect(() => {
		localStorage.setItem("chat", JSON.stringify(chat));
	}, [chat]);
	const myApiKey = import.meta.env.VITE_OPENAI_API_KEY;
	const configuration = new Configuration({
		apiKey: myApiKey,
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

			setChat((prevChat) => [
				...prevChat,
				{
					person: write,
					AI: message,
				},
			]);
			setIsPrompted(true);
			setIsWaiting(false);
			setTypeWriterMessage(
				<TypeIt
					options={{ speed: 10, cursor: false }}
					className="bg-ai items-center p-4 w-full flex gap-2  mt-2"
				>
					{message.AI}
				</TypeIt>
			);
			setWrite("");
		} catch (error) {
			console.error(error);
			alert("Something went wrong with API call, please try again later");
		}
	};

	function deleteHistory() {
		if (chat) {
			localStorage.clear();
			setChat([{ person: [null], AI: [] }]);
			toast("🦄 History Has Been Deleted", {
				autoClose: 800,
				hideProgressBar: false,

				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			setChat("");
		} else alert("History is empty");
	}

	return (
		<div className="bg-ai flex flex-col justify-between p-1 items-center h-full w-full">
			{" "}
			<ToastContainer className="absolute top-0 right-[35%]" />
			<div className="scroll-smooth self-center w-full p-0 text-white font-light tracking-wide overflow-auto h-full items-center text-start flex-col gap-2  flex rounded-2xl ">
				<button
					type="submit"
					onClick={deleteHistory}
					className=" text-center text-base   self-end absolute mt-3 mr-2   items-center gap-2"
				>
					<div className="opacity-40 bg-slate-100 hover:opacity-100 active:opacity-100  duration-200 bg-opacity-20 p-2 rounded-xl gap-2 flex items-center">
						<CiCircleRemove size={25} /> Clear chat history
					</div>
				</button>
				{chat ? (
					chat.map((message, index) => (
						<div className="w-full" key={index}>
							{message.person == null ? (
								<div
									className="bg-mesage flex border-t border-gray-600 border-b p-4 items-center gap-2  mt-2"
									options={{ speed: 10, cursor: false, startDelay: `${index + 2}` }}
								>
									{message.person}
								</div>
							) : (
								<div
									className="bg-mesage flex border-t border-gray-600 border-b p-4 items-center gap-2  mt-2"
									options={{ speed: 10, cursor: false }}
								>
									{message.person}
								</div>
							)}
							{!chat ? (
								<TypeIt
									className="bg-ai items-center p-4 w-full flex gap-2  mt-2"
									options={{ speed: 10, cursor: false, startDelay: 40 }}
								>
									{message.AI}
								</TypeIt>
							) : (
								<TypeIt
									options={{ speed: 10, cursor: false, startDelay: `${index + 10}` }}
									className="bg-ai items-center p-4 w-full flex gap-2  mt-2"
								>
									{message.AI}
								</TypeIt>
							)}
						</div>
					))
				) : (
					<div className="flex flex-col gap-2 sm-max:text-3xl sm-max:mt-12 justify-center text-center mt-52 text-4xl items-center">
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
			<div className="flex relative shadow-2xl  justify-center items-center gap-2 w-full ">
				<textarea
					cursor={true}
					name=""
					value={write}
					placeholder="Give me the hardest you got"
					onChange={(e) => setWrite(e.target.value)}
					id="playGround"
					className={`outline-none focus:shadow-none hover:shadow-purple-600 ring-1 duration-500 focus:ring-pink-500  shadow-2xl shadow-teal-400 h-40 text-base font-medium tracking-wider font-poppins-400 mb-2 text-white resize-none bg-messageBox border-2 rounded-3xl border-gray-600 min-h px-4 pt-2 w-5/6 animate-blink`}
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
