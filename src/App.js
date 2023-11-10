import { useState } from "react";

function App() {
  const [word, setWord] = useState('');
  console.log(word)

  return (
    <div className="flex gap-8 h-screen justify-center items-center border border-red-500">
      <input type="text" 
      className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
      value={word}
      onChange={e => setWord(e.target.value)}
      />
      <button
      type="button"
      className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
      >
        Add
      </button>
    </div>
  );
}

export default App;
