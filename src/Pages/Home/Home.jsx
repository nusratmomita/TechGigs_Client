import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TopFreelancers from '../../Components/TopFreelancers/TopFreelancers';
import FreelancerEmployer from '../../Components/FreelancerEmployer/FreelancerEmployer';
import FeaturedTasks from '../../Components/FeaturedTasks/FeaturedTasks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedTasks></FeaturedTasks>
            <TopFreelancers></TopFreelancers>
            <FreelancerEmployer></FreelancerEmployer>
        </div>
    );
};

export default Home;