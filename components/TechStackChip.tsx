import { Chip } from "@mui/material"

type TechStackChipProps = {
    text: string
}
export const TechStackChip = (props: TechStackChipProps) => {
    return (
        <>
            <Chip label={props.text} size="small" variant="outlined" sx={{ marginRight: 1 }}/>
        </>
    )
}
