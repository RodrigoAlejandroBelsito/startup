import React from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import Movie from "./components/Movie";

import { connect } from 'react-redux';
import * as Actions from './actions';
import { bindActionCreators } from 'redux';

class App extends React.Component {

    renderMovieList = () => {
        return this.props.movies.map((item, index) => (
            <Movie
                key={index}
                id={index}
                item={item}
                handleEdit={this.props.editMovie}
                handleDelete={this.props.deleteMovie}
                editing={this.props.editIndex != null}
            />
        ));
    }

    render() {
        const Form = this.props.editIndex === null ? 
            <AddForm handleAdd={this.props.addMovie} />: 
            <EditForm 
                handleConfirm={this.props.confirmEdit}
                movie={this.props.movies[this.props.editIndex]}
            />;
        return(
            <div>
                {Form}
                {this.renderMovieList()}
            </div>
        );
    }
}

    const mapStateToProps = (state, props) => (
        {
            movies: state.simpleReducer.movies,
            editIndex: state.simpleReducer.editIndex,
        }
    );
  
    const mapDispatchToProps = (dispatch) => (
        bindActionCreators(Actions, dispatch)
    );

export default connect(mapStateToProps, mapDispatchToProps)(App);