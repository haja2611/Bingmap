import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <b>Azeerah Maps</b>
        <div id="searchBoxContainer">
          <input type="text" id="searchBox" />
        </div>
        <img
          width="60px"
          height="50px"
          src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/external-directions-tourism-and-outdoor-recreation-flatart-icons-lineal-color-flatarticons.png"
          alt="external-directions-tourism-and-outdoor-recreation-flatart-icons-lineal-color-flatarticons"
        />
      </div>

      <div id="route">
        <div id="directionsInputContainer"></div>
        <div id="printoutPanel"></div>
      </div>
      <div id="myMap"></div>
      <div
        id="printoutPanel1"
        style={{
          color: "white",
          marginRight: "30%",
          float: "right",
        }}
      ></div>
    </div>
  );
}

export default App;
