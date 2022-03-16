import { Box, Chip, Link, Paper, styled, Typography } from "@mui/material"
import { Color } from "../themes/Color";
import { TechStackChip } from "./TechStackChip";

type TextCardProps = {
    title: string,
    description: string,
    link: string,
    technology: string[]
}
export const TextCard = (props: TextCardProps) => {
    const CustomCard = styled(Box)(() => ({
        display: "inline-block",
        width: 360,
        height: 300,
        maxWidth: "95%",
        verticalAlign: "top",
    }));

    const CustomPaper = styled(Paper)(() => ({
        "&:hover": {
            color: Color.primary,
            borderColor: Color.primary,
        },
        background: Color.background,
        transition: "all 0.2s",
        height: "100%",
        padding: 15,
        textAlign: "left",
    }))
    return (
        <Link href={props.link}>
            <CustomCard m={1} >
                <CustomPaper variant="outlined">
                    <Box sx={{height: "80%"}}>
                        <Typography sx={{ fontWeight: "bold", fontSize: 25 }} gutterBottom>{props.title}</Typography>
                        <p>{props.description}</p>
                    </Box>

                    <Box sx={{height: "20%"}}>
                        {props.technology.map(item => (
                            <TechStackChip text={item} />
                        ))}
                    </Box>


                </CustomPaper>
            </CustomCard>
        </Link>
    )
}
