import React from "react";
import "./HomeStyles.css";
import Button from "../components/Button";
import rightImageThinking from "../assets/IMG_6818 1.png";
import blueRectangle from "../assets/Rectangle 92.png";
import laptop from "../assets/pexels-christina-morillo-1181681 2.png";
import bildScreen from "../assets/Bildschirmfoto 2023-06-03 um 14.07 2.png";

export default function home() {
  return (
    <div className="body-container-1">
      <div className="body-container-1-inner">
        <div className="body-container-1-inner-left">
          <h1>Online Selbsthilfegruppen</h1>
          <p>
            Tausche Dich mit anderen Betroffenen aus oder starte eine neue
            Gruppe. Unabhängig von deinem Wohnort und passend zu deiner
            Lebenssituation.
          </p>
          <Button title="Jetzt Starten" />
        </div>
        <div className="body-container-1-inner-Right">
          <div className="body-container-1-inner-Right-first">
            <div>
              <img src={blueRectangle} alt="Blue Rect" />
            </div>
            <div>
              <img src={laptop} alt="Laptop" />
            </div>
            <div>
              <img src={bildScreen} alt="Screen" />
            </div>
          </div>
          <div className="body-container-1-inner-Right-second">
            <img src={rightImageThinking} alt="Person thinking" />
          </div>
        </div>
      </div>
    </div>
  );
}
