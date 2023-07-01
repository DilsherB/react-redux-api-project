import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Grid,
  Card,
  CardContent,
  Typography,
  ImageListItem,
  ImageListItemBar,
  Box,
  Paper,
  styled,
} from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import TextField from "@mui/material/TextField";
// eslint-disable-next-line import/no-extraneous-dependencies
import Stack from "@mui/material/Stack";
// eslint-disable-next-line import/no-extraneous-dependencies
import Autocomplete from "@mui/material/Autocomplete";
// eslint-disable-next-line import/no-extraneous-dependencies
import IconButton from "@mui/material/IconButton";
// eslint-disable-next-line import/no-extraneous-dependencies
import InfoIcon from "@mui/icons-material/Info";
import WorldMap from "../assets/worldmap.jpeg";
import Europe from "../assets/europe.jpeg";
import SouthAmerica from "../assets/southamerica.jpeg";
import NorthAmerica from "../assets/northamerica.jpeg";
import Asia from "../assets/asia.jpeg";
import Africa from "../assets/africa.jpeg";
import Antarctic from "../assets/antarctic.jpeg";
import Oceania from "../assets/oceania.PNG";
import { fetchCountries } from "../redux/countriesSlice";

const regions = [
  { title: "Oceania", value: "oceania", src: Oceania },
  { title: "South America", value: "south america", src: SouthAmerica },
  { title: "North America", value: "north america", src: NorthAmerica },
  { title: "Africa", value: "africa", src: Africa },
  { title: "Asia", value: "asia", src: Asia },
  { title: "Antarctic", value: "antarctic", src: Antarctic },
  { title: "Europe", value: "europe", src: Europe },
];

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
    dispatch(fetchCountries(value));
    navigate(`/countries/${value}`);
  };

  const filteredRegions = regions.filter((region) => region.title.includes(selectedRegion));

  const PinkPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgb(236, 76, 138)",
  }));

  return (
    <>
      <Stack spacing={2} sx={{ width: 320 }}>
        <Autocomplete
          options={regions.map((option) => option.title)}
          onChange={(event, value) => {
            const selectedOption = regions.find(
              (option) => option.title === value
            );
            if (selectedOption) {
              handleRegionChange(selectedOption.value);
            }
          }}
          renderInput={(params) => (
            <TextField
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...params}
              label="Continent"
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
          )}
          value={selectedRegion}
          PaperComponent={PinkPaper}
        />
      </Stack>
      <ImageListItem>
        <img
          className="world-icon"
          src={WorldMap}
          alt="World Map"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <ImageListItemBar title="World Map Statistics" />
        <Box sx={{ display: "flex", justifyContent: "flex-end", py: "0.5%" }}>
          <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
            <InfoIcon />
          </IconButton>
        </Box>
      </ImageListItem>

      <Grid container>
        {filteredRegions.map((region) => (
          <Grid item xs={6} md={4} key={region.value}>
            <Card
              onClick={() => handleRegionChange(region.value)}
              sx={{
                cursor: "pointer",
                bgcolor: "rgb(236, 76, 138)",
                boxShadow: 12,
                borderRadius: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <CardContent>
                <img
                  className="map-icon"
                  src={region.src}
                  alt={region.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  color="primaryText"
                  sx={{ fontSize: "14px" }}
                >
                  {region.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Homepage;
