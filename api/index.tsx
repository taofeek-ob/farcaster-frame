import { Button, Frog, TextInput } from "frog";
import { handle } from "frog/vercel";

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  basePath: "/api",
  // Supply a Hub API URL to enable frame verification.
  // hubApiUrl: "https://api.hub.wevm.dev",
  browserLocation: "https://warpcast.com/taofeek/0xa34c182d",
});

app.frame("/", (c) => {
  const { buttonValue, status } = c;

  const story = [
    { text: "Amidst the bustle of a bustling city, two souls crossed paths.", gradient: "linear-gradient(to right, #ff7e5f, #feb47b)" },
    { text: "Their eyes met, igniting a spark that kindled the flames of destiny.", gradient: "linear-gradient(to right, #88d3ce, #6e9bc5)" },
    {
      text: "In the quiet corners of crowded streets, they found solace in each other's presence.",
      gradient: "linear-gradient(to right, #f3a683, #f7d794)",
    },
    {
      text: "Conversations flowed like gentle streams, weaving tales of laughter and longing.",
      gradient: "linear-gradient(to right, #63cdda, #79cbca)",
    },
    {
      text: "Shared dreams painted the canvas of their future, vibrant and full of promise.",
      gradient: "linear-gradient(to right, #a3cb37, #4e9aaf)",
    },
    {
      text: "Whispers of love carried by the wind, entwining their hearts in an unbreakable bond.",
      gradient: "linear-gradient(to right, #ffdada, #fce38a)",
    },
    {
      text: "Time stood still as they danced under the stars, lost in the melody of their love.",
      gradient: "linear-gradient(to right, #ff9a9e, #fecfef)",
    },
    {
      text: "Through trials and tribulations, their love grew stronger, weathering every storm.",
      gradient: "linear-gradient(to right, #b8e994, #78e08f)",
    },
    {
      text: "Each moment together a treasure, each touch a symphony of passion and devotion.",
      gradient: "linear-gradient(to right, #6a89cc, #82ccdd)",
    },
    {
      text: "At the journey's end, they stood hand in hand, souls intertwined for eternity.",
      gradient: "linear-gradient(to right, #f093fb, #f5576c)",
    },
    { text: "Their love story, a testament to the power of love's enduring embrace.", gradient: "linear-gradient(to right, #43e97b, #38f9d7)" },
  ];

  let currentIndex = Number(buttonValue) || 0;
  const hasNext = currentIndex < story.length - 1;
  const hasPrev = currentIndex > 0;

  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          background: status === "response" ? story[Number(buttonValue)].gradient : "black",
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 40,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {status === "initial" ? `Welcome` : story[currentIndex].text}
        </div>
      </div>
    ),
    intents: [
      hasPrev && <Button value={String(currentIndex - 1)}>Prev</Button>,
      status !== "initial" && hasNext && <Button value={String(currentIndex + 1)}>Next</Button>,
      buttonValue === "10" && <Button.Reset>Reset</Button.Reset>,
      status === "initial" && <Button value="0">Start</Button>,
    ],
  });
});

export const GET = handle(app);
export const POST = handle(app);
