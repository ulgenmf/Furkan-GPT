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
			<div
				id="border"
				className="borders cursor-not-allowed  hover:bg-gray-700  duration-150  h-10 flex items-center w-11/12 self-center mt-3 outline-2 gap-7"
			>
				<AiOutlinePlus /> <p>New chat</p>
			</div>
			<div className="text-gray-400 mt-3 ml-2 text-xs">Today</div>

			<div className="mx-auto w-11/12 flex items-center justify-center flex-col gap-5 mt-6 p-2 text-center ">
				{infos.map((info) => (
					<div className="flex items-center gap-5 w-full  p-4 cursor-not-allowed hover:rounded-xl duration-150  hover:bg-gray-700  justify-center">
						<BsChatLeft size={17} className="w-12" />
						<p className="w-full">{info}</p>
					</div>
				))}
			</div>
		</div>
	);
}
