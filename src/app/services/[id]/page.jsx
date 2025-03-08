import React from 'react';

const ServiceDetalsPage = ({ params }) => {
  const id = params.id;
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
  const singaleData = data.find(d => d.id == id);
  return (
    <div>
      <h1>ServiceDetalsPage</h1>
      <p>ID : {id}</p>
      <p>{singaleData.name}</p>
      <p>{singaleData.description}</p>
    </div>
  );
};

export default ServiceDetalsPage;
