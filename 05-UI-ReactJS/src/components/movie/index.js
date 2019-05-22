import React from "react";

const Movie = (props) => (
    <div>
        {props.item.title}
        {props.item.year}
        {props.item.duration}
    </div>
);

export default Movie;