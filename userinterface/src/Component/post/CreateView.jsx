import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import { AddCircle as Add } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { createPost, uploadFile } from '../../service/api';
import { useHistory} from "react-router-dom";


const useStlye = makeStyles((theme) => ({
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
    form: {
        display: "flex",
        flexDirection: "row",
        marginTop: "10px"

    },
    textfield: {
        flex: 1,
        margin: "0 30px",
        fontSize: 25
    },
    textarea: {
        width: "100%",
        marginTop: 50,
        border: "none",
        fontSize: 18,
        '&:focus-visible': {
            outline: "none"
        }
    }
}));

const intialValues = {
    title: "",
    description: "",
    picture: "https://source.unsplash.com/collection/5",
    username: "anonymous",
    categories: "all",
    // file:"",
    createdDate: new Date()
}


const CreateView = () => {
    // const url = "https://source.unsplash.com/collection/5";
    // const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const history = useHistory();
    const classes = useStlye();
    const [post, setPost] = useState(intialValues);
    const [file, setFile] = useState("");
    const [imageURL, setImageURL] = useState('');
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    };
    const savePost = async () => {
        await createPost(post);
        history.push("/")
    };
   

    useEffect(() => {
        const getImage = async () => { 
            // console.log(e.target.files[0]);
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const image = await uploadFile(data);
                post.picture = image.data;
                setImageURL(image.data);
            }
        }
        getImage();
        
    }, [file])
    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />
            <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <Add className={classes.addIcon} fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputBase onChange={handleChange}
                    placeholder="title"
                    className={classes.textfield}
                    name='title'
                />
                <Button onClick={savePost} variant="contained" color="primary">Publish</Button>
            </FormControl>
            <TextareaAutosize onChange={handleChange}
                rowsMin={5}
                placeholder="tell your story.."
                className={classes.textarea}
                name='description'

            />
        </Box>


    )
}
export default CreateView;