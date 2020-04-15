export function submit(selectedFile){
    console.log(selectedFile);
    return;
    var fd = new FormData();
 
    fd.append('file', selectedFile);
 
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        alert('Uploaded!');
      }
    };
    request.open("POST", "https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload", true);
    request.send(fd);
}