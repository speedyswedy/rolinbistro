// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", score: 23 },
    { number: 2, name: "Dave Defender",  score: 10 },
    { number: 3, name: "Sam Sweeper",  score: 11 },
    { number: 4, name: "Matt Midfielder",  score: 55 },
    { number: 5, name: "William Winger",  score: 34 },
    { number: 6, name: "Fillipe Forward",  score: 77 },
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI