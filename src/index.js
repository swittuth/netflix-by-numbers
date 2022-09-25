import { render } from "react-dom";
import { App } from "./App";

const Home = () => {
  return (
    <>
      <App />
    </>
  );
};

render(<Home />, document.getElementById("root"));
