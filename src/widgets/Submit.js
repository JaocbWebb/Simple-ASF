import React from "react";

class Submit extends React.Component{

    id = this.props.id;
    title = this.props.title;
    data = this.props.data;

    render(){
        return(
            <button
            className="submit"
                onClick={this.props.changeHandler}
            >
                {this.title}
            </button>
        )
    }
}

export default Submit