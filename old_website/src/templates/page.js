import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import BlogLayout from '../components/blog_layout'
import Post from '../components/post'

const BlogPostTemplate = ({ data, pageContext }) => {
  const {
    frontmatter: { title, date, path, author, coverImage, excerpt, tags },
    excerpt: autoExcerpt,
    id,
    html,
  } = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <BlogLayout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      <Post
        key={id}
        title={title}
        date={date}
        path={path}
        author={author}
        coverImage={coverImage}
        html={html}
        tags={tags}
        previousPost={previous}
        nextPost={next}
      />
    </BlogLayout>
  )
}

export default BlogPostTemplate

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.object,
    previous: PropTypes.object,
  }),
}

export const pageQuery = graphql`
  query($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        path
        author
        excerpt
        tags
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
      html
      excerpt
    }
  }
`
