"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 4000;
app.use("/health", (req, res, next) => {
    res.status(200);
    res.send({ status: "Hello, World!" });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map