import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import List from "../components/list"

export default function Tag({ data }) {
  const tag = data.allWpTag.nodes[0]
  return (
    <Layout>
      <List items={tag.posts.nodes}/>
      <aside  
        style={{
        alignSelf: 'flex-start',
        textAlign: 'left',
        width: `40%`,
        fontSize: '0.9rem',
       }}>
        <Link to="/">back</Link>
      </aside>
    </Layout>
  )
}

export const query = graphql`
  query getTag($slug: String!) {
    allWpTag(filter: {slug: { eq: $slug }}) {
      nodes {
        name
        slug
        posts {
          nodes {
            title
            slug
            link
            date
          }
        }
      }
    }
  }
`