import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, ImgContainer } from "@src/components";

interface CarouselProps {
    height: string;
    imgSrc: string[];
}

export const Carousel = ( { height, imgSrc }: CarouselProps ) => {
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
                modules={[ Autoplay ]}
            >
                {imgSrc.map( ( src, key ) => (
                    <SwiperSlide key={key}>
                        <ImgContainer
                            // fullHeight
                            css={{ height: `${height}` }}
                            imgSrc={src}
                            altText={"imgSrc"}
                        />
                    </SwiperSlide>
                ) )}
            </Swiper>
            ;
        </Box>
    );
};
