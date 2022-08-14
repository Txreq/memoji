import { Button } from "@chakra-ui/react";
const CustomButton = (props) => {
    return (
        <div>
            <Button
                onClick={props.onClick}
                rightIcon={typeof(props.icon) == "undefined" ? "" : <i className={props.icon}></i>}
                bg={typeof props.bg == "undefined" ? "#38A169" : props.bg}
                color={typeof props.bg == "undefined" ? "#fff" : props.color}
                variant={props.variant}
                _hover={{
                    backgroundColor:
                        typeof props.hbg == "undefined" ? "#48BB78" : props.hbg,
                }}
            >{props.text}
            </Button>
        </div>
    );
};

export default CustomButton;
