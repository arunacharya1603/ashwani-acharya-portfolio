import React from 'react';

const Services = () => {
  return (
    <div className='mt-20 p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center flex-col items-center md:items-start'>
      <h2 className="text-3xl font-bold mb-4 text-black">Services</h2>
      <ul className="list-disc list-inside font-mono font-semibold text-xl text-black ">
        <li>Civil Litigation</li>
        <li>Criminal Defense</li>
        <li>Family Law</li>
        <li>Legal Consultation</li>
        <li>Contract Drafting</li>
        
      </ul>
    </div>
  );
}

export default Services;
