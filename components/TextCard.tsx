import { Box, Chip, Link, Paper, styled, Typography } from "@mui/material";
import { Color } from "../themes/Color";
import { TechStackChip } from "./TechStackChip";

type WorksContent = {
  title: string;
  description: string;
  link: string;
  image: string;
  technology: string[];
};
type TextCardProps = {
  src: WorksContent;
};
export const TextCard = (props: TextCardProps) => {
  const CustomCard = styled(Box)(() => ({
    display: "inline-block",
    width: 360,
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
    height: 200,
  }));
  return (
    <Link href={props.src.link}>
      <CustomCard m={1}>
        <CustomPaper variant="outlined">
          <Box
            component="img"
            src={`images/${props.src.image}`}
            height="100%"
            sx={{ maxWidth: "100%" }}
          />
        </CustomPaper>
        <Box textAlign={"left"}>
          <Box sx={{ height: "80%", color: "black" }}>
            <Typography sx={{ fontWeight: 600, fontSize: 20 }} gutterBottom>
              {props.src.title}
            </Typography>
            <p>{props.src.description}</p>
          </Box>

          <Box sx={{ height: "20%", color: "black" }}>
            {props.src.technology.map((item) => (
              <TechStackChip text={item} key={item} />
            ))}
          </Box>
        </Box>
      </CustomCard>
    </Link>
  );
};
