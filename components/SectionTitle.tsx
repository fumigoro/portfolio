import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Color } from "../themes/Color"

type SectionTitleProps = {
    text: string
}
export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <>
            <Box sx={{ height: 50 }}></Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center", color: Color.primary }}>{props.text}</Typography>
        </>
    )
}