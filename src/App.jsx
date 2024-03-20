import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "/tailwind.svg";
import "./App.css";
import ThemeToggler from "./components/ThemeToggler";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
            <ThemeToggler />
            <div className="flex justify-center">
				<a href="https://vitejs.dev" target="_blank">
					<img
						src={viteLogo}
						className="h-32 p-6 will-change-[filter_transform] transition-[filter_transform] duration-[400ms] hover:drop-shadow-[0_0_2em_#646cffaa] hover:scale-125 hover:rotate-12"
						alt="Vite logo"
					/>
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="h-32 p-6 will-change-[filter_transform] transition-[filter_transform] duration-[400ms] hover:drop-shadow-[0_0_2em_#646cffaa] hover:rotate-12 animate-[logo-spin_20s_infinite_linear] hover:scale-125"
						alt="React logo"
					/>
				</a>
				<a href="https://tailwindcss.com" target="_blank">
					<img
						src={tailwindLogo}
						className="h-32 p-6 will-change-[filter_transform] transition-[filter_transform] duration-[400ms] hover:drop-shadow-[0_0_2em_#646cffaa] hover:scale-125 hover:rotate-12"
						alt="Tailwind logo"
					/>
				</a>
			</div>
			<h1 className="text-5xl font-bold p-4 dark:text-white text-black">Vite + React + Tailwind CSS</h1>
			<div className="p-4">
				<button className="mb-8 rounded-xl border-transparent border-2 cursor-pointer font-[inherit] text-lg p-[0.6em_1.2em] bg-[#33a]
                    dark:bg-[#1a1a1a] transition-[transform] active:scale-90" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p className="dark:text-white text-black">
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="dark:text-[#888] text-black">
				Click on the Vite, React and Tailwind logos to learn more
			</p>
		</>
	);
}

export default App;
