import React from 'react'

import BlogLayout from '../components/blog_layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <BlogLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </BlogLayout>
)

export default NotFoundPage
