import { useLoaderData } from "react-router-dom";
import { getItemFromLS } from "../../utility/localstorage";
import { useEffect, useState } from "react";

const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(() => {
        const jobsFromLS = getItemFromLS();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => jobsFromLS.includes(job.id.toString()));
            console.log(jobsApplied);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs]);

    const handleFilter = filter => {
        if(filter === 'All') {
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'Remote') {
            const filteredJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(filteredJobs);
        }
        else if(filter === 'Onsite') {
            const filteredJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(filteredJobs);
        }

    }

    return (
        <div>
            <div>
                <details className="dropdown mb-32">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilter('All')}><a>All</a></li>
                        <li onClick={() => handleFilter('Remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilter('Onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            {
                displayJobs.map(job => <div key={job.id} className="border-2 border-yellow-600 p-2 space-y-2">
                    <h3>{job.job_title}</h3>
                    <h4>{job.company_name}</h4>
                    <h4>{job.remote_or_onsite}</h4>
                </div>)
            }
        </div>
    );
};

export default AppliedJobs;