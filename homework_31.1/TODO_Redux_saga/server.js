import "dotenv/config"
import { app } from "./app/index.js";

const HOST_NAME = process.env.HOST_NAME ?? "localhost";
const PORT = process.env.PORT ?? 5000;

app.listen(PORT, HOST_NAME, () => {
    console.log(`Server is serving on http://${HOST_NAME}:${PORT}`);
})