const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Property = require('./Property');
const port = 3000;

mongoose.connect('mongodb+srv://tirthajagiya:Tirth%405618@cluster0.wzs3y.mongodb.net/Property').then(() => {
    console.log("Connected");

    const app = express();

    app.use(bodyParser.json());
    app.use(cors());

    //Api

    let Id = 1;

    app.get("/exploreproperty", async (req, res) => {
        const ans = await Property.find();
        res.send(ans);
    })

    app.get("/exploreproperty/:id", async (req, res) => {
        const ans = await Property.findOne({ id: req.params.id });
        res.send(ans);
    })

    app.post("/exploreproperty/addproperty", async (req, res) => {
        pro = new Property({ ...req.body, id: Id });
        Id++;
        const ans = await pro.save();
        res.send(ans);
    })

    app.delete('/exploreproperty/:id', async (req, res) => {
        const ans = await Property.deleteOne({
            id: req.params.id
        });
        res.send(ans);
    });

    app.patch('/exploreproperty/edit/:id', async (req, res) => {
        let pro = await Property.findOne({ id: req.params.id });
        pro.set(req.body);
        const ans = await pro.save();
        res.send(ans);

    });

    app.listen(port, () => {
        console.log(`Server Start At Port Number:${port}`);
    })
});