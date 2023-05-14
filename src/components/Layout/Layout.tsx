import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { CSS } from "@stitches/react/types/css-util";
import { Box } from "../Box";

export const Layout = () => {
    const layoutCss: CSS = {
        maxWidth: "1600px",
        mx: "auto"
    };

    return (
        <Box css={layoutCss}>
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    );
};
