import React from "react";
import resumePdf from "../data/Documents/Resume_Francois_van_der_Walt.pdf";

const Downloads = (props) => {
  return (
    <>
      <center>
        <h1>Welcome to Geeks for Geeks</h1>
        <h3>Click on below link to open PDF file in new tab</h3>
        <a href={resumePdf} target="_blank" rel="noreferrer">
          Resume
        </a>{" "}
        <br></br>
      </center>
    </>
  );
};

export default Downloads;
