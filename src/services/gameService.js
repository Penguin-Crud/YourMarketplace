let data = [
  {
    id: 1,
    name: "Mario Bross",
    img: "https://m.media-amazon.com/images/I/61mglv9NpZL._AC_SX466_.jpg",
  },
  {
    id: 2,
    name: "Crash",
    img: "https://m.media-amazon.com/images/I/61TAfvSctjL._AC_.jpg",
  },
  {
    id: 3,
    name: "Street Fighter",
    img: "https://m.media-amazon.com/images/I/51GP83WK5ML._AC_SX466_.jpg",
  },
];

export async function getAllGames() {
  return data;
}
