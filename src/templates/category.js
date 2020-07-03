import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import List from "../components/list"

export default function Category({ data, location}) {

  const category = data.allWpCategory.nodes[0];
  const pages = category.pages.nodes;
  const posts = category.posts.nodes;
  const all = [...pages, ...posts];

  if(!location) return null
  
  return (
    <Layout>
      
      <List items={all} fromMain={location.state ? location.state.fromMain : false}/>
      
      <aside  
        style={{
        alignSelf: 'flex-start',
        textAlign: 'left',
        width: `40%`,
        fontSize: '0.9rem',
       }}>
          Category
          <div style={{
            marginBottom: '2vh',
            color: '#ff5236',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>{category.name}</div>
        <div><Link to="/" >back</Link></div>
      </aside>
    </Layout>
  )
}

export const query = graphql`
  query getCategory($slug: String!) {
    allWpCategory(filter: {slug: { eq: $slug }}) {
      nodes {
        name
        slug
        posts {
          nodes {
            title
            slug
            date
            nodeType
          }
        }
        pages {
          nodes {
            title
            slug
            date
            nodeType
          }
        }
      }
    }
  }
`