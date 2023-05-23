import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, ImgContainer } from "@src/components";
import { slidesData } from "@src/data";
import { HomeCarouselSlide } from "./CarouselSlides";
import { SlideCard } from "@src/components/Card/SlideCard";

interface CarouselProps {
    height: string;
}

export const Carousel = ( { height }: CarouselProps ) => {
    return (
        <Box
            css={{
                lineHeight: 0,
                fontSize: 0,
                padding: 0,
                maxHeight: `${height}`,
                width: "100%"
            }}
        >
            <Swiper
                autoplay={{
                    delay: 4000
                }}
                loop={true}
                enabled={false}
                modules={[ Autoplay ]}
            >
                {slidesData.map(
                    ( { title, subTitle, imgSrc, desc, link }, key ) => (
                        <SwiperSlide key={key}>
                            <HomeCarouselSlide>
                                <ImgContainer
                                    css={{
                                        height: `${height}`,
                                        width: "$full",
                                        maxWidth: "$laptopL"
                                    }}
                                    imgSrc={imgSrc}
                                    altText={"imgSrc"}
                                />
                                <SlideCard
                                    title={title}
                                    subTitle={subTitle}
                                    desc={desc}
                                    link={link}
                                />
                            </HomeCarouselSlide>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
            ;
        </Box>
    );
};
