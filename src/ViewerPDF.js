import React from "react";
import MyDocument from "./MyDocument";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
function ViewerPDF() {
  return (
    <PDFViewer style={{ width: "100%", height: "97vh" }}>
      <MyDocument />
    </PDFViewer>
  );
}

export default ViewerPDF;
