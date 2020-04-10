import React, {Component} from 'react';
import NavBar from '../../components/NavBar';

class ViewUploads extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <NavBar showHeader={true} title={"View Uploads"} />
                <p>Uploaded Images.</p>
            </div>
        )
    }
}

export default ViewUploads;