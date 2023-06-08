import { Flex, Grid, Section, Text } from "@src/components";
import { products } from "@src/data";
import { CSS } from "@src/styles";

const productMiniCardCss: CSS = {
    cursor: "pointer",
    fontFamily: "$juliusSansOne",
    width: "calc($full - $6)",
    p: "$1 $3",
    transition: "all .3s ease-in-out",
    "@bp1": {
        width: "$full"
    },
    "&:hover": {
        backgroundColor: "$secondaryColor",
        color: "$textLight"
    }
};

export const ProductMiniCard = ( { title }: { title: string } ) => {
    return (
        <Flex css={productMiniCardCss}>
            <Text typography={"dtHeading3"}>{title}</Text>
        </Flex>
    );
};

export const Products = () => {
    return (
        <Section>
            <Text typography={"dtHeading1"}>
                <Text css={{ fontWeight: "800" }}>Our</Text> Products
            </Text>
            <Grid
                columns={"products"}
                gap={3}
                css={{ my: "$5", width: "$full" }}
            >
                {products.map( ( { productTitle }, key ) => (
                    <ProductMiniCard title={productTitle} key={key} />
                ) )}
            </Grid>
        </Section>
    );
};
