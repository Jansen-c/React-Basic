
import { Component } from "react";
import MovieCard from "./MovieCard";


class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
         movieList: [],
         isLoading: 1,
    }}
  
  // ini yang bakal jalan pertama kali dan akan langsung nge trigger si componentDidUpdate( mungkin karena setTimeout() fungsi kali ya ), makanya pas kita console.log dia muncul 2x prevState nya
  componentDidMount() {
    setTimeout(() => this.fetchMovieList(), 1000);
  }

  //prevProps gada isinya karena ya kita ga pernah masukin apa apa di props ny, beda sama yang nomor 1 tadi
  componentDidUpdate(prevProps, prevState) {
    if (prevState.movieList !== this.state.movieList) {
      this.setState({ isLoading: 0 })
    }
    console.log(prevState)
  }

  async fetchMovieList() {

    const hasil = await fetch('https://api.jikan.moe/v3/top/anime');
    const hasilFetch = await hasil.json();
    this.setState({ movieList: hasilFetch.top })
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {
              this.state.isLoading ? <h1><div>Loading ...</div></h1> : this.state.movieList.map(i => <MovieCard movie={i} key={i.mal_id}  />)
            }
          </div>
        </div>
      </div>
    );
  }
}
export default App;
