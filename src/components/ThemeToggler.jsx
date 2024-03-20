import { useEffect, useState } from "react"
import Moon from "./Moon"
import Sun from "./Sun"

const ThemeToggler = () => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("prefers-color-schema: dark)")) {
            return "dark"
        } else {
            return "light"
        }
    })

    const switchTheme = () => {
        switch (theme) {
            case "light":
                setTheme("dark")
                break
            case "dark":
                setTheme("light")
                break
        }
    }

    useEffect(() => {
        switch (theme) {
            case "light":
                document.documentElement.dataset.mode = "light";
                break;
            case "dark":
                document.documentElement.dataset.mode = "dark";
            break;
        }
    }, [theme])

    return (
        <button
            className="rounded-full border-black transition-all active:scale-90 dark:border-white border p-2 text-sm w-fit absolute top-5 right-5 text-black dark:text-white"
            onClick={() => switchTheme()}
        >
            {theme === `light` ? <Moon /> : <Sun />}
        </button>
    )
}

export default ThemeToggler
