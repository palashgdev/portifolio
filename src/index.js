import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

import Store from "./Store";
import Theme from "./Theme";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <Store>
      <Theme>
        <App />
      </Theme>
    </Store>,
    rootElement
  );
} else {
  render(
    <Store>
      <Theme>
        <App />
      </Theme>
    </Store>,
    rootElement
  );
}

// serviceWorker.register({
//   onSuccess: registration => {
//     // console.log(registration);
//   },
// });
