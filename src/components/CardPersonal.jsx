import {
  Box,
  CardActionArea,
  CardActions,
  Button,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import { useState, useEffect } from "react";

const CardPersonal = ({ tarjeta }) => {
  const { nombre, mensaje, categoria,remitente } = tarjeta;
  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/randomimage?category=" + categoria, {
      method: "GET",
      headers: {
        "X-Api-Key": "gfo8SOx6lbhDVcEjbjHDww==f0lCZcYdJiHESimX",
        Accept: "image/jpg",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        setRespuesta(URL.createObjectURL(blob));
      })

      .catch((error) => console.error(error));
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" src={respuesta} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {mensaje}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{textAlign:'end', p:2}}>
        <Typography  variant="body2" color="primary">
          {remitente}
        </Typography>
      </Box>
    </Card>
  );
};

export default CardPersonal;
