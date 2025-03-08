'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  if (!pathName.includes('dashboaed')) {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className="flex justify-between gap-x-10">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>;
  }
};

export default NavBar;
