import magazin from "./images/magazin.png";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
export default function Proiecte(props) {
  let [center, setCenter] = useState("Magazin");

  let navigate = useNavigate();

  let filter = props.projects.filter((proiect) => proiect.nume == center);
  let [{ nume, imagine }] = filter;
  return (
    <div className="proiecte">
      <div className="btn" id="left">
        <button
          onClick={() => {
            if (center == "Magazin") setCenter("Calculator");
            if (center == "Xsi0") setCenter("Magazin");
            if (center == "Calculator") setCenter("Xsi0");
          }}
        >
          ◄
        </button>
      </div>
      <div className="main">
        <div className="img-box">
          <img src={imagine} className="imagine" />
        </div>
        <div btn-box>
          <button onClick={() => navigate(`${nume}`)}>Vezi detalii</button>
        </div>
      </div>

      <div className="btn" id="right">
        <button
          onClick={() => {
            if (center == "Magazin") setCenter("Xsi0");
            if (center == "Xsi0") setCenter("Calculator");
            if (center == "Calculator") setCenter("Magazin");
          }}
        >
          ►
        </button>
      </div>
    </div>
  );
}
