import { Container } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, isValid}: IButtonProps) => {  
  return(<Container disabled={!isValid}>{title}</Container>)
};

export default Button;
