import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  
  const backgroundAnimation = useSpring({
    height: `${count * 2}%`,
    config: { tension: 120, friction: 14 }
  });

  useEffect(() => {
    localStorage.setItem('counter', count.toString());
  }, [count]);

  return (
    <Box sx={{ position: 'relative', height: '100vh' }}>
      <animated.div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: '#2196f3',
          ...backgroundAnimation
        }}
      />
      
      <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', pt: 4 }}>
        <Typography variant="h2">{count}</Typography>
        <Button variant="contained" onClick={() => setCount(c => c + 1)}>
          Increment
        </Button>
        <Button variant="contained" onClick={() => setCount(c => c - 1)}>
          Decrement
        </Button>
        <Button variant="contained" onClick={() => setCount(0)}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};