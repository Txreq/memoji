import { Select } from "@chakra-ui/react";

const CustomSelect = (props) => {
    return (
        <Select
            width={props.width}
            placeholder={
                typeof props.options == "undefined"
                    ? "No options"
                    : props.placeholder
            }
            borderColor={"#9AE6B4"}
            focusBorderColor={"#38A169"}
            onChange={props.onChange}
            name={props.name}
        >
            {typeof props.options === "undefined"
                ? ""
                : props.options.map((option, index) => {
                    return <option key={index}>{option}</option>;
                })}
        </Select>
    );
};

export default CustomSelect;
