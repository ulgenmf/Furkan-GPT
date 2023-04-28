import React, { useState, useEffect } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { BsFillMicFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import DropDown from "./DropDown";

function AdvancedMode() {
	const [advancedMode, setAdvancedMode] = useState("word"); // default mode is "word"
	const [fromLang, setFromLang] = useState("English");
	const [toLang, setToLang] = useState("German");
	const [searchTerm, setSearchTerm] = useState("");
	const [result, setResult] = useState("");
	const [ticked, setTicked] = useState(false);

	translatePlus.io;

	function searchTermHandler(e) {
		setSearchTerm(e.target.value);
	}
	function handleSwitchLang() {
		setFromLang(toLang);
		setToLang(fromLang);
	}
	return (
		<div className="border-solid border-2  bg-gray-400   shadow-gray-950 shadow-2xl skew- border-gray-700  rounded-lg   mt-4   flex-col  items-center flex  ">
			<ToastContainer limit={1} />
			<div className=" flex flex-col  w-full  ">
				<div className="rounded-lg text-2xl font-normal text-gray-800 font-poppins-00 flex pr-10 items-center justify-between   h-16 pl-2 w-full">
					<p className="w-12 ">{fromLang}</p>
					<button
						className="hover:scale-105 duration-200   mx-2"
						onClick={handleSwitchLang}
					>
						<HiOutlineSwitchHorizontal />
					</button>
					<p className="w-12  ">{toLang}</p>
				</div>
				<div className=" font-poppins-400 transform  min-h-fit font-semibold text-xl flex border-gray-600 border-t-2 ">
					<div className="  flex flex-col h-72 outline-none   border-r-2 border-black w-1/2">
						<textarea
							onChange={searchTermHandler}
							value={searchTerm}
							style={{ height: "288px" }}
							className="resize-none text-base tracking-wide font-poppins-400 font-semibold  outline-none w-full  pt-2 pl-2 "
						/>
						<div className=" p-1">
							{" "}
							<button className="hover:bg-gray-300 active:scale-105 duration-200 p-1 rounded-2xl">
								<BsFillMicFill size={22} />
							</button>
							<button className="hover:bg-gray-300 active:scale-105 duration-200 p-1 rounded-2xl">
								{searchTerm === "" ? (
									<HiOutlineSpeakerXMark size={22} />
								) : (
									<HiOutlineSpeakerWave size={22} />
								)}
							</button>
						</div>
					</div>

					<div className="flex flex-col justify-between pl-2 pt-2 w-1/2">
						{result}
						<p></p>
						<div className="flex  justify-between p-1">
							<button className="hover:bg-gray-300 active:scale-105  duration-200 p-1 rounded-2xl">
								{searchTerm === "" ? (
									<HiOutlineSpeakerXMark size={22} />
								) : (
									<HiOutlineSpeakerWave size={22} />
								)}
							</button>
							<div className="mt-5">
								<DropDown ticked={ticked} setTicked={setTicked} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdvancedMode;
