import Test from "./components/New";
import CustomDiv from "./components/custom-components/CustomDiv";
import HeadLines from "./components/custom-components/HeadLines";
import PlayGround from "./components/custom-components/PlayGround";
function App() {
	const infos = {
		chatBot: {
			writings:
				"Hey there! Let's have a chat about anything and everything. I'm here to assist you with anything you need help with. Go ahead and ask me anything!",
		},
		Setcont: {
			writings:
				"Are you having difficulty with German? Don't worry, we can make communication in German easy together. Come on in and give it a try! Let's make your German experience seamless and stress-free.",
		},
	};

	return (
		<div className="flex  flex-col px-3 items-center justify-center bg-black h-screen w-screen">
			{/* <Test /> */}
			{/* <HeadLines /> */}
			{/* <div className="flex gap-52  mt-52 justify-between h-full  w-full">
				<CustomDiv
					imgSrc={
						"https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_960_720.jpg"
					}
					writing={infos.chatBot.writings}
				/>
				<CustomDiv
					imgSrc={
						"https://cdn.pixabay.com/photo/2017/03/23/09/34/robot-2167836_960_720.jpg"
					}
					writing={infos.Setcont.writings}
				/>
			</div> */}
			<div className="flex gap-52  mt-52 justify-between h-full  w-full">
				<PlayGround />
			</div>
		</div>
	);
}

export default App;
