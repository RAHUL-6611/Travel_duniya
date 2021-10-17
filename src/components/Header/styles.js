import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar : {
        display : 'flex',
        justifyContent:"space-between",
    },
    search : {
        display : 'flex',
        position : 'relative',
        // justifyContent:"space-evenly",
        marginRight: theme.spacing(2),
        borderRadius : theme.shape.borderRadius,
        [theme.breakpoints.up('sm')]: {marginLeft : theme.spacing(3), width:'auto'},
        backgroundColor : "white"
        
    },
    searchIcon : {
        // marginRight:"10px",
        padding : theme.spacing(0, 2), height : "100%", position: "absolute", pointerEvents:'none',
         display: 'flex', justifyContent: "center", alignItems: "center"
         ,zIndex:"1",
         color : "black"
    },
    title:{
        display : 'none',
        [theme.breakpoints.up('sm')]: {
            display : 'block',
        },
        marginRight:"20px"
    },
    inputRoot : {
        // color:"inherit"
    },
    inputInput:{
        padding: theme.spacing(1,1,1,0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition : theme.transitions.create('width'), width : "100%",
      [theme.breakpoints.up('md')]: {width : '20ch'}  
    }

}))