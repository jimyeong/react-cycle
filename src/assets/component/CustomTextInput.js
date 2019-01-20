import React from 'react';

class CustomTextInput extends React.Component{
    constructor(props){
        super(props);

        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);


        this.state = {

        }
    }
    focusTextInput(){
        this.textInput.current.focus()
    }

    render(){
        return(
            <div>
                <input
                    ref={this.textInput}
                    type="text"/>
                <input
                    onClick={this.focusTextInput}
                    value="focus the text input "
                    type="button"/>

            </div>
        )
    }
}


export default CustomTextInput;