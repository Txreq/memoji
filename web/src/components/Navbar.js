import Logo from "./fragments/Logo";
import LinkItem from "./fragments/Link";
import Button from "./fragments/Button";
import RoundButton from "./fragments/RoundButton";

import { Link, Flex } from "@chakra-ui/react";

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <Flex
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Logo />
                <Flex alignItems={"center"} gap={5}>
                    <Flex gap={"30px"}>
                        <LinkItem
                            href={""}
                            icon={"fa-brands fa-twitter"}
                            text="Twitter"
                        />
                        <LinkItem
                            href={"#"}
                            icon={"fa-solid fa-message"}
                            text="Contact"
                        />
                    </Flex>
                    <RoundButton
                        text={<i className={ props.colorMode === "light" ? "fa-solid fa-sun": "fa-solid fa-moon"}></i>}
                        colorMode={props.colorMode}
                        onClick={props.toggleColorModeFunction}
                    />
                    <Link
                        style={{ textDecoration: "none" }}
                        href="https://github.com/Txreq/memoji"
                        target={"_blank"}
                    >
                        <Button text="Github" icon={"fa-brands fa-github"} />
                    </Link>
                </Flex>
            </Flex>
        </nav>
    );
};

export default Navbar;
