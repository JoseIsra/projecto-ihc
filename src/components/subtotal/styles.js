import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme)=>({
    container: {
        position:'relative',
        border:'1px solid red',
        borderRadius:'10px',
        marginTop:'1rem'
    },
    button: {
        fontSize:'0.6rem',
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
