// components/Button.tsx

import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  onClickWithArgs?: (args: any) => void;
  args?: any;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, onClickWithArgs, args }) => {
  const handleClick = () => {
    if (onClickWithArgs) {
      onClickWithArgs(args);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#DD4444] hover:scale-105 text-sm text-white  py-2.5 px-8 rounded-md transition duration-200"
    >
      {title}
    </button>
  );
};

export default Button;
