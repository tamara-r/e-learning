import React from 'react';
import { 
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const CourseOverview = ({ lessons }) => {

  const lesson = lessons.map((lesson, index) => {
    return (
      <ListItem disablePadding key={`${index}-${lesson}`}>
        <ListItemIcon>
          <SchoolIcon fontSize='medium'/>
        </ListItemIcon>
        <ListItemText primary={lesson} />
      </ListItem>
    )
  })

  return (
    <List
      sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader 
          component="div" 
          id="nested-list-subheader"
          sx={{fontSize: '18px', fontWeight: 'bold', padding: 0}}>
        Course Overview
        </ListSubheader>
      }>
        { lesson }
      </List>
    
  )
}

export default CourseOverview;
