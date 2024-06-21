import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Chip, Grid } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { post } from "../projectPosts/trashBike"

const card = (
  <React.Fragment>
    <CardHeader
      title={
        <Typography variant="h5" component="div" sx={{ color: '#2C3E50' }}>
          {post.title}
        </Typography>
      }
      subheader={
        <Typography variant="body2" component="div" sx={{ color: '#7F8C8D' }}>
          {post.date}
        </Typography>
      }
      sx={{ backgroundColor: '#ECF0F1' }}
    />
      <CardContent>
        <ReactMarkdown>{post.content}</ReactMarkdown>
        {post.chips?.map((chip) => {
          return <Chip label={`${chip}`} color="primary" variant="outlined" sx={{marginRight: "10px", borderColor: "#311B92", color: "#311B92"}}/>
        })}
      </CardContent>
    <CardActions sx={{ justifyContent: 'flex-end' }}>
      <Button size="small" sx={{ color: '#3498DB' }}>Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function ProjectCard() {
  return (
    <Grid container justifyContent="center" sx={{ padding: 2 }}>
      <Grid item xs={12}>
          <Card variant="outlined">
            {card}
          </Card>
      </Grid>
    </Grid>
  );
}



