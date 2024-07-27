import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData } from "../../store/swapi/swapiThunks";
import { ClearData } from "../../store/swapi/swapiActions";
import {
  Box,
  Button,
  Container,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

export function SwapiList() {
  const [path, setPath] = useState();
  const dispatch = useDispatch();
  const BASE_URL = "https://swapi.dev/api/";
  const { data, loading } = useSelector((state) => state.swapi);
  const primary = blue[100];

  const handlePathChange = (e) => {
    setPath(e.target.value);
  };

  const handleFetchData = () => {
    const url = `${BASE_URL}${path}`;
    dispatch(fetchSwapiData(url));
    setPath("");
  };

  const handleClearData = () => {
    dispatch(ClearData());
    setPath("");
  };
  const renderData = () => {
    if (data.length === 0) {
      return (
        <Box sx={{ marginTop: "30px", marginBottom: "30px" }}>
          <Typography variant="p">Немає даних</Typography>
        </Box>
      );
    } else {
      return (
        <List>
          {data.map((item, index) => (
            <List
              key={index}
              sx={{
                marginTop: "30px",
                border: "1px solid black",
                borderRadius: "20px",
                padding: "25px",
                bgcolor: primary,
              }}
            >
              <Typography variant="h3">
                {item.name || item.title || `Item ${index + 1}`}
              </Typography>
              <List>
                {Object.entries(item).map(([key, value]) => (
                  <Box key={key}>
                    {key}: {Array.isArray(value) ? value.join(", ") : value}
                  </Box>
                ))}
              </List>
            </List>
          ))}
        </List>
      );
    }
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        <Box sx={{ bgcolor: "warning.main", padding: "8px", height: "40px" }}>
          <Typography variant="p">https://swapi.dev/api/</Typography>
        </Box>
        <TextField
          variant="outlined"
          size="small"
          type="text"
          placeholder="people/1"
          value={path}
          onChange={handlePathChange}
          sx={{ flexGrow: 1, borderRadius: 0 }}
        />
        <Button
          variant="contained"
          color="warning"
          onClick={handleFetchData}
          sx={{ borderRadius: "0px", height: "40px" }}
        >
          Отримати інформацію
        </Button>
      </Box>
      {loading && <Typography variant="p">Завантаження...</Typography>}
      {renderData()}
      <Button variant="contained" color="warning" onClick={handleClearData}>
        Очистити
      </Button>
    </Container>
  );
}
