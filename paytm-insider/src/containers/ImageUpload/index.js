import React, {Component} from 'react';
import NavBar from '../../components/NavBar';
import { submit } from '../../utils/FileUpload';
import Resizer from 'react-image-file-resizer';

class ImageUpload extends Component{
    constructor(props){
        super(props);   
        // this.onDrop = this.onDrop.bind(this);
        this.state =  {
            selectedFile: null,
            imagePreviewUrl: null,
          };
    }

    

    fileChangedHandler = event => {
        this.setState({
          selectedFile: event.target.files[0]
        })
     
        var reader = new FileReader();
        var flag = 0
        //Read the contents of Image File.
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (e) {

            //Initiate the JavaScript Image object.
            var image = new Image();

            //Set the Base64 string return from FileReader as source.
            image.src = e.target.result;
            image.sizeArray = [
                [755,450],
                [365,450],
                [365,212],
                [380,380]
            ]
            console.log(image)
            

            //Validate the File Height and Width.
            image.onload = function (flag) {
                var height = this.height;
                var width = this.width;
                var src = this.src;
                var sizeArray = this.sizeArray;
                if (height == 1024 || width == 1024) {
                    
                    // Blog from the image
                    var byteString = atob(src.split(',')[1]);
                    var mimeString = src.split(',')[0].split(':')[1].split(';')[0];
                    var ab = new ArrayBuffer(byteString.length);
                    var ia = new Uint8Array(ab);
                    for (var i = 0; i < byteString.length; i++) {
                        ia[i] = byteString.charCodeAt(i);
                    }
                    var src = new Blob([ab], {type: mimeString});

                    // Resize
                    sizeArray.map(dim => {
                        Resizer.imageFileResizer(
                            src,dim[0],dim[1],'JPEG',100,0,
                            uri => {
                                var fd = new FormData();
                                fd.append('file', uri);
                                var request = new XMLHttpRequest();
                                request.onreadystatechange = function() {
                                if (this.readyState === 4 && this.status === 200) {
                                    alert('Uploaded!');
                                }
                            };
                            request.open("POST", "https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload", true);
                            request.send(fd);
                            },
                            'blob'
                        );
                    });
                }else{
                    console.log("File Cannot be uploaded")
                }
            };  
            
            
        }

        
    }

    handleResize = () =>{
        console.log(this.state.selectedFile)
    }
    

    handleSubmit = () => {
        if(this.state.selectedFile){

            submit(this.state.selectedFile);
        }
    }

    render(){
        let $imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);
        if (this.state.imagePreviewUrl) {
            $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
        }
        return(
            <div>
            <NavBar showHeader={true} title={"Image Upload"}/>
            <div className="App">
                {/* could use better design and style  */}
                <input type="file" name="avatar" onChange={this.fileChangedHandler} />
                    <button type="button" onClick={this.handleSubmit} > Upload </button>
                    { $imagePreview }
            </div>
            </div>
        )
    }; 
}

export default ImageUpload;