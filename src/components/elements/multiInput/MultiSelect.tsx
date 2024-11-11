import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Button from "../Button";

interface MultiSelectProps {
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: (selectedOptions: string[]) => void;
  leftIcon?: React.ReactNode;
  errors?: Record<string, any>;
  [key: string]: any;
}

export default function MultiSelect({
  options,
  selectedOptions = [],
  setSelectedOptions,
  leftIcon,
  errors,
  ...props
}: MultiSelectProps) {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  const handleAddOption = () => {
    if (selectedValue && !selectedOptions.includes(selectedValue)) {
      setSelectedOptions([...selectedOptions, selectedValue]);
      setSelectedValue("");
    }
  };

  const handleRemoveOption = (option: string) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  return (
    <div className="space-y-2">
      <div className="flex w-full items-center gap-3">
        <div className="flex w-full flex-col">
          <select
            value={selectedValue}
            onChange={handleSelectChange}
            className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm capitalize text-zinc-500 outline-none duration-200 focus:outline-orange-500"
            {...props}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options
              .filter((option) => !selectedOptions.includes(option))
              .map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
        <Button onClick={handleAddOption}>Add</Button>
      </div>

      <div className="flex flex-wrap gap-3">
        {selectedOptions.map((option, index) => (
          <div key={option} className="flex flex-wrap items-center gap-3">
            <div className="group flex w-max flex-wrap items-center gap-2 rounded-md bg-zinc-100 px-3 py-1 font-medium text-zinc-700">
              <span className="transition-all duration-300 group-hover:scale-110">
                {leftIcon}
              </span>
              <span>{option}</span>
              <button
                type="button"
                onClick={() => handleRemoveOption(option)}
                className="text-xl text-red-500 transition-all duration-300 hover:scale-125 active:scale-95"
              >
                &times;
              </button>
            </div>
            {errors?.[index]?.message && (
              <p className="text-xs text-red-500">{errors[index].message}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
