import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`border bg-blue-500 text-white ${styles ? styles : ""}`}>
      {title}
    </button>
  );
};

export default Button;
