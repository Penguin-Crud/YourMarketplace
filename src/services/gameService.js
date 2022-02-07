let data = [
  {
    id: 1,
    name: "Mario Bross",
    img: "https://m.media-amazon.com/images/I/61mglv9NpZL._AC_SX466_.jpg",
    description: "Juego tipico de aventura en Nintendo",
    console: "Nintendo",
    seller: "Jaume Gomicia",
    avatarSeller: "../../assets/img/user.png",
    price: 35,
  },
  {
    id: 2,
    name: "Crash",
    img: "https://m.media-amazon.com/images/I/61TAfvSctjL._AC_.jpg",
    description: "Juego clasico de aventura de los años 90",
    console: "Nintendo",
    seller: "Ruben Caminal",
    avatarSeller:
      "https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png",
    price: 30,
  },
  {
    id: 3,
    name: "Street Fighter",
    img: "https://m.media-amazon.com/images/I/51GP83WK5ML._AC_SX466_.jpg",
    description: "Juego epico de lucha para Nintendo",
    console: "Nintendo",
    seller: "Martin Domingo",
    avatarSeller:
      "https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png",
    price: 70,
  },
];

export function getAllGames() {
return fetch("http://localhost:8080/products", {method:"GET"})
        .then(res => res.json() )
}

export function getAllUsers(){
return fetch ("http://localhost:8080/user", {method:"GET"})
        .then(res=> res.json())
}