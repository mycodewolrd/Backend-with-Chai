import express from 'express';

const app = express();

//Get list of 5 jokes
app.get ('/api/jokes', (req, res) => {
    const jokes = [
      {
        id: 1,
        title: "Why don't skeletons fight?",
        content: "Because they don't have the guts!",
      },
      {
        id: 2,
        title: "Parallel lines meet?",
        content: "Parallel lines have so much in common. It’s a shame they’ll never meet!",
      },
      {
        id: 3,
        title: "Math book sadness",
        content: "Why was the math book sad? Because it had too many problems.",
      },
      {
        id: 4,
        title: "Elevator joke",
        content: "I would tell you an elevator joke, but it’s an uplifting experience!",
      },
      {
        id: 5,
        title: "Why can't a nose be 12 inches long?",
        content: "Because then it would be a foot!",
      },
    ];
    res.send(jokes);
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});