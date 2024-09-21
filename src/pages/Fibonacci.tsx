import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import FibonacciVisualizer from "../components/FibonacciVisualizer";

const Fibonacci = () => {
  const navigate = useNavigate();

  const [n, setN] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleGenerate = (inputNumber: number) => {
    setN(inputNumber);
    setIsPaused(false);
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-gray-500 text-white p-2 rounded mb-4 hover:bg-blue-700"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <h1 className="text-3xl mb-4">Interactive Fibonacci Visualization</h1>
      <InputField onSubmit={handleGenerate} />
      <div className="my-4">
        <button
          className="bg-yellow-500 text-white p-2 rounded mr-2"
          onClick={() => setIsPaused(!isPaused)}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
      {n > 0 && <FibonacciVisualizer n={n} isPaused={isPaused} />}
    </div>
  );
};

export default Fibonacci;
