import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiDollarSign, FiCalendar } from 'react-icons/fi';

function Card({ data }) {
  const {
    companyLogo,
    companyName,
    jobTitle,
    jobLocation,
    employmentType,
    minPrice,
    maxPrice,
    postingDate,
    description,
  } = data;

  return (
    <section className='card' style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
      <Link to="/" className='flex gap-4 flex-col sm:flex-row items-start'>
        {/* Apply border-radius to make the logos rounded */}
        <img src={companyLogo} alt="" style={{ borderRadius: '50%', width: '60px', height: '60px' }} />
        <div>
          <h4 className='text-primary mb-1'>{companyName}</h4>
          <h3 className='text-1g font-semibold mb-2'>{jobTitle}</h3>
          <div className='text-primary-70 text-base flex flex-wrap gap-2 mb-2'>
            <span className='flex items-center gap-2'><FiMapPin /> {jobLocation}</span>
            <span className='flex items-center gap-2'><FiClock /> {employmentType}</span>
            <span className='flex items-center gap-2'><FiDollarSign /> {minPrice}-{maxPrice}k</span>
            <span className='flex items-center gap-2'><FiCalendar /> {postingDate}</span>
          </div>
          <p className='text-base text-primary-76'>{description}</p>
        </div>
      </Link>
    </section>
  );
}

export default Card;

