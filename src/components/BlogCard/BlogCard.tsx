import React, { FC, useContext } from 'react';
import { Box, Button, Typography, makeStyles, createStyles } from '@material-ui/core';
import { navigate } from 'gatsby';
import Modal from "../Modal/Modal";
import { ActionContext } from '../../context/GlobalState';
interface Props {
    title: string
    slug: string
    publishDate: string
    excerpt: string
    featureImage: string
}

const useStyle = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',

        },
        imgBox: {


        },
        card: {
            // padding: '20px',
            marginBottom: '100px',
            width: '60%',
            height: '100%',
            backgroundColor: 'transparent',
            [theme.breakpoints.down('xs')]: {
                width: "80%",
            }
        },
        img: {
            height: '60vh',
            width: '100%',
            [theme.breakpoints.down("xs")]: {
                height: '40vh'
            }
        },
        text: {
            // fontWeight: 1000,
            [theme.breakpoints.down("xs")]: {

            }
        },
        cardHead: {
            display: 'flex',
            [theme.breakpoints.down("xs")]: {
                // width: '250%',
                // display: 'flex'
            }
        },
        title: {
            fontSize: '30px',
            fontFamily: 'monospace',
            fontWeight: 'bold'
        },
        date: {
            fontWeight: 'lighter',
            fontSize: '18px',
            fontFamily: 'courier',
            fontStyle: 'italic'
        },
        excerpt: {
            paddingTop: '35px',
            fontSize: '20px'
        },
        btn: {
            marginTop: '15px',
            border: '1px solid black',
            padding: '15px',
            borderRadius: '35px 0px 35px 35px',
            fontSize: '17px'
        }
    })

)

const BlogCard: FC<Props> = ({ title, slug, featureImage, excerpt, publishDate }) => {
    const { dispatch, loginModal, user, authenticated } = useContext(ActionContext);
    console.log(authenticated);
    console.log(user)
    const handleClose = () => {
        dispatch({
            type: "CLOSE_MODAL"
        })
    }

    const handleOpen = () => {
        dispatch({
            type: "OPEN_MODAL"
        })
    }

    const classes = useStyle()

    return (
        <>
       
        <div className={classes.cardHead}>
            <Box className={classes.root}>
                <div className={classes.card} >
                    
                    <div className={classes.imgBox}>
                        <Box>
                            
                            <Typography>
                                
                                <div>
                                    <img className={classes.img} src={featureImage} />
                                </div>
                            </Typography>
                        </Box>
                    </div>
                    <Box display='flex' flexWrap='wrap' >
                        <Typography className={classes.text} >

                            <div className={classes.title}> {title} </div>

                            <div className={classes.date}>{publishDate} </div>

                            <div className={classes.excerpt}> {excerpt} </div>
                            {/* <Button className={classes.btn} onClick={() => navigate(`/blog/${slug}`)}>
                            Read More 
                        </Button>
                         */}

                            {!authenticated ?
                                <Button className={classes.btn} onClick={handleOpen}>
                                    <Button className='blogBtn'>READ MORE</Button>
                                </Button> :
                                <Button className={classes.btn}  onClick={() => navigate(`/blog/${slug}`)}>
                                <Button className='blogBtn'>READ MORE</Button>
                            </Button>
                            }
                        </Typography>






                    </Box>

                </div>
            </Box>
            {!authenticated && loginModal && <Modal handleClose={handleClose} />}
        </div>
        </>
    )
}

export default BlogCard