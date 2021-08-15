
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'http://mrtaba.ir/image/bg2.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px top -100px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        textAlign:"center"
    }
})


const Contact = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}>Helloo</Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3" className={classes.text}>Contact us</Typography>    
                
            </Box>
        </Box>
    );
}

export default Contact;