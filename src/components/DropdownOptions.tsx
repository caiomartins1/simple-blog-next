import { FC, ReactNode, useState } from "react";

interface Props {
  head: ReactNode;
  options: { label: string; onClick: () => void }[];
}

const DropdownOptions: FC<Props> = ({ head, options }) => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  return (
    <button
      className="relative"
      onBlur={() => setOptionsVisible(false)}
      onClick={() => setOptionsVisible(!optionsVisible)}
    >
      {head}
      {optionsVisible && (
        <div className="min-w-max p-2 bg-gray-200 dark:bg-gray-600 dark:border-gray-200 border-gray-600 absolute top-full mt-1 z-10 border-2 rounded text-left ">
          <ul>
            {options.map((el) => (
              <li key={el.label} onClick={el.onClick}>
                {el.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
};

export default DropdownOptions;
