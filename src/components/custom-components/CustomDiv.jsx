import * as React from "react";

function CustomDiv({ clickHanlder, writing, imgSrc }) {
	return (
		<div className=" h-3/4 bg-slate-700 border-yellow-400 border-opacity-40 border-2 shadow-md shadow-purple-500  rounded-2xl p-1 w-2/5 ">
			<div className="bg-gray-300 items-center justify-between flex flex-col h-full rounded-2xl p-3">
				<img src={imgSrc} alt="pic" className="  rounded-lg" />
				<p>{writing}</p>

				<button
					onClick={clickHanlder}
					className="h-fit p-3 w-32  mb-5   rounded-full bg-black active:bg-lime-500 duration-300 text-white hover:bg-green-500  text-center items-center"
				>
					{" "}
					Let's Go!
				</button>
			</div>
		</div>
	);
}

export default CustomDiv;
