import { useEffect, useState } from "react";
import "./App.css";
import Modal from "react-modal";

function App() {
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => setCount(count + 5), 500);
    }
  }, [count, modalOpen]);

  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalOpen(false)}
      >
        <h1>useState Hook Tutorial</h1>
        <h4>Count : {count}</h4>
        <button onClick={() => setCount(count + 1)}>+</button>
        &nbsp;
        <button onClick={() => setCount(count - 1)}>-</button>
        &nbsp;
        <button onClick={() => setModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
