import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loading({ isLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100); // complete instantly when done
      return;
    }

    setProgress(0); // start from zero
    const timer = setInterval(() => {
      setProgress((old) => Math.min(old + Math.random() * 20, 95));
    }, 200);

    return () => clearInterval(timer);
  }, [isLoading]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: '3px',
          '& .MuiLinearProgress-bar': { backgroundColor: '#0062ff' },
          backgroundColor: '#5e9cff',
        }}
      />
    </Box>
  );
}