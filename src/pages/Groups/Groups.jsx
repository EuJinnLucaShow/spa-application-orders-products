import { useLocation } from "react-router-dom";

export default function Groups() {
  let { state } = useLocation();

  return <div>Groups Component {state.length}</div>;
}
