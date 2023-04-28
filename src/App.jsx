import assets from "./assets/assets";
import Translator from "./components/Translator";
import AdvancedMode from "./components/AdvancedMode";
import Heading from "./components/Heading";

function App() {
	return (
		<div
			// style={{
			// 	backgroundImage: `url(${assets.space})`,
			// }}
			className="app flex h-screen w-screen bg-black bg-no-repeat  items-center  justify-center p-10 flex-col m-auto   "
		>
			{" "}
			<Heading />
			<div className="flex flex-col h-full w-full">
				{/* <Translator /> */}
				<AdvancedMode />
			</div>
		</div>
	);
}

export default App;
