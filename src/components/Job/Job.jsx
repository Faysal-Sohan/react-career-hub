import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/Ci'
import { AiOutlineDollarCircle } from 'react-icons/Ai'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className='border border-gray-300 rounded-lg p-10 space-y-3'>
            <figure className='max-w-[117px]  mb-8'><img src={logo} alt="" /></figure>
            <h2 className='text-2xl font-extrabold'>{job_title}</h2>
            <h4 className='text-gray-400 text-xl'>{company_name}</h4>
            <button className='border border-[#7E90FE] text-[#7E90FE] font-bold px-5 py-2 rounded mr-4'>{remote_or_onsite}</button>
            <button className='border border-[#7E90FE] text-[#7E90FE] font-bold px-5 py-2 rounded'>{job_type}</button>
            <div className='flex gap-6 text-gray-500 mb-4'>
                <h3 className='inline-flex items-center gap-2'><CiLocationOn />{location}</h3>
                <h3 className='inline-flex items-center gap-2'><AiOutlineDollarCircle /> Salary : {salary}</h3>
            </div>
            <div>
                <Link to={`/job/${id}`}><button className='px-5 py-2 rounded bg-[#7E90FE] text-white text-xl font-bold '>View Details</button></Link>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,

}

export default Job;