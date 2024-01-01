import React from "react";


class TextBoxLong extends React.Component{

    title = this.props.title
    id = this.props.id
    classNameDecorator = this.props.decorator

    render(){
        return (
            <div className={"widget textboxLong-container " + (this.decorator ? this.decorator : "")}>
                <div className="subtitle">
                    {this.title}
                </div>
            
                <textarea
                    id={this.id}
                    type="text"
                    className="textbox"
                    onChange={e => {
                        console.log(this.props)
                        this.props.changeHandler(this.id, e.target.value)
                    }}
                />

            </div>
        )
    }
}

export default TextBoxLong;