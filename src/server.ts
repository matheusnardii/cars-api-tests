import { app } from "./app";
import { config } from 'dotenv';
config();

console.log(process.env.DATABASE_URL);

const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log(`API successfully started at port ${port}`);
});