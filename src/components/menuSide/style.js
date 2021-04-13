import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(()=>({
    root: {
        display:'flex',
        flexWrap: 'wrap',
        flex: 0.6,
        border: '1px solid #ff8508',
        overflow:'hidden'
        
    }, 
    gridList: {
        height: '350px',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    text: {
        color: '#666666',
        fontSize:'0.9rem',
        fontWeight: 'bolder',
        position: 'relative',
        marginTop:'10px',
        fontFamily: ' Arial, Helvetica, sans-serif;'
    }

}));