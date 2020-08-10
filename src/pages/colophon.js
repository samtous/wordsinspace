import React from "react"

import Reader from "../layouts/reader"
import SEO from "../components/seo"

import useBreakpoints from '../hooks/useBreakpoint';
import {getResponsiveReaderVars} from "../utils/dom"
import ArticleTitle from "../components/article/articleTitle"

export default function Colophon() {
  const breakpoint = useBreakpoints()
  const {mobileArticleContent} = getResponsiveReaderVars(breakpoint)

  return (
    <Reader>
      <SEO title="colophon" />

      {/* ==================== Title ====================  */}
      <ArticleTitle title={'Colophon'}/>

      <div 
        style={{
          display: 'flex',
          flexDirection: mobileArticleContent ? 'column' : 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          margin: '0vh 5vh 0vh 0',
        }}>
          <div 
            className='metadata'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu. Eros in cursus turpis massa tincidunt dui. Tempus urna et pharetra pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Urna condimentum mattis pellentesque id nibh tortor. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Nam at lectus urna duis convallis convallis tellus id interdum. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mi sit amet mauris commodo quis imperdiet massa. Vel eros donec ac odio tempor orci dapibus. At augue eget arcu dictum varius duis. Sed turpis tincidunt id aliquet risus.</p>            

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu. Eros in cursus turpis massa tincidunt dui. Tempus urna et pharetra pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Urna condimentum mattis pellentesque id nibh tortor. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Nam at lectus urna duis convallis convallis tellus id interdum. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mi sit amet mauris commodo quis imperdiet massa. Vel eros donec ac odio tempor orci dapibus. At augue eget arcu dictum varius duis. Sed turpis tincidunt id aliquet risus.</p>
          </div>      

          <div
            className='metadata'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu. Eros in cursus turpis massa tincidunt dui. Tempus urna et pharetra pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Urna condimentum mattis pellentesque id nibh tortor. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Nam at lectus urna duis convallis convallis tellus id interdum. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mi sit amet mauris commodo quis imperdiet massa. Vel eros donec ac odio tempor orci dapibus. At augue eget arcu dictum varius duis. Sed turpis tincidunt id aliquet risus.</p>            

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu. Eros in cursus turpis massa tincidunt dui. Tempus urna et pharetra pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Urna condimentum mattis pellentesque id nibh tortor. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Nam at lectus urna duis convallis convallis tellus id interdum. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mi sit amet mauris commodo quis imperdiet massa. Vel eros donec ac odio tempor orci dapibus. At augue eget arcu dictum varius duis. Sed turpis tincidunt id aliquet risus.</p>
          </div>
      </div>
     
    </Reader>
  )
}