import { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

const Form = ({ setTarjetas }) => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [categoria, setCategoria] = useState("");
  const [remitente, setRemitente] = useState("");

  const handleMensaje = (e) => {
    e.preventDefault();
    setTarjetas((tarjetas) => [
      {
        id: new Date().getTime(),
        nombre: nombre,
        mensaje: mensaje,
        categoria: categoria,
        remitente: "Con cariño de: " + remitente,
      },
      ...tarjetas,
    ]);
    setNombre("");
    setMensaje("");
    setCategoria("");
    setRemitente("");
  };
  return (
    <Box>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
        variant="h3"
        color="initial"
      >
        Crea una postal
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold" }}
        variant="h5"
        color="initial"
      >
        Rellena todos los campos para crear una bonita postal dedicada
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "16px", my: 4 }}
        onSubmit={(e) => handleMensaje(e)}
      >
        <Box sx={{ display: "flex", gap: "16px" }}>
          <TextField
            fullWidth
            id=""
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categoria}
              label="Categoria"
              onChange={(e) => setCategoria(e.target.value)}
            >
              <MenuItem value="">
                <em>Selecciona una categoria</em>
              </MenuItem>
              <MenuItem value={"nature"}>Naturaleza</MenuItem>
              <MenuItem value={"city"}>Ciudades</MenuItem>
              <MenuItem value={"technology"}>Tecnologia</MenuItem>
              <MenuItem value={"food"}>Comida</MenuItem>
              <MenuItem value={"still_life"}>Life-Style</MenuItem>
              <MenuItem value={"abstract"}>Abstracto</MenuItem>
              <MenuItem value={"wildlife"}>Wildlife</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <TextField
          fullWidth
            id=""
            label="Mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          <TextField
          fullWidth
            id=""
            label="Remitente"
            value={remitente}
            onChange={(e) => setRemitente(e.target.value)}
          />
        </Box>
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          //   onClick={handleMensaje}
        >
          Crear tarjeta
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
