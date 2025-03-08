'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
  const router = useRouter();
  const isLoggedIn = false;
  const handaleNavigation = () => {
    if (isLoggedIn) {
      router.push('/about/addres');
    } else {
      router.push('/');
    }
  };
  return (
    <div>
      <p className="text-blue-500 font-bold">about pages</p>
      <p>
        <Link href="/about/addres">address</Link>
      </p>
      <button type="button" onClick={handaleNavigation}>
        Click me!
      </button>
    </div>
  );
};

export default AboutPage;
