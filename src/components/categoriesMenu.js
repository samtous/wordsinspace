import React from "react"
import {Link } from "gatsby" 

const CategoriesMenu = (props) => {
	
	if(!props) return null
  
  return (
     <aside style={{
      alignSelf: 'flex-start',
      textAlign: 'left',
			fontSize: '0.9rem',
			width: '10vw'
     }}>
      	Categories
	      {props.categories.filter(category => category.name === 'Blog' || category.name === 'Publication' || category.name === 'Presentation' || category.name === 'Teaching').map((category,index) => (
					<li 
						key={index}
						style={{
			      	margin: '10px auto',
            	listStyle: 'none',
						}}		
					>
						<Link to={category.slug} state={{ fromMain: true }}>
		          {category.name} [{category.posts.nodes.length+category.pages.nodes.length}]
		        </Link>
					</li>
	     	))}
     </aside>
   )
}

export default CategoriesMenu 