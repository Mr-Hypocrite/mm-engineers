import { Box, Flex, Loader2 } from "@src/components";

function App() {
    return (
        <Flex direction="column" align="center" justify="center" size={"full"}>
            <Box css={{ maxWidth: "300px", p: "$2" }}>
                <img
                    src="/mmEngineersLogo.png"
                    className="logo"
                    alt="Vite logo"
                    width="100%"
                />
            </Box>
            <h1>Website under construction</h1>
            <Box css={{ size: "200px", maxWidth: "320px" }}>
                <Loader2 />
            </Box>
        </Flex>
    );
}

export default App;
