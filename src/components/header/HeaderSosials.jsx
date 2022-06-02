import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from "react-icons/ai"
import {AiFillDribbbleCircle} from "react-icons/ai"

const HeaderSosials = () => {
  return (
    <div className='header__sosials'>
        <a href="http://linkedin.com" target="_black"><BsLinkedin/></a>
        <a href="http://github.com" target="_black"><AiFillGithub/></a>
        <a href="http://dribbble.com" target="_black"><AiFillDribbbleCircle/></a>

    </div>
  )
}

export default HeaderSosials