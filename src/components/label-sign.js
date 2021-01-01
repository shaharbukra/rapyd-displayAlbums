import React, { useEffect, useState } from "react";
import "./label-sign.css";

export default function LabelSign({ signClick, expanded }) {
  const [sign, setSign] = useState("");

  useEffect(() => {
    expanded ? setSign("-") : setSign("+");
  }, [expanded]);
  return (
    <div className="album-sign" onClick={signClick}>
      {sign}
    </div>
  );
}
