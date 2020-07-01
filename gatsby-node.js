const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      //same as node: node
      node,
      name: "slug",
      value: slug,
    })
  }

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${value}`,
    })
  }
}

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  //dynamically create pages here
  //get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const pageTemplate = path.resolve("./src/templates/page.js")
  //get slugs
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (response.errors) {
    reporter.panic("failed to create posts ", response.errors)
  }

  //create new pages with unique slug
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
  const pages = response.data.allMdx.edges

  pages.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: pageTemplate,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
