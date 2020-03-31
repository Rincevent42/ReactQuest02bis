import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name='Peter Palmer'
        avatar='https://randomuser.me/api/portraits/men/85.jpg'
        online
      />

      <Contact
        name='Diana Krall'
        avatar='https://img.welt.de/img/kultur/mobile100528955/6382504507-ci102l-w1024/diana-krall-3-bild-DW-Kultur-NEW-YORK-jpg.jpg'
      />

      <Contact
        name='Nile Rogers'
        avatar='https://nyppagesix.files.wordpress.com/2016/12/nile-rodgers.jpg?quality=90&strip=all&w=1200'
        online
      />

    </div>
  );
}

export default App;
