import { Flex, Section, TestimonialCard, Text } from "@src/components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const Testimonials = () => {
    return (
        <Section>
            <Text
                typography={{ "@initial": "mbHeading1", "@bp1": "dtHeading1" }}
            >
                Testimonials
            </Text>
            <Flex center css={{ my: "$5" }}>
                <Swiper
                    slidesPerView={3}
                    pagination={{
                        clickable: true
                    }}
                    modules={[ Pagination ]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {new Array( 4 ).fill( 0 ).map( ( _, i ) => (
                        <SwiperSlide key={i}>
                            <TestimonialCard
                                testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                            magni quasi, libero totam aliquid accusamus placeat reiciendis
                            natus est consectetur!"
                            />
                        </SwiperSlide>
                    ) )}
                </Swiper>
            </Flex>
        </Section>
    );
};
