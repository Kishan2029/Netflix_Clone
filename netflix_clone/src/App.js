import "./CssFiles/App.css";
import Row from "./Component/Row.js";
import requests from "./requests";

function App() {
  return (
    <div className="App">

      <Row title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
  
    </div>
  );
}

export default App;
