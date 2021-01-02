import React from 'react'
import { graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import Layout from '../components/Layout/Layout'
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Box, Typography, makeStyles, createStyles } from '@material-ui/core'

export const query = graphql`
    query ($slug: String) {
        contentfulBlogs(slug: {eq: $slug}) {
          title
          subtitle
          publishDate(formatString: "MMMM Do, YYYY")
          featureImage {
            file {
                url
            }
          }    
          body {
              raw
              references{
                  file{
                      url
                  }
              }
          }
          excerpt {
            excerpt
          }
        }
      }    


`

const useStyle = makeStyles((theme) => createStyles({
    root: {
        overflow: 'hidden',
        width: '100%'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        color: '#11171A',
        marginTop: '20vh',
        // marginBottom: '5px',
        alignContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
       
    },
    title: {
        fontSize: '60px',
        fontWeight: 1000,
        paddingTop: '25px',
        paddingBottom: '25px',
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            fontSize: '35px',

        }
    },
    imgBox: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        // height: '40%',
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'center',
            alignContent: 'center',
        }
    },
    mainImg: {
        height: '70vh',
        width: '70vw',
        [theme.breakpoints.down("sm")]: {
            height: '50vh',
            width: '90vw'
        }
    },
    subtitle: {
        paddingTop: '15px',
        fontFamily: 'monospace',
        fontSize: '22px',
        fontWeight: 'bolder',
        
    },
    date: {
        paddingTop: '10px',
        fontWeight: 'lighter',
        fontSize: '17px',
        fontStyle: 'italic'
    },
    line: {
        marginTop: '20px',
        marginBottom: '25px',
        height: '2px',
        backgroundColor: 'rgb(101, 200, 245)'
    },
    lineTwo : {
        marginTop: '40px',
        marginBottom: '40px',
        height: '2px',
        backgroundColor: 'rgb(101, 200, 245)',
        [theme.breakpoints.down("sm")]: {
            marginTop: '30px',
            marginBottom: '0px',
            position : 'relative',
            bottom: '-6vh'
        }
    },
    excerpt: {
        marginTop: '22px',
        color: '#263238',
        fontSize: '19px',
        
    },
    body: {
        color: '#263238',
        fontSize: '19px',
    }
}))
const blogPost = ({ data: { contentfulBlogs } }) => {
    const { title, subtitle, featureImage, publishDate, excerpt, body } = contentfulBlogs
    const classes = useStyle()

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
                return (
                    <>
                        <div>
                            {body.references.map((node, i) => {
                                return (
                                    <>
                                        <div key={i}>
                                            <img style={{ height: '60%', width: '70%', marginLeft: '15%', marginRight:'10%' }} src={node.file.url} />
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </>
                )
            }
        }
    }
    return (
        <Layout>
            <div>
                <Box className={classes.root}>
                    <Box className={classes.main}>
                        <Typography variant='h2' className={classes.title}>
                            {title}
                        </Typography>


                        <Box className={classes.imgBox}>
                            <Typography>
                                {featureImage.map((node, i) => {
                                    return (
                                        <img key={i} className={classes.mainImg} src={node.file.url} />
                                    )
                                })}

                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h5' className={classes.subtitle}>
                                {subtitle}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h5' className={classes.date}>
                                {publishDate}
                            </Typography>
                        </Box>
                        <div className={classes.line}></div>

                        <Box>
                            <Typography className={classes.excerpt}>
                                {excerpt.excerpt}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography className={classes.body}>
                                {renderRichText(body, options)}
                                <div className={classes.lineTwo}></div>
                            </Typography>
                        </Box>
                        
                    </Box>
                </Box>
            </div>
        </Layout>
    )
}

export default blogPost;