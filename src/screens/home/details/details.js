import React from "react";
import moviesData from "../../../common/moviesData";
import { useParams } from "react-router-dom";
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
import { Modal, Button, Carousel, Navbar } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MenuItem from "@mui/material/MenuItem";
import DatePicker from "@mui/lab/DatePicker";
import { makeStyles } from "@material-ui/core/styles";
import { ImageList } from "@material-ui/core";

//import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
import { ImageListItem } from "@material-ui/core";
import Header from "../../../common/header/header";
function Details() {
  const { id } = useParams();
  const releaseDate = (releaseDate) => {
    let release_date = new Date(releaseDate);
    let date = release_date.toDateString();
    return "Release Date: " + date;
  };
  return (
    <div>
      <Header />
      <a className="hover:no-underline no-underline p-4" href="/">
        <span className="">Back to home</span>
      </a>
      {moviesData.map((tile) =>
        tile.id == id ? (
          <div class="container pt-4">
            <div class="row">
              <div class="col-sm">
                <ImageList
                  sx={{ height: 2000 }}
                  variant=""
                  cols={4}
                  rowHeight={300}
                >
                  <ImageListItem key={tile.img}>
                    <img
                      className=""
                      src={tile.poster_url}
                      alt={tile.poster_url}
                    />
                  </ImageListItem>
                </ImageList>
              </div>
              <div class="col-lg">
                <div className="font-bold float-right">
                  <h1>
                    <span className="font-light">{tile.title}</span>
                  </h1>
                  <h3>
                    Genre : <span className="font-light">{tile.genres}</span>
                  </h3>
                  <h3>
                    duration :{" "}
                    <span className="font-light">{tile.duration}</span>
                  </h3>
                  <h3>
                    Release Date :{" "}
                    <span className="font-light">
                      {releaseDate(tile.release_date)}
                    </span>
                  </h3>
                  <h3>
                    Rating :{" "}
                    <span className="font-light">{tile.critics_rating}</span>
                  </h3>
                  <h3>
                    Plot : <span className="font-light">{tile.storyline}</span>
                  </h3>
                  <h2 className="py-4">Trailer:</h2>
                </div>
                <video width="1400" height="500" controls>
                  <source src={tile.trailer_url} type="video/mp4" />
                </video>
              </div>
              <div class="col-sm">
                <div className="float-right">
                  <div>
                    <h2>Rate this movie : </h2>
                    <h2>Artists:</h2>
                  </div>
                  <div>
                    <GridList cellHeight={300} cols={3}>
                      {tile.artists.map((artist) => (
                        <ImageListItem key={artist.id}>
                          <img
                            className="h-36"
                            src={artist.profile_url}
                            alt={"Image Url changed"}
                          />
                          <GridListTileBar
                            className="hover:cursor-pointer"
                            title={artist.first_name + artist.last_name}
                          ></GridListTileBar>
                        </ImageListItem>
                      ))}
                    </GridList>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default Details;
