import { Box, CSSReset, useColorMode } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import PreviewContainer from "./components/PreviewContainer";


function App(props) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <CSSReset />
            <Box height={"100vh"} padding={10}>
                <Navbar
                    colorMode={colorMode}
                    toggleColorModeFunction={toggleColorMode}
                />
                <PreviewContainer colorMode={colorMode} />
            </Box>
        </>
    );
}

export default App;
