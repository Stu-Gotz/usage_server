const express = require('express')
const app = express();
const pool = require("./db");

app.use(express.json()); // => req.body

/* ROUTES */

// get the data

app.get("/data/:date/:tier", async (req, res) => {
    try {
        const { date, tier } = req.params
        const allData = await pool.query("SELECT * FROM smogon_usage_stats WHERE date=$1 AND tier=$2", [date, tier]);
        const results = allData.rows;
        const output = { "data": Object.fromEntries(results.map(item => [item.pokemon, item])) }
        res.json(output)
    } catch (error) {
        console.log(error.message);
    }
})
app.listen(2000, () => {
    console.log("Server running on port 2000.")
});

//Object.fromEntries(dlist.map(item => [item.pokemon, item]))