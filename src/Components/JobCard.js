import React from 'react'
import './JobCard.css'

const JobCard = () => {
  return (
    <div className='JobCardMain'>
        CompanyName<br/>
        EstimatedSalary<br/>
        About<br/>
        MinExperience<br/>
        <button>Apply Now</button>
    </div>
  )
}

export default JobCard