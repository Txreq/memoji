const RoundButton = (props) => {
    const  style = {
        light: {
            bgColor: "#f0fff4",
            color: "#38a169"
        },
        dark: {
            bgColor: "#2B382F",
            color: "#CAF2DD"
        }
    }
    return (
        <div
            style={{
                backgroundColor: typeof(props.bg) == "undefined" ? style[props.colorMode].bgColor : props.bg,
                color: typeof(props.color) == "undefined" ? style[props.colorMode].color : props.color,
                ...props.style
            }}
            onClick={props.onClick}
            className={"dark-light-mode"}
        >
            {props.text}
        </div>
    );
};

export default RoundButton