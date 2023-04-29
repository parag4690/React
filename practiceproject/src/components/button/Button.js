import './Button.css'

const Button = (props)=>{
  return (
    <button className={props.className} type={props.type} onClick={props.onClick}  disabled={props.disabled}>{props.buttonValue}</button>
  );
}
export default Button;