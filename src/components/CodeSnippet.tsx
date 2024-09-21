import React from "react";

const codeExamples: { [key: string]: string } = {
  js: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
  py: `def fibonacci(n):
  if n <= 1:
    return n
  return fibonacci(n - 1) + fibonacci(n - 2)`,
  c: `int fibonacci(int n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
};

const CodeSnippet: React.FC<{ language: string }> = ({ language }) => {
  return (
    <pre className="bg-gray-200 p-4 rounded">
      <code>{codeExamples[language]}</code>
    </pre>
  );
};

export default CodeSnippet;
