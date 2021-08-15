import { Button, makeStyles, Table,TableHead,TableRow,TableCell,TableBody } from "@material-ui/core";
import {categories} from "../../constant/Data";
import {Link} from "react-router-dom";
const useStyle = makeStyles({
    create:{
        margin:20,
        background:"#6495ED",
        color:"#fff"
    },
    table:{
        margin:"0px 5px",
        border:"1px solid rgba(224,224,224,1)"
    },
    link:{
        textDecoration:"none",
        color:'inherit'
    }
});


const Categories = ()=>{
    const classes =useStyle();
    return(
        <>
        <Link to="/create" className={classes.link}><Button variant="contained" className={classes.create} >Create blog</Button></Link>

        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell><Link to={"/"} className={classes.link}>All Categories
                    </Link></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(consta=>(
                    <TableRow>
                        <TableCell><Link to={`/?category=${consta}`} className={classes.link}>{consta}</Link></TableCell>
                    </TableRow>
                ))}
            </TableBody>
            
        </Table>

        </>

    )
}
export default Categories;
