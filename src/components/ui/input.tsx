interface Props {
  placeholder: string;
  name: string;
  type: "text" | "number";
  value: string;
  handleChange: (e: any, name: string) => void;
}

const Input = ({ placeholder, name, type, value, handleChange }: Props) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-black border border-black text-sm white-glassmorphism"
  />
);

export default Input;
