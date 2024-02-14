interface Props {
  placeholder: string;
  name: string;
  value: string;
  disabled?: boolean;
  type: "text" | "number";
  handleChange: (e: any, name: string) => void;
}

const Input = ({
  placeholder,
  name,
  type,
  value,
  disabled,
  handleChange,
}: Props) => (
  <input
    disabled={disabled}
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-black border border-black text-sm white-glassmorphism"
  />
);

export default Input;
