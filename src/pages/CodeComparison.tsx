import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CodeSnippet from "../components/CodeSnippet";

const CodeComparison = () => {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("js");

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-gray-500 text-white p-2 rounded mb-4 hover:bg-blue-700"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <h1 className="text-3xl mb-4">Fibonacci Code Comparison</h1>
      <div className="flex gap-2 mb-4">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => setLanguage("js")}
        >
          JavaScript
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={() => setLanguage("py")}
        >
          Python
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={() => setLanguage("c")}
        >
          C
        </button>
      </div>
      <CodeSnippet language={language} />
    </div>
  );
};

export default CodeComparison;
