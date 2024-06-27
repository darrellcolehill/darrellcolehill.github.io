import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Grid } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const markdown = `
**Overview:** This project involves transforming a bike I found in the garbage into an interactive game controller by integrating various sensors with an Arduino microcontroller.

**Key Features:**
- **RPM Detection**: Measures the bike's speed to control the game's velocity parameters.
- **Handle Bar Position Detection**: Detects changes in the handlebar position and maps it to left/right player movement
- **Minimally Invasive**: Can use bike normally should I decide that I want to actually touch grass`

const card = (
  <React.Fragment>
    <CardHeader
      title={
        <Typography variant="h5" component="div" sx={{ color: '#2C3E50' }}>
          Smart Trash Bike
        </Typography>
      }
      subheader={
        <Typography variant="body2" component="div" sx={{ color: '#7F8C8D' }}>
          June 21, 2024
        </Typography>
      }
      sx={{ backgroundColor: '#ECF0F1' }}
    />
      <CardContent>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </CardContent>
    <CardActions sx={{ justifyContent: 'flex-end' }}>
      <Button size="small" sx={{ color: '#3498DB' }}>Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Grid container justifyContent="center" sx={{ padding: 2 }}>
      <Grid item xs={12}>
        {/* <Box> */}
          <Card variant="outlined">
            {card}
          </Card>
        {/* </Box> */}
      </Grid>
    </Grid>
  );
}



