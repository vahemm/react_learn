const express = require("express");
const app = express();
app.use(express.json());
const url = require("url");

const port = 8000;

const users = [
  {
    id: 1,
    avatar: "https://cdn.shopify.com/s/files/1/0971/5004/products/FW19_F19S078PL_DIMICH_WINE_0053_1200x1766_a9d1e22a-8cd2-4e40-9a9a-5ed4f6b8e725_800x_crop_top.jpg?v=1576565834",
    followed: true,
    fullName: "Dimich",
    location: {cityName: "Minsk", country: "Belarus"},
    status: "I am boss"
  },
  {
    id: 2,
    avatar: "https://mexedi.me/uploads/Vahe_VAVAN_Vahe_Soghomonyan_-_Popurri_1.png",
    followed: false,
    fullName: "Vahe",
    location: {cityName: "Yerevan", country: "Armenia"},
    status: "I am boss"
  },
  {
    id: 3,
    avatar: "https://www.milbank.com/images/content/1/1/v3/112156/Goldfinch-John-LND-web.jpg",
    followed: true,
    fullName: "Jhon",
    location: {cityName: "London", country: "United Kingdom"},
    status: "I am boss"
  }
];

app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  console.log(newUser);
  res.json(users);
});

app.get("/users", (req, res) => {
  console.log(req.query);

  res.setHeader('Access-Control-Allow-Origin', '*');
    let chack;
    

    if (req.query.isaLive === "true") {
      chack = true;
    } else if (req.query.isaLive === "false") {
      chack = false;
    } else { res.json(users)}

    let filterUser = users.filter((item) => item.isaLive === chack)
    res.json(filterUser);
  


});

app.get("/users/:id", (req, res) => {
  let index = Number(req.params.id);
  res.json(users[index]);
});

app.put("/users/:id", (req, res) => {
  let index = Number(req.params.id);
  console.log(req.params);
  users[index] = req.body;
  console.log(users);
  res.json(users);
});

app.delete("/users/:id", (req, res) => {
  let index = Number(req.params.id);
  users.splice(index, 1);
  res.json(users);
});
app.listen(port, function () {
  console.log(`Server run on port ${port}`);
});
