import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100%',
        width: '90%',
        border: '1px solid #ff8508',
        borderRadius: '15px',
        overflow: 'hidden',
        [theme.breakpoints.up(1920)]: {
            height:'450px'
        }

    },
    gridList: {
        height: '15rem',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none'
        },

    },
    text: {
        color: '#666666',
        fontSize: '0.9rem',
        fontWeight: 'bolder',
        position: 'relative',
        marginTop: '10px',
        marginLeft: '1rem',
        fontFamily: ' Arial, Helvetica, sans-serif',
        [theme.breakpoints.up(1920)]: {
            fontSize:'1.5rem'
        }
    },
    info: {
        display: 'flex',
        margin: '0.7rem 0',
        width: '100%',
        height: '40px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        [theme.breakpoints.up(1920)]: {
            display:'flex',
            justifyContent:'space-around'
        }
    },
    button: {
        border: '1px solid rgba(250, 104, 7, 0.924)',
        outline: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    customBadge: {
        backgroundColor: 'orange',
        color: 'white',
        fontWeight: 'bolder',
    }

}));