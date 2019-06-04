import React from "react";

const Movie = (props) => (
    <div>
        <div>   
            <label>{props.item.title}</label>
        </div>
        <div>
            <label>{props.item.year}</label>
        </div>
        <div>
            <label>{props.item.duration}</label>
        </div>
        <div className={props.editing && 'hide'}>
            <button
                onClick={() => {                    
                    props.handleEdit(props.id);
                }}
            >
                Edit
            </button>
            <button
                onClick={() => {
                    props.handleDelete(props.id);
                }}
            >
                Delete
            </button>
        </div>
    </div>
);

export default Movie;