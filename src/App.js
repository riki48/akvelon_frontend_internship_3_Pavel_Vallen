import { div } from "prelude-ls";
import React from "react";
import { useState } from "react";
import ImageSlider from "./components/ImageSlider";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <ImageSlider />
      <Form />
    </div>
  );
}
export default App;
