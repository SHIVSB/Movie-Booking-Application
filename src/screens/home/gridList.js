import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Modal, Button, Carousel } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MenuItem from "@mui/material/MenuItem";
import DatePicker from "@mui/lab/DatePicker";
import genre from "../../common/genre";
import artists from "../../common/artists";
import { makeStyles } from "@material-ui/core/styles";
import Details from "./details/details";

//import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
import moviesData from "../../common/moviesData";
import { ImageListItem } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  gridList: {
    width: "100%",
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  root2: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.paper,
    width: "76%",
    overflow: "visible",
  },
  gridList2: {
    width: 900,
    overflow: "visible",
    height: "auto",
  },
  icon2: {
    color: "rgba(255, 255, 255, 0.54)",
  },
});

const useStyles = makeStyles((theme) => ({
  root3: {
    color: theme.palette.primary.light,
  },
}));

function SingleLineGridList(props) {
  const { classes } = props;
  const [name, setName] = React.useState();

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const classes2 = useStyles();

  const [value, setValue] = React.useState("");

  const handleChange2 = (newValue) => {
    setValue(newValue);
  };
  const [value2, setValue2] = React.useState("");

  const handleChange3 = (newValue) => {
    setValue2(newValue);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const releaseDate = (releaseDate) => {
    let release_date = new Date(releaseDate);
    let date = release_date.toDateString();
    return "Release Date: " + date;
  };

  return (
    <div>
      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList} cols={5}>
          {moviesData.slice(0, 6).map((tile) => (
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

      <div className="flex flex-col-2">
        <div className={(classes.root2, "ml-12 mt-12 ")}>
          <GridList cellHeight={350} cols={3} className={classes.gridList2}>
            {moviesData.map((tile) => (
              <ImageListItem key={tile.img}>
                <Link to={`/movie/${tile.id}`}>
                  <img
                    className="hover:cursor-pointer w-full"
                    src={tile.poster_url}
                    alt={tile.poster_url}
                  />

                  <GridListTileBar
                    className="hover:cursor-pointer"
                    title={tile.title}
                    subtitle={<span>{releaseDate(tile.release_date)}</span>}
                  ></GridListTileBar>
                </Link>
              </ImageListItem>
            ))}
          </GridList>
        </div>

        <div className="border-separate border-t-2 border-2 h-1/4 p-4 mt-24 ml-24 ">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <h3 className={classes2.root3}>FIND MOVIES BY</h3>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-simple">Movie Name</InputLabel>
              <Input
                id="component-simple"
                value={name}
                onChange={handleChange}
              />
            </FormControl>
            <div>
              <TextField
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                select
                label="Genres"
                style={{ width: 192 }}
                variant="standard"
              >
                {genre.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div id="demo-multiple-checkbox-label">
              <TextField
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                select
                multiple
                label="Artists"
                style={{ width: 192 }}
                variant="standard"
              >
                {artists.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.id}
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                  >
                    {/* <Checkbox /> */}
                    {option.first_name + option.last_name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Release Date Start"
                  labelId="demo-multiple-checkbox-label"
                  multiple
                  inputFormat="dd/MM/yyyy"
                  value={value}
                  onChange={handleChange2}
                  textFieldStyle={{ width: 100 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  id="demo-multiple-checkbox-label"
                  label="Release Date End"
                  inputFormat="dd/MM/yyyy"
                  value={value2}
                  onChange={handleChange3}
                  format="dd/MM/yyyy"
                  textFieldStyle={{ width: 100 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>

            <button className="bg-blue-500 py-2 px-28 rounded-lg">Apply</button>
          </Box>
        </div>
      </div>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
