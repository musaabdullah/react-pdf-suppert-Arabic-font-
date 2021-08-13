import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
const App = () => (
  <PDFViewer style={{ width: "100%", height: "97vh" }}>
    <MyDocument />
  </PDFViewer>
);

export default App;
