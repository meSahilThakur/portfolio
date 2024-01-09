import Link from 'next/link';
import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';


const SocialLinks = () => {
  return (
    <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/meSahilThakur/"} target="_blank">
            <FaGithub className="h-8 w-8 hover:scale-110" />
          </Link>
          <Link href={"https://linkedin.com/in/meSahilThakur/"} target="_blank">
            <FaLinkedin className="h-8 w-8 bg-blue-700 rounded hover:scale-110" />
          </Link>
          <Link href={"https://instagram.com/me.sahilthakur?igshid=MzNINGNkZWQ4Mg=="} target="_blank">
            <FaInstagram className="h-8 w-8 bg-gradient-to-br from-purple-700 via-pink-500 to-yellow-500 rounded hover:scale-110" />
          </Link>
          <Link href={"https://facebook.com/sahil.thakur.5855594?mibextid=AQCFcj8imgCIWYJ5"} target="_blank">
            <FaFacebook className="h-8 w-8 bg-blue-700 rounded hover:scale-110" />
          </Link>
        </div>
  )
}

export default SocialLinks