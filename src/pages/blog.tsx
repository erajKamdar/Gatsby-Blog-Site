import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout/Layout'
import BlogCard from '../components/BlogCard/BlogCard';

const blog = () => {
    const data = useStaticQuery(
        graphql `
        query {
          allContentfulBlogs(sort: {fields: publishDate, order: DESC}) {
            edges {
              node {
                excerpt {
                  childMarkdownRemark {
                    excerpt(pruneLength: 200)
                  }
                }
                featureImage {
                  file {
                    url
                  }
                }
                slug
                title
                publishDate(formatString: "MMMM Do, YYYY")
              }
            }
          }
        }
        `)

    return (
        <div>
             <Layout>
                <div>
                <h1 style={{textAlign: 'center', paddingTop: '20vh', fontSize: '50px', fontWeight: 'bolder', fontFamily: 'arial'}}>Blog Posts</h1>

                  {data.allContentfulBlogs.edges.map((edge, i) => {
                    const { title,  publishDate, featureImage, excerpt, slug } = edge.node
                    return(
                      <div key={i}>
                        <BlogCard featureImage={featureImage[0].file.url} title={title}  publishDate={publishDate} slug={slug} excerpt={excerpt.childMarkdownRemark.excerpt} />
                      </div>
                      
                    )
                  })}
                </div>
             </Layout>
        </div>
    )
}

export default blog;