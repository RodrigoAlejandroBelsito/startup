import React from "react";

class EditForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            year: '',
            duration: '',
        };
    }
    componentDidMount(){        
        this.setState({
            title: this.props.movie.title,
            year: this.props.movie.year,
            duration: this.props.movie.duration,
        });
    }
    handleChange = (input, event) => {
        this.setState({
            [input]: event.target.value,
        })
    }
    render() {
        return ( 
            <form>
                <div>
                    <label >Title: </label> 
                    <input 
                        placeholder="Title" 
                        type="text" 
                        value={this.state.title} 
                        onChange={(event) => { 
                            this.handleChange('title', event) 
                        }} 
                    />
                </div> 
                <div>
                    <label>Year: </label>
                    <input 
                        placeholder="Year" 
                        type="number" 
                        value={this.state.year} 
                        onChange={(event) => { 
                            this.handleChange('year', event) 
                        }} 
                    />
                </div> 
                <div>
                    <label>Duration: </label>
                    <input 
                        placeholder="Duration"
                        type = "number"
                        value={this.state.duration}
                        onChange={(event) => {
                            this.handleChange('duration', event)
                        }}
                    /> 
                </div> 
                <button
                    onClick={()=>{
                        this.props.handleConfirm(this.state, this.props.index)
                    }} 
                    type="button"
                >
                    Save Changes
                </button>
            </form>
        );
    }
}

export default EditForm;