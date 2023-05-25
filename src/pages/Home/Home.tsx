import { About, Carousel, Products, Services } from "./sections";

export const Home = () => {
    return (
        <>
            <Carousel height={"60vh"} />
            <About />
            <Services />
            <Products />
        </>
    );
};
