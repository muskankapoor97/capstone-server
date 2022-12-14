const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

// basic home route
const tenantsRoutes = require("./routes/tenantsRoute");
const laundryRoutes = require("./routes/laundryRoute");

app.use("/tenants", tenantsRoutes);
app.use("/laundry", laundryRoutes);
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});