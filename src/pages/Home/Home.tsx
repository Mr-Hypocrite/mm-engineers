import { About, Carousel, OurBest, Products, Services } from "./sections";

export const Home = () => {
    return (
        <>
            <Carousel height={"60vh"} />
            <About />
            {/* <Services /> */}
            <Products />
            <OurBest />
        </>
    );
};
