import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
//import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
import moviesData from "../../common/moviesData";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  },
  gridList: {
    width: '100%',
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.paper,
    width: '76%',
    overflow: 'visible',
  },
  gridList2: {
    width: 900,
    overflow: 'visible',
    height: 'auto',
  },
  icon2: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
});


function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div>
        <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={5}>
        {moviesData.slice(0,6).map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.poster_url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
        
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    <div className={classes.root2 , "ml-12 mt-12 "}>
    <GridList cellHeight={350} cols={3} className={classes.gridList2}>
      
      {moviesData.map(tile => (
        <GridListTile key={tile.img}>
          <img className='hover:cursor-pointer' src={tile.poster_url} alt={tile.poster_url} />
          <GridListTileBar
            className='hover:cursor-pointer'
            title={tile.title}
            subtitle={<span>Release Date: {tile.release_date}</span>}
          />
          
        </GridListTile>
      ))}
    </GridList>
  </div>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);