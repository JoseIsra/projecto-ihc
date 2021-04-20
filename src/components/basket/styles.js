import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(()=>({
        root:{
            marginTop:'1rem',
            position:'relative',
            display:'flex',
            border:'1px solid #ff8508',
            padding:'0.05rem',
            margin:'0.5rem'
        },
        realbutton: {
            position:'absolute',
            left:'1rem',
            top:'-1.5rem',
            fontSize:'1rem',
            backgroundColor:'rgba(250, 104, 7, 0.924)',
            color:'white',
            fontWeight:'bolder',
            borderColor:'#f7f7f7',
        },
        conta: {
            position:'relative',
        },
        grid: {
            height: '60vmin',
            overflow:'auto',
            marginTop:'0.7rem',
            boxShadow:'2px  0 10px rgba(0,0,0,.6)',
            '&::-webkit-scrollbar': {
                display:'none'
            }
            
        },
        deleteButton: {
        fontSize:'0.7rem',
        position:'absolute',
        right:'0.7rem',
        bottom:'0.08rem',
        border:'1px solid orange',
        backgroundColor:'rgba(250, 104, 7, 0.924)',
        color:'#f7f7f7',
        fontWeight:'bolder',
        '&:hover':{
            backgroundColor:'rgba(250, 104, 7, 0.924)'
        }
        },
        picture: {
            width:'120px',
            objectFit:'contain'
        },
        details: {
            display:'flex',
            flexDirection:'column',
            
        },
        content: {
            flex:'1 0 auto',
        }
}));