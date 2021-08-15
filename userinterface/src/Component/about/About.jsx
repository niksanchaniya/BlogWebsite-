import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
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
    },
    text1: {
        color: '#878787',
        textAlign:"center"
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3" className={classes.text}>About your site</Typography>
                <Typography variant="h5" className={classes.text1}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad quos exercitationem adipisci dolores facilis unde sequi fugit in officia dignissimos amet qui non tenetur ut recusandae illum, distinctio maiores voluptas, ipsam sapiente aliquid! Incidunt quis sit neque suscipit, aspernatur deserunt eveniet ad facere, laborum ea accusantium, itaque voluptate sapiente!
                    
                </Typography>
                
            </Box>
        </Box>
    )
}

export default About;