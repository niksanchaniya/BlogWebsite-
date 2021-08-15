import { Grid } from "@material-ui/core";
import Post from "./Post";
import { Link,useLocation } from "react-router-dom";
import { getAllposts } from "../../service/api";
import {useEffect,useState } from "react"

const Posts = () => {
    // let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const [posts, setPosts] = useState([]);
    const{search}= useLocation();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllposts(search);
            // console.log(data);
            setPosts(data.data);
        }
        fetchData();
    },[search])

    return (
        <>

            { posts.map(post => (
                <Grid item lg={3} sm={4} xs={12} > 
                    <Link to={`/details/${post._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <Post post={post} wrap="noWrap" zeroMinWidth/>
                    </Link>
                </Grid>
            ))
            }
        </>


    )
};

export default Posts;

