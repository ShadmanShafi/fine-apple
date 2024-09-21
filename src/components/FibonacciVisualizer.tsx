import React, { useEffect, useState } from "react";

interface FibonacciVisualizerProps {
  n: number;
  isPaused: boolean;
}

const FibonacciVisualizer: React.FC<FibonacciVisualizerProps> = ({
  n,
  isPaused,
}) => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    const generateFibonacci = (n: number): number[] => {
      let fib = [1, 1];
      for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
      }
      return fib;
    };

    const newSequence = generateFibonacci(n);
    setSequence(newSequence);
  }, [n]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentStep((prevStep) =>
          prevStep < sequence.length ? prevStep + 1 : prevStep
        );
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused, sequence]);

  return (
    <div>
      <h3 className="text-2xl mb-4">Fibonacci Sequence:</h3>
      {sequence.slice(0, currentStep).map((num, index) => (
        <div key={index} className="text-xl">
          {index > 1
            ? `${sequence[index - 2]} + ${sequence[index - 1]} = ${num}`
            : num}
        </div>
      ))}
    </div>
  );
};

export default FibonacciVisualizer;
