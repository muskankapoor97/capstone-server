const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050;

// basic home route
const tenantsRoutes = require("./routes/tenantsRoute");
const laundryRoutes = require("./routes/laundryRoute");

app.use(express.json());
app.use(cors());
app.use("/tenants", tenantsRoutes);
app.use("/laundry", laundryRoutes);
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});