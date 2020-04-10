import React, {Component} from 'react';
import ImageUploader from 'react-images-upload';
import NavBar from '../../components/NavBar';

class ImageUpload extends Component{
    constructor(props){
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }
    
    onDrop(picture) {
        // File object Handle shit here
    }

    render(){
        return(
            <div>
                <NavBar showHeader={true} title={"Image Upload"}/>
                <ImageUploader
                    withIcon={true}
                    withPreview={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    singleImage={true}
                />
            </div>
        )
    }; 
}

export default ImageUpload;