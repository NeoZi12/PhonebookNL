import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

// we can change component name using as. below BrowserRouter name is changed to Router

import PageRouter from "../pages/pageRouter";

import { links } from "../data/links";

export default function App() {
  return (
    <div>
      <PageRouter links={links} />
    </div>
  );
}
