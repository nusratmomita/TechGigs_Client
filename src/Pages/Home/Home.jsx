import Banner from '../../Components/Banner/Banner';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import TopFreelancers from '../../Components/TopFreelancers/TopFreelancers';
import FreelancerEmployer from '../../Components/FreelancerEmployer/FreelancerEmployer';
import FeaturedTasks from '../../Components/FeaturedTasks/FeaturedTasks';
import { useLoaderData } from 'react-router';
import { createContext, useState } from 'react';
import './Home.css'
import SuccessInNumbers from '../../Components/SuccessInNumbers/SuccessInNumbers';

export const ThemeContext = createContext('null')
const Home = () => {

    const data = useLoaderData();
    // console.log(data)

    const [theme , setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((cur) => cur==="light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme , toggleTheme}}>
            <div id={theme}>
                <Header toggleTheme={toggleTheme} theme={theme}></Header>
                <Banner></Banner>
                <FeaturedTasks data={data}></FeaturedTasks>
                <TopFreelancers></TopFreelancers>
                <FreelancerEmployer></FreelancerEmployer>
                <SuccessInNumbers></SuccessInNumbers>
                <Footer></Footer>
            </div>
        </ThemeContext.Provider>
    );
};

export default Home;