import { Flex } from "@chakra-ui/react"

const Link = (props) => {
    return(
        <div className="link">
            <a href={props.href}>
                <Flex gap={"7px"} alignItems={"center"} justifyContent="center">
                    <i className={props.icon}></i>
                    <p>{props.text}</p>
                </Flex>
            </a>
        </div>
    )
}

export default Link