import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveItemToLS } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const { job_description, job_responsibility, educational_requirements, experiences } = jobs.find(job => job.id == id);

    const handleApplyBtn = () => {
        toast("You've successfully applied this job!");
        saveItemToLS(id);
    }

    return (
        <div className="grid md:grid-cols-4 my-12 gap-12">
            <div className="col-span-3 text-gray-500 text-justify space-y-4">
                <p><span className="font-bold">Job Description:</span> {job_description}</p>
                <p><span className="font-bold">Job Responsibility:</span> {job_responsibility}</p>
                <h3 className="font-bold">Educational Requirement:</h3>
                <p>{educational_requirements}</p>
                <h3 className="font-bold">Experiences:</h3>
                <p>{experiences}</p>
            </div>
            <div>
                <div className="border bg-blue-100 p-4 rounded space-y-3">
                    <h3 className="border-b-2 pb-4 border-gray-300 text-black font-bold">Job Details</h3>
                    <h3 className="border-b-2 pb-4 border-gray-300 text-black font-bold">Contact Information</h3>
                </div>
                <button onClick={handleApplyBtn} className='w-full px-5 py-2 rounded-lg bg-[#7E90FE] text-white text-xl font-bold mt-4'>Apply</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;