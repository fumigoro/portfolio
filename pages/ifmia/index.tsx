import type { NextPage } from 'next'
import { Box } from '@mui/system';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Typography } from '@mui/material';

const Ifmia: NextPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh', // ヘッダー52px+上下マージン32px*2で116px
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <InfoOutlinedIcon sx={{ height: 50, width: 50 }} />
        <Typography mt={1} variant="h6">
          The explanation video is getting ready.
        </Typography>
      </Box>
    </Box>
  );
}

export default Ifmia;
