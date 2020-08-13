import React from 'react'
import {Link} from "gatsby"

import Home from '../layouts/home'
import SEO from '../components/seo'
import HomeItem from '../components/home/homeItem'
import { navigate } from "gatsby"

import MobileIndex from '../components/mobile/mobileIndex'

import {useSiteMenuData} from '../hooks/useSiteMenuData'
import useBreakpoints from '../hooks/useBreakpoint';
import {getResponsiveHomeVars} from "../utils/dom"

import MobileFooter from '../components/mobile/mobileFooter'
import Footer from '../components/footer'

import Sticker_Email from '../images/assets/Sticker_Email.svg'
import Sticker_Email_text from '../images/assets/Sticker_Email_text.svg'
import Sticker_Browse from '../images/assets/Sticker_Browse.svg'
import Sticker_Browse_text from '../images/assets/Sticker_Browse_text.svg'
import Sticker_CV from '../images/assets/Sticker_CV.svg'
import Sticker_CV_text from '../images/assets/Sticker_CV_text.svg'
import Sticker_Classes from '../images/assets/Sticker_Classes.svg'
import Sticker_Classes_text from '../images/assets/Sticker_Classes_text.svg'
import Sticker_Words from '../images/assets/Sticker_Words.svg'
import Sticker_Words_text from '../images/assets/Sticker_Words_text.svg'
import Sticker_Pinboard from '../images/assets/Sticker_Pinboard.svg'
import Sticker_Pinboard_text from '../images/assets/Sticker_Pinboard_text.svg'
import Sticker_Twitter from '../images/assets/Sticker_Twitter.svg'
import Sticker_Twitter_text from '../images/assets/Sticker_Twitter_text.svg'
import Sticker_Upcoming from '../images/assets/Sticker_Upcoming.svg'
import Sticker_Upcoming_text from '../images/assets/Sticker_Upcoming_text.svg'
import Sticker_Colophon from '../images/assets/Sticker_Colophon.svg'
import Sticker_Colophon_text from '../images/assets/Sticker_Colophon_text.svg'

export default function HomePage() {
  const breakpoint = useBreakpoints(typeof window !== `undefined`)
;
  const {mobileHome} = getResponsiveHomeVars(breakpoint)

  const menuData = useSiteMenuData();

  if (!menuData)  {navigate('/work')}

  const menuItems = menuData[0]?.menuItems?.nodes

  if (mobileHome) return <MobileIndex menuItems={menuItems} />

  const styleSVG = {
    position: 'relative',
    width:'50%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  return (
    <Home>
      <SEO title='Home' />
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          alignContent: 'stretch',
        }}>
        <div
          style={{
            width: '50%',
          }}>
          <HomeItem item={menuItems[0]} index={1} />
          <HomeItem item={menuItems[1]} index={2} />
        </div>

        <div className="Sticker"
          style={styleSVG}>
          <Link to={'/work/'}><Sticker_Browse /><Sticker_Browse_text /></Link>
        </div>

        <div className="Sticker"
          style={styleSVG}>
          <Link to ={'/about/'}><Sticker_Words /><Sticker_Words_text /></Link>
        </div>

        <div
          style={{
            width:'50%',
          }}>
          <HomeItem item={menuItems[2]} index={3} />
        </div>

        <div
          style={{
            width:'50%',
          }}>
          <HomeItem item={menuItems[3]} index={4} />
          <HomeItem item={menuItems[4]} index={5} />
        </div>

        <div className="Sticker"
          style={styleSVG}>
          <Link to={'/student-resources/'}><Sticker_Classes /><Sticker_Classes_text /></Link>
        </div>

        <div className="Sticker"
          style={styleSVG}>
          <Link to={'/upcoming-events/'}><Sticker_Upcoming /><Sticker_Upcoming_text /></Link>
        </div>

        <div
          style={{
            width:'50%',
          }}>
          <HomeItem item={menuItems[5]} index={6} />
        </div>

        <div
          style={{
            width:'50%',
            display: 'flex',
            flexFlow: 'column',
            flexWrap: 'nowrap',
          }}>

          <HomeItem item={menuItems[6]} index={7} />

          <div
            style={{
              marginTop: '5vh',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'space-around'
            }}>
            <a href="mailto:matterns@newschool.edu?subject=Hi Shannon!"><Sticker_Email /><Sticker_Email_text /></a>
            <a href="https://twitter.com/shannonmattern"><Sticker_Twitter /><Sticker_Twitter_text /></a>
            <a href="https://wordsinspace.net/shannon/wp-content/uploads/2019/09/matterncv2019.pdf"><Sticker_CV /><Sticker_CV_text /></a>
            <a href="https://pinboard.in/u:shannon_mattern"><Sticker_Pinboard /><Sticker_Pinboard_text /></a>
          </div>
        </div>
      </div>
      {/* ----------------------------FOOTER---------------------------- */}
      {!mobileHome && <Footer />}
      {mobileHome && <MobileFooter />}
    </Home>
  )
}
