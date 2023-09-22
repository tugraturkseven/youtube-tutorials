import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function Btn(props) {
  return (
    <button>Notify {props.id}</button>
  )
}



function App() {
  const notify = () => toast.error('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const arr = [];
  for (let index = 1; index <= 10; index++) {
    arr.push(
      <div className="button-container">
        <Btn id={index} onClick={notify}></Btn>
      </div>
    );
  };
  return (
    <div className="container">
      <div className="text-div">
        <input type="text" placeholder='Notification' />
      </div>

      {arr}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
}

export default App;
