
import { Component } from "react";
import MovieCard from "./MovieCard";
import animeList from "./dummy-data";

console.log(animeList)

class App extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {
              animeList.map(i => <MovieCard movie={i} key={i.mal_id}/>) //key nya taruh sini aj
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
