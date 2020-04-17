import React, {Component} from 'react';
import NavBar from '../../components/NavBar';
import Img from 'react-image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

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
                    html.push(
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>)
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