import { ThemeProvider } from "@/components/theme-provider"
import "./App.css"
import { Routes } from "./routes"


export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container">
        <Routes />
      </div>

    </ThemeProvider>
  )
}


