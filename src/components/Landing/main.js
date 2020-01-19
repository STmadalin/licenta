import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <main>
        <section className="intro">
          <h2>Despre noi</h2>
          <div>
            <p>
              Suntem mandri sa iti recomandam produse pentru sportul tau
              preferat, fabricate in Romania.
            </p>
            <p>
              Obiectivul ASport este acela de a face sportul accesibil cat mai
              multor oameni, motiv pentru care am ales sa fabricam echipamente
              sportive pentru marcile proprii si in Romania.
            </p>
          </div>
        </section>

        <div className="gallery">
          <div className="gallery-item-one"></div>
          <div className="gallery-item-two"></div>
          <div className="gallery-item-three"></div>
          <div className="gallery-item-four"></div>
          <div className="gallery-item-five"></div>
          <div className="gallery-item-six"></div>
        </div>

        <section>
          <h2>Obiectivul Nostru</h2>
          <div>
            <p>
              La ASport, obiectivul nostru este acela de a va oferi produse de
              cea mai buna calitate, pentru ca dvs. sa va concentrati pe propria
              performanta! Conceperea produselor incepe prin observarea
              utilizatorilor pe teren, inainte ca inginerii nostri sa se ocupe
              de productie si dezvoltare.{" "}
            </p>
            <p>
              Alegem constant cele mai bune materiale si procese pentru a va
              asigura siguranta si placere in practicarea sportului favorit.
              Testam produsele noastre in laboratoare de specialitate, pentru a
              evalua gradul acestora de securitate si confort.
            </p>
            <p>
              Produsele sunt apoi verificate de catre utilizatori sportivi in
              situatii reale de practica. La ASport, solicitam utilizatorilor
              opinia. De ce? Consideram ca dvs, in calitate de sportivi
              pasionati, sunteti cei mai in masura sa ne ajutati sa imbunatatim
              serviciile si produsele pe care vi le oferim.
            </p>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
