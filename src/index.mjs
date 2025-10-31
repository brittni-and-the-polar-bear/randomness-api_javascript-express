import { app } from './app.mjs';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`randomness API is listening on port ${PORT}`);
});
