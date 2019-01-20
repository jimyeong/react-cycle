import React from 'react';
import List from './List';
import CustomTextInput from './CustomTextInput';

class Wrapper extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();




        this.state = {

        }
    }

    componentWillMount() {
        const node = this.myRef.current;
        console.log('node',node)
    }

    render(){
        return(
            <div>
                <List ref={this.myRef}/>
                <CustomTextInput/>


            </div>
        )
    }
}


export default Wrapper;