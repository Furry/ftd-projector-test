const express = require("express");
const NodeCanvas = require("canvas")
const app = express();

app.get("/*", (req, res) => {
    // Draw a 256by256 with random pixel colors
    const canvas = NodeCanvas.createCanvas(256, 256);
    const ctx = canvas.getContext("2d");

    for (let i = 0; i < 256; i++) {
        for (let j = 0; j < 256; j++) {
            ctx.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            ctx.fillRect(i, j, 1, 1);
        }
    }

    // Send the image
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer());
});

app.listen(3000, () => console.log("Listening on port 3000"));

