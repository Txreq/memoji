import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import { useState } from "react";
import Select from "./fragments/Select";
import useEmoji from "../hooks/useEmoji";
import RoundButton from "./fragments/RoundButton";


const PContainer = (props) => {
    const [properties, setProperties] = useState({
        gender: "Male",
        person: { index: 0, name: "Alfred" },
        skintone: "White",
        mood: "Happy"
    });

    const { data, isPending } = useEmoji("/api/allProperties");

    if (!isPending && typeof (data.genders) !== "undefined") {
        const fileName = data.names[properties.gender.toLowerCase()][properties.person.index] + properties.skintone + properties.mood
        return (
            <Box
                height={"calc(100vh - 100px)"}
                display={"grid"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box>
                    <Stack spacing={"10px"}>
                        <Box height={256} width={256} borderWidth="1px" borderRadius="0.375em">
                            <Image
                                cursor={"pointer"}
                                onClick={() => setProperties({ ...properties, skintone: properties.skintone === "White" ? "Black" : "White" })}
                                src={"/api/" + properties.gender.toLowerCase() + "/" + fileName}
                                alt=""
                            />
                        </Box>
                        <Select name={"mood"} onChange={(event) => {
                            setProperties({ ...properties, mood: event.target.value })
                        }} options={data.moods} placeholder={""} />
                        <Flex width={"100%"} gap={"10px"} >
                            <Select
                                options={data.names[properties.gender.toLowerCase()]}
                                placeholder={""}
                                name={"person"}
                                onChange={(event) => {
                                    let value = event.target.value
                                    let index = data.names[properties.gender].indexOf(value)

                                    setProperties({ ...properties, person: { name: value, index: index } })
                                }}
                            />
                            <RoundButton
                                onClick={() => {
                                    setProperties({ ...properties, gender: properties.gender === "Male" ? "Female" : "Male" })
                                }}
                                style={{ borderRadius: "0.375em", width: "50px" }}
                                text={<i className={properties.gender === "Male" ? "fa-solid fa-venus" : "fa-solid fa-mars"}></i>}
                                colorMode={props.colorMode}
                            />
                        </Flex>
                    </Stack>
                </Box>
            </Box>

        );
    } else {
        return (
            <Box
                height={"calc(100vh - 100px)"}
                display={"grid"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                Loading ... ⏳
            </Box>
        )
    }
};

export default PContainer;
