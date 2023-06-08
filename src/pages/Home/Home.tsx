import {
    About,
    Carousel,
    OurBest,
    Products,
    Services,
    Testimonials
} from "./sections";

export const Home = () => {
    return (
        <>
            <Carousel height={"60vh"} />
            <About />
            <Products />
            <OurBest />
            <Testimonials />
        </>
    );
};
