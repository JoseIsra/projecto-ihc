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
        height: '100%',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    text: {
        color: '#666666',
        fontWeight: '600',
        marginBottom:'0.4rem'
    }

}));