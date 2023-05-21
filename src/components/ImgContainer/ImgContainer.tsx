import { VariantProps } from "@stitches/react";
import { Box } from "../Box";
import { CSS } from "@src/styles";

export interface ImgContainerProps extends VariantProps<typeof Box> {
    imgSrc: string;
    altText: string;
    css?: CSS;
    objectFit?: string;
}

export const ImgContainer = ( {
    imgSrc,
    altText,
    css,
    objectFit,
    ...props
}: ImgContainerProps ) => {
    return (
        <Box {...props} css={css}>
            <img
                src={imgSrc}
                alt={altText}
                width={"100%"}
                height={"100%"}
                style={{
                    objectFit: `${objectFit ? objectFit : "cover"}` as any
                }}
            />
        </Box>
    );
};
