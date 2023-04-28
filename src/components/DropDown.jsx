import React, { useState } from "react";
import { VscCheck, VscChromeClose } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";

export default function DropDown({ ticked, setTicked }) {
	const [isDisabled, setIsDisabled] = useState(false);
	function tickedHandle() {
		if (!isDisabled) {
			setTicked((ticked) => !ticked);
			ticked
				? toast("🦄 ChatGpt has been disabled", {
						position: "top-center",
						autoClose: 1500,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
				  })
				: toast("🦄 ChatGpt has been activated", {
						position: "top-center",
						autoClose: 1500,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
				  });
		} else {
		}
		setIsDisabled(!isDisabled);
		setTimeout(() => {
			setIsDisabled(false);
		}, 2000);
	}
	return (
		<div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
			<div className="p-2 h-12">
				<button
					disabled={isDisabled}
					onClick={tickedHandle}
					className={`flex justify-between items-cente w-full px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700  ${
						isDisabled
							? "cursor-progress duration-300 hover:text-red-500"
							: "duration-300"
					}`}
				>
					Use ChatGpt{" "}
					{ticked ? <VscCheck size={20} /> : <VscChromeClose size={20} />}
				</button>
			</div>
		</div>
	);
}
