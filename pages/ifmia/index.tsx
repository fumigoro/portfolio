import type { NextPage } from 'next'
import { Box } from '@mui/system';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Ifmia: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('https://youtu.be/ZldhSCVB2tI');
  }, [router]);

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
        <Box m={2}>
          <Button variant="contained">
            The explanation video is here.
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Ifmia;
