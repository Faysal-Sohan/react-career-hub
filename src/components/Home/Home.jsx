import Banner from "../Banner/Banner";
import CategoryJobs from "../CategoryJobs/CategoryJobs";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryJobs></CategoryJobs>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;