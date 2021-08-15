import { Grid,Typography } from '@material-ui/core';
// Home component
import Banner from './Banner';
import Categories from './Categories';
import Posts from './Posts';



const Home = function () {
    return (
        <>
            <Banner />
            <Grid container>
                <Grid item lg={2} md={3} sm={12} xs={12}>
                    <Categories/>
                </Grid>
               
                <Grid container item lg={10} md={9} sm={12} xs={12} style={{marginTop:"10px"}}  justifyContent="center">
                    <Grid item lg={12} md={12} sm={12} xs={12}  >
                        <Typography variant="h6" style={{ fontWeight: "bold",marginLeft:"475px",fontSize:"35px"}}  >Our Blogs</Typography>
                    </Grid>
                    <Posts/>
                </Grid>
            </Grid>
            
        </>
    )
};
export default Home;