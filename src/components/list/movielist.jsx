import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {withRouter} from 'react-router-dom' 



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

 function MovieGridList({List,history}) {
  const classes = useStyles();
  const handleClick=(item)=>{
    history.push(`/movie/${item.id}`)
    
}
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}  cols={2.5}>
        {List?List.map((item) => (
          <GridListTile style={{width:"10%"}} key={item.id}>
            <img  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} onClick={()=>handleClick(item)} alt={item.title} />
            <GridListTileBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            
            />
          </GridListTile>
        )):null}
      </GridList> 
    </div>
  );
}
export default withRouter(MovieGridList)