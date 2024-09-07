import { useLocation } from "react-router-dom";

export default function Groups() {
  let { state } = useLocation();

  return <div>Groups {state ? state[0]?.type : null}</div>;
}
