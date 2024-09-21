import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Fine Apple</h1>
      <p className="text-lg">
        Fine Apple is an interactive platform to help you understand and
        visualize the Fibonacci series. Learn about its properties, explore code
        examples, and generate the Fibonacci sequence yourself!
      </p>

      <div className="links mt-4">
        <Link
          to="/fibonacci"
          className="btn bg-blue-500 text-white py-2 px-4 rounded me-4"
        >
          Fibonacci Visualization
        </Link>
        <Link
          to="/code-comparison"
          className="btn bg-green-500 text-white py-2 px-4 rounded"
        >
          Code Comparison
        </Link>
      </div>
    </div>
  );
};

export default Home;
