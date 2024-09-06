import  { useState } from "react";
import { Box, Card, CardContent, CardMedia,  Switch, Typography, useColorScheme } from "@mui/material"
import { useTheme } from "@emotion/react";
import ModeSelect from "./components/ModeSelect/ModeSelect";

export default function App() {
  const { mode, setMode } = useColorScheme();
  const [toggleDarkMode, setToggleDarkMode] = useState(true); 
  const theme = useTheme();

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h4" sx={{ mb: 1.5  }} color={theme.palette.text.primary}>
    Toggle Dark mode
        </Typography>
    <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
    <Card sx={{ width: '30%', borderRadius: 3, padding: 1 , backgroundColor: theme.palette.background.paper}}>
      <CardContent>
        <CardMedia sx={{ height: 180, borderRadius: 3 }} image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg" title="semaphore" />
        <Typography variant="h4" component="div" sx={{ marginTop: 3, color:theme.palette.text.primary }}>
          Programming Blogs
        </Typography>
        <Typography sx={{ mb: 1.5  }} color={theme.palette.text.primary}>
          by Semaphore
        </Typography>
        <Typography variant="body1" color={theme.palette.text.primary}>
          Checkout the latest blogs on Semaphore. Semaphore provides you the best CI/CD solution
          for high-performance engineering teams.
        </Typography>
      </CardContent>
    </Card>
  </Box>
    <ModeSelect/>

    </>
    
  )
}