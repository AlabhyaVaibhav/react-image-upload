import React, {Component} from 'react';
import NavBar from '../../components/NavBar';
import Img from 'react-image'

class ViewUploads extends Component{
    constructor(props){
        super(props);
    }

    renderImages = () => {
        let html = [];
        if(window.localStorage.getItem('images')){
            let images = JSON.parse(window.localStorage.getItem('images'));
            images.map(image =>{
                if(image){
                    html.push(<Img src={image}/>)
                }
            })
        }
        return html;
    }
    render(){
        return(
            <div>
                <NavBar showHeader={true} title={"View Uploads"} />
                {this.renderImages()}
            </div>
        )
    }
}

export default ViewUploads;