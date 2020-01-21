import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <main>
        <section className="intro">
          <h2>Despre noi</h2>
          <div>
            <p>
              Suntem mândri să îți recomandăm produse pentru sportul tău
              preferat, fabricate în România.
            </p>
            <p>
              Obiectivul ASport este acela de a face sportul accesibil cât mai
              multor oameni, motiv pentru care am ales să fabricăm echipamente
              sportive pentru mărcile proprii și în România.
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
              La ASport, obiectivul nostru este acela de a vă oferi produse de
              cea mai bună calitate, pentru ca dvs. să vă concentrați pe propria
              performanță! Conceperea produselor începe prin observarea
              utilizatorilor pe teren, înainte ca inginerii noștri să se ocupe
              de producție și dezvoltare.{" "}
            </p>
            <p>
              Alegem constant cele mai bune materiale și procese pentru a vă
              asigura siguranță și plăcere în practicarea sportului favorit.
              Testăm produsele noastre în laboratoare de specialitate, pentru a
              evalua gradul acestora de securitate și confort.
            </p>
            <p>
              Produsele sunt apoi verificate de către utilizatori sportivi în
              situații reale de practică. La ASport, solicităm utilizatorilor
              opinia. De ce? Considerăm că dvs, în calitate de sportivi
              pasionați, sunteți cei mai în măsură să ne ajutați să îmbunătățim
              serviciile și produsele pe care vi le oferim.
            </p>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
