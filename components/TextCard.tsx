import { Box, Paper, styled } from "@mui/material"
import { Color } from "../themes/theme";

type TextCardProps = {
    title: string,
    description: string
}
export const TextCard = (props: TextCardProps) => {
    const CustomCard = styled(Box)(() => ({
        display: "inline-block",
        width: 360,
        maxWidth: "100%",
    }));

    const CustomPaper = styled(Paper)(() => ({
        "&:hover": {
            color: Color.primary,
            borderColor: Color.primary,
        },
        background:Color.background,
        transition: "all 0.2s",
    }))
    return (
        <>
            <CustomCard m={1}>
                <CustomPaper variant="outlined">
                    <Box m={2}>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </Box>
                </CustomPaper>
            </CustomCard>
        </>
    )
}
