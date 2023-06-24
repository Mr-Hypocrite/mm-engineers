import { CSS } from "@src/styles";
import { Flex } from "../Flex";
import { ImgContainer } from "../ImgContainer";
import { Text } from "../Text";

export interface ProductCardProps {
    productImg: string;
    productTitle: string;
    productDescription: string;
}

const productCardCss: CSS = {
    flexDirection: "column"
};

export const ProductCard = ( {
    productImg,
    productTitle,
    productDescription
}: ProductCardProps ) => {
    return (
        <Flex css={productCardCss}>
            <ImgContainer
                imgSrc={productImg}
                altText={`${productTitle}_picture`}
                css={{ height: "10rem" }}
            />
            <Text typography={"dtHeading3"}>{productTitle}</Text>
            <Text typography={"dtPara3"}>{productDescription}</Text>
        </Flex>
    );
};
