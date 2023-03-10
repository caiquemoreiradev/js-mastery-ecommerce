import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

export function Footer() {
  return (
    <div className='footer-container'>
      <p>2022 NextGames All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}