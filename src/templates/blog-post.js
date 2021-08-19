import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

export default Template = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}

export const postQuery = useStaticQuery(
  graphql`
    query BlogPostByPath($path: String) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          path
          title
          author
          date
        }
      }
    }
  `
)
