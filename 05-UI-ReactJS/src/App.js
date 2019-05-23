import React from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import Movie from "./components/Movie";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            editing: false,
            editIndex: null,
        };
    }
    handleAdd = (movie) => {
        const movies = this.state.movies.concat(movie);
        this.setState({
            movies,
        }, () => {console.log(this.state.movies)})
    }
    handleEdit = (index) => {
        this.setState({
            editing: true,
            editIndex: index,
        });
    }
    handleConfirm = (movie) => {
        const movies = this.state.movies;
        movies[this.state.editIndex] = movie;
        this.setState({
            movies,
            editing: false,
        });
    }
    handleDelete = (index) => {
        const movies = this.state.movies;
        movies.splice(index, 1);
        this.setState({
            movies,
            editing: false,
        });
    }
    renderMovieList = () => {
        return this.state.movies.map((item, index) => (
            <Movie
                key={index}
                id={index}
                item={item}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                editing={this.state.editing}
            />
        ));
    }

    render() {
        const Form = !this.state.editing ? 
            <AddForm handleAdd={this.handleAdd} />: 
            <EditForm 
                handleConfirm={this.handleConfirm}
                movie={this.state.movies[this.state.editIndex]}
            />;
        return(
            <div>
                {Form}
                {this.renderMovieList()}
            </div>
        );
    }
}

export default App;