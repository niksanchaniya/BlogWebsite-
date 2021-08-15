import { Box, makeStyles, FormControl, InputBase,Button, TextareaAutosize } from "@material-ui/core";
import {AddCircle as Add} from '@material-ui/icons';
import {  useEffect,useState } from "react";
import { getPost,updatePost,uploadFile } from "../../service/api";
import { useParams,useHistory } from "react-router-dom";



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
    form:{
        display:"flex",
        flexDirection:"row",
        marginTop:"10px"

    },
    textfield:{
        flex:1,
        margin:"0 30px",
        fontSize:25
    },
    textarea:{
        width:"100%",
        marginTop:50,
        border:"none",
        fontSize:18,
        '&:focus-visible':{
            outline:"none"
        }
    }
}))

const UpdateView = () => {
    const classes = useStlye();
    const history = useHistory();
    const intialValues = {
        title: "",
        description:"",
        picture: "https://source.unsplash.com/collection/5",
        username: "anonymous",
        categories: "all",
        createdDate: new Date()
    }
    let { id } = useParams();
    const [post,setPost]=useState(intialValues);
    const [file, setFile] = useState("");
    const [imageURL, setImageURL] = useState('');
    const url = post.picture ||"https://source.unsplash.com/collection/5";

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

    useEffect(()=>{
        const fetchData = async ()=>{
            let data = await getPost(id);
            setPost(data.data);
            // console.log(data.data)
        };
        fetchData();
    },[]);

    const handleChange= (e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    };
    const updateData= async()=>{
        await updatePost(id,post);
        console.log(post)
        history.push(`/details/${id}`);
    };


    return (
        <Box className={classes.container}>
            <img src={post.picture||url} alt="banner" className={classes.image} />
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
                <InputBase placeholder="title" name="title" onChange={handleChange} value={post.title} className={classes.textfield} />
                <Button variant="contained" onClick={updateData} color="primary">Update</Button>
            </FormControl>
            <TextareaAutosize
            rowsMin={5}
            placeholder="tell your story.."
            name="description" 
            onChange={handleChange}
            value={post.description}
            className={classes.textarea}
            />
        </Box>


    )
}
export default UpdateView;