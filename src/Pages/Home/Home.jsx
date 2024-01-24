import Banner from "./Banner";
import Categories from "./Categories";
import ContactUs from "./ContactUs";
import Counter from "./Counter";
import Details from "./Details";
import Features from "./Features";
import Fqa from "./Fqa";
import More from "./More";
import Reviews from "./Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Counter></Counter>
            <Categories></Categories>
            <Details></Details>
            <Fqa></Fqa>
            <Reviews></Reviews>
            <More></More>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;