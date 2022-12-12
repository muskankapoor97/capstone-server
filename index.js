const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

// basic home route
const tenantsRoutes = require("./routes/tenantsRoute");

app.use("/tenants", tenantsRoutes);
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});