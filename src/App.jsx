import Form from "./components/Form";
import CardPersonal from "./components/CardPersonal";
import { Box, Paper } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [tarjetas, setTarjetas] = useState([]);
  return (
    <Paper sx={{ maxWidth: "1200px", margin: "40px auto", p: 4 }}>
      <Form tarjetas={tarjetas} setTarjetas={setTarjetas} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          placeItems: "center",
          mt: 10,
          gap: 2,
        }}
      >
        {tarjetas.map((tarjeta) => (
          <CardPersonal key={tarjeta.id} tarjeta={tarjeta} />
        ))}
      </Box>
    </Paper>
  );
};

export default App;
