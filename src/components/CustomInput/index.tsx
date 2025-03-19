import { FC } from "react";

interface CustomInputProps {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const CustomInput: FC<CustomInputProps> = ({
  type,
  name,
  placeholder,
  value,
  handleChange,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={className}
    />
  );
};
