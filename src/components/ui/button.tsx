import { FC, ReactNode } from "react";
import { cn } from "../../lib/utlis";

interface Props {
  className?: string;
  children: ReactNode;
}

const Button: FC<Props> = ({ className, children }) => {
  return (
    <button
      className={cn(
        "items-center justify-center flex border p-4 cursor-pointer hover:bg-gray-300 rounded-lg w-full relative",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
