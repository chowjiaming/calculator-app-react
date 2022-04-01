import "./Button.css";

export default function Button({ button }) {
  return <div className={`button ${button.type}`}>{button.value}</div>;
}
