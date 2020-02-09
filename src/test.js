import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image from './imagefiles/im1.jpg';
import image2 from './imagefiles/im2.jpg';
import image3 from './imagefiles/im3.png';
import image4 from './imagefiles/im4.jpg';
import image5 from './imagefiles/im5.jpg';
import image6 from './imagefiles/im6.jpg';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

//import tileData from './tileData'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const tileData = [
    {
      img: image,
      title: 'Pizza Hut',
      HappinessMeter: '3/5',
    },
    {
        img: image2,
        title: 'Dominos',
        HappinessMeter: '3/5',
      },
    {
        img: image3,
        title: 'Nandos',
        HappinessMeter: '3/5',
    },         
    {
        img: image4,
        title: 'Motus',
        HappinessMeter: '3/5',
    },
    {
        img: image5,
        title: 'KFC',
        HappinessMeter: '3/5',
    },
    {
        img: image6,
        title: 'GBK',
        HappinessMeter: '3/5',
    },
  ];
 
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"><font size = "5" >MOTUS</font></ListSubheader>
          <ListSubheader component="div"><font size = "3" >Your Happiness is our priority!</font></ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
               //subtitle={<span>Happiness Meter: {tile.HappinessMeter}</span>}
                subtitle={SimpleRating()}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

function SimpleRating() {
    const [value, setValue] = React.useState(3);
  
    return (
      <div>
        <Box component="fieldset" mb={1} borderColor="transparent">
          <Typography component="legend"></Typography>
          <Rating
            value={2}
            readOnly
            icon={<SentimentVerySatisfiedIcon fontSize="inherit"/>} 
          />
        </Box>  
      </div>
    );
  }



  