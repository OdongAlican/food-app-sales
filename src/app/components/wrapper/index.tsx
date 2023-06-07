import { Box } from "@mui/material";
import { ReactNode } from "react";

interface IWrapper {
    children: ReactNode
}

const Wrapper = ({ children }: IWrapper) => {
    return (
        <Box
            padding={4}
            margin={3}
        >{children}</Box>
    )
}

export default Wrapper;