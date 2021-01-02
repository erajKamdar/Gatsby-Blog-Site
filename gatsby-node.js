const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulBlogs {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBlogs.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blogPost.tsx"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
