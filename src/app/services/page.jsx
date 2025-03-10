import Link from 'next/link';
import React from 'react';

const ServicesPages = () => {
  const data = [
    {
      name: 'John Doe',
      id: 1,
      description: 'A passionate software developer.',
      img: 'https://i.ibb.co.com/5x6jws2/img-9.jpg',
    },
    {
      name: 'Jane Smith',
      id: 2,
      description: 'A creative UI/UX designer.',
      img: 'https://i.ibb.co.com/5x6jws2/img-9.jpg',
    },
    {
      name: 'Alice Johnson',
      id: 3,
      description: 'An expert in full-stack web development.',
      img: 'https://i.ibb.co.com/5x6jws2/img-9.jpg',
    },
    {
      name: 'Bob Williams',
      id: 4,
      description: 'A data scientist and machine learning engineer.',
      img: 'https://i.ibb.co.com/5x6jws2/img-9.jpg',
    },
    {
      name: 'Charlie Brown',
      id: 5,
      description: 'A cybersecurity specialist.',
      img: 'https://i.ibb.co.com/5x6jws2/img-9.jpg',
    },
  ];

  return (
    <div>
      <p className="text-blue-500 font-bold">ServicesPages</p>
      {data.map(d => {
        return (
          <div>
            <Link href={`/services/${d.id}`}>
             
                <img className="h-20 py-5" src={d.img} alt="" />
            
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesPages;
