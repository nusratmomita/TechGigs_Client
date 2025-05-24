import Banner from '../../Components/Banner/Banner';
import TopFreelancers from '../../Components/TopFreelancers/TopFreelancers';
import FreelancerEmployer from '../../Components/FreelancerEmployer/FreelancerEmployer';
import FeaturedTasks from '../../Components/FeaturedTasks/FeaturedTasks';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();
    console.log(data)

    
    
    return (
        <div>
            <Banner></Banner>
            <FeaturedTasks data={data}></FeaturedTasks>
            <TopFreelancers></TopFreelancers>
            <FreelancerEmployer></FreelancerEmployer>
        </div>
    );
};

export default Home;