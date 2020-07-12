import React from "react"

import Layout from "../components/layout"
import List from "../components/list"
import TagsMenu from "../components/tagsMenu"
import CategoriesMenu from "../components/categoriesMenu"
import SEO from "../components/seo"

import {usePosts} from "../components/hooks/usePosts"
import {usePages} from "../components/hooks/usePages"
import {useCategories} from "../components/hooks/useCategories"
import {useTags} from "../components/hooks/useTags"

export default function Home() {
  const data = [...usePages(), ...usePosts()];
  const tags = useTags();
  const categories = useCategories();
  const nonEmptyTags = tags.filter(node => (node.pages.nodes.length > 0 || node.posts.nodes.length > 0))
  
  return (
    <Layout>
      <SEO title="home" />
      <div 
        style={{
          display: `flex`,
          flexDirection: `row`,
          alignItems: `flex-start`, 
          justifyContent: `flex-start`, 
        }}
        >
        <List items={data}/>

        <CategoriesMenu categories={categories} />
        <TagsMenu tags={nonEmptyTags} />
        
      </div>
    </Layout>
  )
}