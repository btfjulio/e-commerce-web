import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a className="ml-2">
        <Image 
          src="/assets/games-logo.png" 
          alt="Save Games Logo"
          width={40}
          height={40} 
        />
      </a>
    </Link>
  )
}

export default Logo;