import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { IoPencil } from "react-icons/io5";
import { BsChatLeft } from "react-icons/bs";
export default function HeadLines() {
	const infos = [
		"Furkan Ulgen",
		"1994",
		"Istanbul",
		"Software Developer",
		"Leipzig",
	];

	return (
		<div className="h-full bg-sideBar w-2/12 sm-max:hidden  flex flex-col  text-white">
			<p className="text-center my-auto border-t-2 border-b-2  border-gray-400 py-1">
				"I am aware that my beautiful chat-bot takes some time to answer. Since this
				is a paid service, I am trying to cut costs and compromise on speed. I
				apologize for any inconvenience caused
			</p>
		</div>
	);
}
