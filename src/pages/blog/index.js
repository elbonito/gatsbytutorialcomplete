import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const _TitlePage = "blogs"
const BlogPage = ({data}) => {
  return (
    <Layout pageTitle={_TitlePage}>
      <p>blog post go are here</p>
      <ul>
        {
          data.allMdx.nodes.map(node => (
           <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>  
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
           </article>
          ))
        }
      </ul>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title={_TitlePage} />

export default BlogPage