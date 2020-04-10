import React, {Component} from 'react';
import NavBar from '../../components/NavBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core';


// const useStyles = ((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(3),
//       margin: 'auto',
//       maxWidth: 500,
//     },
//     image: {
//       width: 128,
//       height: 128,
//     },
//     img: {
//       margin: 'auto',
//       display: 'block',
//       maxWidth: '100%',
//       maxHeight: '100%',
//     },
//   }));

class Home extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <NavBar showHeader={true} title={"Home"}/>
            </div>
        )
    }
}

export default Home;