import { Box, Typography ,makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
      container:{
        height:350,
        margin:10,
        borderRadius:10,
        border:"1px solid black",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        width:"200px",
        "& > *":{
            padding:"0 5px 5px 5px"
        }
    },
    image:{
        height:150,
        width:"100%",
        borderRadius:"10px 10px 0 0 ",
        objectFit:"cover"
    },
    text:{
        color:"#878787",
        fontSize:12
    },
    heading:{
        color:"#E22929 ",
        fontSize:18,
        fontWeight:600,
        textAlign: "center"


    },
    detail:{
        fontSize:14,
        wordBreak:"break-word",
        textAlign: "center"

    }

})


const Post = ({post})=>{
    const url = post.picture||"https://source.unsplash.com/collection/5";
    const classes = useStyles();

    const addElipsis = (str,lmt)=>{
        return str.length > lmt? str.substring(0,lmt)+"...":str;
    };

    return(
    <>
        <Box className={classes.container} >
           <img src={url} alt="wrapper" className={classes.image}/>
           <Typography className={classes.text}>{post.categories}</Typography>
           <Typography className={classes.heading}>{addElipsis(post.title,20)}</Typography>
           <Typography className={classes.text}>{post.username}</Typography>           
           <Typography className={classes.detail}>{addElipsis(post.description,120)}</Typography>
           
        </Box>
    </>
)
};

export default Post;

