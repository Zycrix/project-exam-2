import { useEffect } from "react";

function App() {
  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    const metaTag = document.querySelector("meta[name=viewport]");
    console.log(inputs);
    console.log(metaTag);
    inputs.forEach((input) => {
      input.addEventListener("focus", (e) => {
        metaTag.content =
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
        console.log(input);
      });
      input.addEventListener("blur", (e) => {
        metaTag.content = "width=device-width, initial-scale=1.0";
      });
    });
  }, []);

  return null;
}

export default App;
