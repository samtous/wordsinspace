import React from 'react'
import {Link} from "gatsby"

import Home from '../../layouts/home'
import SEO from '../seo'
import MobileFooter from "./mobileFooter"
import Glyph from '../../images/assets/glyph.svg'

import Sticker_Browse_Mobile from '../../images/assets/Sticker_Browse_Mobile.svg'

export default function HomePage({menuItems}) {

  const styleWrapper = {
    display: 'flex',
    flexFlow: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    height: 'auto',
    marginBottom: '2vh',
  }

  const styleSVG = {
    alignSelf: 'center',
    margin: '3vh 0 0vh 0'
  }

  const styleLink = {
    width: '84vw',
    height: '60px',
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #5B5A7C'
  }

  return (
    <Home>
      <SEO title='Home' />
      <div
        style={styleWrapper}>
          <div
            style={styleSVG}>
            <Link to={'/work/'}><Sticker_Browse_Mobile /></Link>
          </div>
          <Link style={styleLink} to={'/classes'}>
            <div className='home-title-mobile'>CLASSES</div>
            <Glyph />
          </Link>

          <Link style={styleLink} to={'/upcoming-events/'}>
            <div className='home-title-mobile'>UPCOMING EVENTS</div>
            <Glyph />
          </Link>

          <Link style={styleLink} to={'/about'}>
            <div className='home-title-mobile'>ABOUT</div>
            <Glyph />
          </Link>

      </div>
      <MobileFooter />
    </Home >
  )
}
