import React, { Component } from "react";

class MovieCard extends Component {
    // movie = {};
    
    constructor(props) {
        super(props);
        this.movie = props.movie; // fungsi nya dibuat this supaya bisa dipanggil lagi di luar scope ini karena dia udah jadi object
                                 // visualsasi nya jadi kek gini, this{ movie: "", movie1: ""}
    }
    
    render() {
      return (
        //  gausah pake row karena loop nya emang per baris, otomatis jadi row
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-3"> 
            {/* {this.movie.title} cara ngecek nya ditaruh aja kek gini biar tau muncul apa engga */}
            <div className="card h-100"  >
                <img
                    src={this.movie.image_url} // supaya src = "this.movie.image_url" dibungkus sama {}, mau ada `` tetep harus dibungkus kek barus 25
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5 className="card-title">{this.movie.title}</h5>
                    <h6 className="card-subtitle mb-2">
                    <span className={`badge ${this.movie.type === "TV" ? 'bg-danger':'bg-success'}`}>{this.movie.type}</span>
                    </h6>
                    <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    </p>
                </div>
                <div className="card-body">
                    <a href={this.movie.url} target="_blank" className="btn btn-primary w-100 text-uppercase"> readmore </a>
                </div>
            </div>
        </div>
      )
    }
}

export default MovieCard;