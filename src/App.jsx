import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "/tailwind.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex justify-center">
				<a href="https://vitejs.dev" target="_blank">
					<img
						src={viteLogo}
						className="h-32 p-6 will-change-[filter_transform] transition-[filter_transform] duration-[300ms] hover:drop-shadow-[0_0_2em_#646cffaa] hover:scale-125 hover:rotate-12"
						alt="Vite logo"
					/>
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="h-32 p-6 will-change-[filter_transform] transition-[filter_transform] duration-[300ms] hover:drop-shadow-[0_0_2em_#646cffaa] hover:rotate-12 animate-[logo-spin_20s_infinite_linear] hover:scale-125"
						alt="React logo"
					/>
				</a>
				<a href="https://tailwindcss.com" target="_blank">
					<img
						src={tailwindLogo}
						className="h-32 p-6 will-change-[filter_transform] transition-[filter_transform] duration-[300ms] hover:drop-shadow-[0_0_2em_#646cffaa] hover:scale-125 hover:rotate-12"
						alt="Tailwind logo"
					/>
				</a>
			</div>
			<h1 className="text-5xl font-bold p-4">Vite + React + Tailwind CSS</h1>
			<div className="p-4">
				<button className="mb-8" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="color-[#888]">
				Click on the Vite, React and Tailwind logos to learn more
			</p>
		</>
	);
}

export default App;
