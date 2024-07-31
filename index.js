const express = require('express');
const app = express();

app.get('/', (req, res) => { // new
  res.send('Homepage! Hello world.');
});

app.get('/about', (req, res) => { // new
  res.send('l love my life');
});

app.get('/contact', (req, res) => { // new
  res.send('Contact me at 0704096206');
});

app.get("/member", (req, res) => {
  res.send("These are member details");
  });

// post route
  app.post("/addmember", (req, res) => {
    res.send("You have added a member");
    });




app.get("*", (req, res) => {
  res.send("error! page does not exist");
  });


app.listen(3000, () => console.log('listening on port 3000')); // new