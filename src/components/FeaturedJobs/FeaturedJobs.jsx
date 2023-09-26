import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [dataLength, setDataLength] = useState(4);

    const [jobs, setJobs] = useState([]);

    const handleDisplayData = () => {
        dataLength === jobs.length ? setDataLength(4) : setDataLength(jobs.length); 
    }

    useEffect(() => {
        fetch('jobs.json')
            .then(resp => resp.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="mb-12">
            <h3 className="text-5xl font-semibold text-center mb-4">Featured Jobs</h3>
            <p className="text-center text-gray-500 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6 mb-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center">
                <button onClick={handleDisplayData} className='px-5 py-2 rounded bg-[#7E90FE] text-white text-xl font-bold '>{dataLength === jobs.length ? 'Show Less': 'Show All'}</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;