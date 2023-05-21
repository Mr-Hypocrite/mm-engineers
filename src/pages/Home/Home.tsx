import { Carousel, Products, Services } from "./sections";

export const Home = () => {
    const carouselImages: string[] = [
        "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    return (
        <>
            <Carousel imgSrc={carouselImages} height={"60vh"} />
            <Services />
            <Products />
        </>
    );
};
