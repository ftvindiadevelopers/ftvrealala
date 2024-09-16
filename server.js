const express = require("express");
const db = require("./config/database");
const enquiryRouter = require("./api/router");
const fs = require('fs');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(express.json());





app.get('/api/brands/:slug', (req, res) => {
  const filePath = path.join(__dirname, 'brands.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ status: false, error: 'Internal Server Error' });
      return;
    }

    const jsonData = JSON.parse(data);
    const slugShort = req.params.slug;

    let brandData = null;
    for (const brand of jsonData.brands) {
      if (brand.slug_short === slugShort) {
        brandData = brand;
        break;
      }
      for (const subBrand of brand.sub) {
        if (subBrand.slug_short === slugShort) {
          brandData = subBrand;
          break;
        }
      }
      if (brandData) {
        break;
      }
    }

    if (brandData) {
      res.json({ status: true, data: brandData });
    } else {
      res.status(404).json({ status: false, error: 'Brand not found' });
    }
  });
});


app.use("/api/enquiry",enquiryRouter);


PORT = process.env.PORT || 8085;

app.listen(PORT, () => {
  console.log(`server is listning at  post ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome in node project");
});
