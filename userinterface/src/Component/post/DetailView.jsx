import { Box, makeStyles, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { Link,useHistory,useParams } from "react-router-dom";
import {  useEffect,useState } from "react";
// import { getPost } from "../../service/api";
 import { deletePost } from "../../service/api";
import axios from "axios";
// components
import Comments from "../comments/Comments";


const useStyle = makeStyles((theme) => ({
    container: {
        padding: "0 100px 0 100px",
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        width: "100%",
        height: "50vh",
        objectFit: "cover"
    },
    icons: {
        float: "right",
    },
    icon: {
        margin: 5,
        border: "1px solid #878787",
        padding: 5,
        borderRadius: 10,
    },
    heading: {
        fontSize: 35,
        fontWeight: 600,
        textAlign: "center",
        margin: "50px 0"
    },
    subheading: {
        color: "#878787",
        display: 'flex',
        margin: "20px 0",
        [theme.breakpoints.down('sm')]: {
            display: "block"
        }
    },
    link:{
        textDecoration:"none",
        color:'inherit'
    }

}))


const DetailView = () => {
    const classes = useStyle();
    let { id } = useParams();
    let history = useHistory();


    const [post, setPost] = useState({});
    const url = post.picture ||"https://source.unsplash.com/collection/5";

    useEffect(() => {
        const fetchData = async () => {
            // console.log(id);
            // const data = await getPost(id);
            const data= await axios.get(`http://localhost:5000/post/${id}`);

            // console.log(data.data);
            setPost(data.data);
        }
        fetchData();
    },[]);

    const deleteBlog = async()=>{
        await deletePost(id);
        history.push("/");
    };
    return (
        <Box className={classes.container}>
            <img src={post.picture || url} alt="banner" className={classes.image} />
            <Box className={classes.icons}>
                <Link  to={`/update/${id}`}><Edit className={classes.icon} color="primary" /></Link>
                <Delete onClick={deleteBlog} className={classes.icon} color="error" />
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
            <Link to={`/?username=${post.username}`} className={classes.link}><Typography  >Author: <span style={{ fontWeight: 600 }}>{post.username}</span></Typography></Link>
                <Typography style={{ marginLeft: "auto" }} >Created Date:{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
            <Typography style={{}} >{post.description}</Typography>
            <Comments post={post}/>

        </Box>

    )
}
export default DetailView;