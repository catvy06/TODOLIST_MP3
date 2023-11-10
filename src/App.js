import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [word, setWord] = useState('');
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    if(todos?.some( item => item.id === word.replace(/\s/g, ''))) {
      toast.warn('Công việc đã được thêm trước đó!!!');
    } else {
      setTodos(prev => [...prev, {id: word.replace(/\s/g, ''), job: word}]);
      setWord('');
    }
  }
  const handleDeleteJob = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id));
  }
  return (
    <>
      <div className="flex flex-col gap-8 h-screen justify-center items-center border border-red-500">
      <div className="flex gap-8">
        <input type="text" 
          className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
          value={word}
          onChange={e => setWord(e.target.value)}
        />
        <button
          type="button"
          className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
          onClick={handleAdd}
        >
        Add
        </button>
      </div>
      <div>
        <h3 className="font-bold text-xl">Content: </h3>
        <ul>
          {todos?.map((item) => {
            return (
              <li key={item.id} className="flex gap-10 items-center">
                <span className="my-2">{item.job}</span>
                <span className="my-2 cursor-pointer p-2" 
                onClick={() => handleDeleteJob(item.id)}>
                  X
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        {/* Same as */}
      <ToastContainer />
    </>
    
  );
}

export default App;
