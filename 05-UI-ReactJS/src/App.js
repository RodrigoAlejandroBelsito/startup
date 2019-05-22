import React from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Movie from "./components/movie";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }
    handleAdd = (movie) => {
        const movies = this.state.movies.concat(movie);
        console.log(movie)
        this.setState({
            movies,
        }, () => {console.log(this.state.movies)})
    }
    renderMovieList = () => {
        return this.state.movies.map((item) => (
            <Movie item={item} />
        ));
    }


    
    render() {
        return(
            <div>
                <AddForm handleAdd={this.handleAdd} />
                {this.renderMovieList()}
            </div>
        );
    }
}

export default App;