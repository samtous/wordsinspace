import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {useLocation} from '@reach/router'
import useBreakpoints from '../hooks/useBreakpoint';

import LeftNav from '../components/leftNav'
import MobileLeftNav from '../components/mobile/mobileLeftNav'
import Search from '../components/search'
import {getResponsiveVars} from "../utils/dom"

import '../styles/layout.css'
import '../styles/global.css'
import '../styles/browser.css'

const Browser = ({ children, props }) => {
  const location = useLocation();
  const catName = location.pathname.replace('/', '').replace('/', '')

  const breakpoint = useBreakpoints();
  const {showSearch, mobileBrowserLayout, mobileNavBar} = getResponsiveVars(breakpoint)

  const styleWrapper =
  {
    display: 'flex',
    flexDirection: mobileNavBar ? 'column' : 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  }

  const styleTopBar =
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    height: mobileNavBar ? 'auto' : '60px',
  }

  return (
    <div style={styleWrapper} >
      {/* ----------------------------WORDS IN SPACE---------------------------- */}
      <div className='left-gradient'>
        {!mobileNavBar && <LeftNav />}
        {mobileNavBar && <MobileLeftNav />}
      </div>
      {/* ----------------------------CONTAINER---------------------------- */}
      <div style={{width: '100%'}}>
        {/* ----------------------------TOP---------------------------- */}
        <div className='gradient'>
          <div style={styleTopBar} >
              <div className='interface'>
                {catName!== 'work' &&
                  <div>
                    Browsing: <span style={{fontSize: '10px'}} className={catName.toLowerCase()+" category-active"}>{catName}</span>
                  </div>
                }
              </div>

            {showSearch && <Search />}
          </div>
        </div>

        {/* ----------------------------MAIN ---------------------------- */}
        <div
          style={{
            display: 'flex',
            flexDirection: mobileBrowserLayout ? 'column' : 'row',
            justifyContent: 'space-between',
          }}
          >
          {children}
        </div>
      </div>
    </div>
  )
}

Browser.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Browser
