import React, { useState } from "react";

interface InputFieldProps {
  onSubmit: (n: number) => void;
}

const InputField: React.FC<InputFieldProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value !== "") {
      onSubmit(Number(value));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="number"
        className="border p-2 rounded"
        placeholder="Enter a number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Generate
      </button>
    </form>
  );
};

export default InputField;
