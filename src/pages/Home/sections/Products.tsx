import { Flex, Grid, Section, Text } from "@src/components";
import { products } from "@src/data";
import { CSS } from "@src/styles";

const productMiniCardCss: CSS = {
    fontFamily: "$juliusSansOne"
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
            <Grid columns={"products"} css={{ my: "$5", gridRowGap: "$3" }}>
                {products.map( ( { productTitle }, key ) => (
                    <ProductMiniCard title={productTitle} key={key} />
                ) )}
            </Grid>
        </Section>
    );
};
