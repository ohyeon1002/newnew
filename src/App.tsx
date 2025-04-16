import { BrowserRouter, Routes, Route } from "react-router-dom";
import Choice from "./choicesaver/Choice";

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen">
        <header
          className="w-full h-1/9
                    flex flex-row justify-center items-center
                   bg-amber-50 "
        >
          <span className="text-2xl font-bold">title here</span>
        </header>
        <main
          className="w-full h-7/9
                    flex flex-row justify-center items-center
                    bg-amber-100"
        >
          <Routes>
            <Route path="/" element={<Choice />} />
          </Routes>
        </main>
        <footer
          className="w-full h-1/9
                    flex flex-row justify-center items-center
                  bg-amber-50 "
        >
          <span className="text-xl font-bold italic">tail here</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}
