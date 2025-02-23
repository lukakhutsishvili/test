import { useState } from "react";
import "./App.css";
import { init } from "@telegram-apps/sdk-react";

function App() {
  const [count, setCount] = useState(0);
  init();
  return (
    <>
      <a href="tel:+1234567890" className="text-blue-500 underline">
        Call +995 591 08 11 24
      </a>
    </>
  );
}

export default App;
