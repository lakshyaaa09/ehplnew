// app/lib/players.js

// Existing code...

export const FEMALE_PAIRS = [
  ["f-15", "f-04"],
  ["f-20", "f-03"],
  ["f-07", "f-22"],
  ["f-24", "f-19"],
  ["f-09", "f-08"],
  ["f-18", "f-11"],
  ["f-06", "f-16"],
  ["f-12", "f-17"],
  ["f-02", "f-05"],
  ["f-13", "f-01"],
  ["f-10", "f-14"],
  ["f-21", "f-23"],
];

// Function to get female pairs
export function getFemalePairs() {
  return FEMALE_PAIRS.map(pair => pair.map(id => DEFAULT_PLAYERS.find(player => player.id === id)));
}

// Function to get sold female player pairs
export function getSoldFemalePairs(players, teamName) {
  return FEMALE_PAIRS.flatMap(([firstId, secondId]) => {
    const first = players.find((p) => p.id === firstId && p.status === "sold" && p.soldTo === teamName);
    const second = players.find((p) => p.id === secondId && p.status === "sold" && p.soldTo === teamName);
    return first && second ? [{ first, second }] : [];
  });
}