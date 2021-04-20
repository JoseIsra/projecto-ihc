import { makeStyles } from '@material-ui/core/styles';

export const getModalStyle= () => {
    return {
        top: '50%',
        outline:'none',
        left:'50%', 
        transform: `translate(-50%, -50%)`,
    };
}

export default makeStyles(()=> ({
    paper: {
        position: 'absolute',
        padding:'20px',
        border: '2px solid orange',
        borderRadius:'10px',
        width: '500px',
        height: '100px',
        backgroundColor:'#ebebeb',
        '&: focus': {
            outline:'none'
        }
        
    },
    button: {
        fontSize:'0.7rem',
        marginTop:'0.5rem',
        border:'1px solid orange',
        backgroundColor:'rgba(250, 104, 7, 0.924)',
        color:'#f7f7f7',
        fontWeight:'bolder',
        '&:hover':{
            backgroundColor:'rgba(250, 104, 7, 0.924)'
        }
    }
}));