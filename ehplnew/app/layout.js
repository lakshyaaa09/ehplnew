// Existing code...

// Female Players
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

// Function to get female pairs for auction
export function getFemalePairsForAuction(players) {
  return FEMALE_PAIRS.map(([id1, id2]) => {
    const player1 = players.find(p => p.id === id1);
    const player2 = players.find(p => p.id === id2);
    return {
      player1,
      player2,
      isAvailable: player1?.status === "available" && player2?.status === "available",
    };
  }).filter(pair => pair.isAvailable);
}

// Existing code...