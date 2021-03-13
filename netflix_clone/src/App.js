import "./App.css";
import Row from "./Component/Row.js";
import requests from "./requests";
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
