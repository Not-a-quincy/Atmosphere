import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index', { site_name: "ahola" }); 
});

let port = 3000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});