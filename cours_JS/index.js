let string = "hello world";
let number = 25;
let boolean = true

//les tableaux
let array = ["loic", 25, true, "julien"]
//console.log(array[0][3])

let array2 = ["loic", 24, true ,[1,2], {nom: "denis"}]
//console.log(array2[4].nom)

let objet = {
  pseudo: "deadpool",
  age: 38,
  techno: ["javascript", "SCSS", "python"],
  admin: false
}
//objet.adress = "22 rue du code" => cela va ajouter l'adresse, ou la remplacer si le clé adress existe deja

let data = [
  {
    pseudo: "deadpool",
    age: 38,
    techno: ["javascript", "SCSS", "python"],
    admin: false,
  },

  {
    pseudo: "julien",
    age: 42,
    techno: ["PHP", "SCSS", "python"],
    admin: true,
  },

  {
    pseudo: "Alex",
    age: 38,
    techno: ["javascript", "SCSS", "python"],
    admin: false
  }
]
//les datas vont dans un tableau
//console.log(data[2].pseudo[0]) => on affiche alex

//-------------------------
// LES STRUCUTRES DE CONTROLE
//-------------------------

if(data[0].age > data[1].age) {
  console.log("deadpool est plus vieux que Julien")
} else { console.log("Julien est plus vieux que deadpool")
  };

  //WHILE

  let a = 0;

  while (a < 10) {
    a ++
    console.log(a)
  }
  // tant que a est inferieur a 10, ajoute 1 à A

  // DO WHILE
  let b = 0;

  do{
    b++
    console.log(b)
  } while (b < 5);

  //BOUCLE FOR
  for(const user of data) {
    //document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`
  }


  //on declare la valeur de i / jusuq'ou on boucle / on incrémente i si la condition 2 n'est pas remplie
  for (i = 0; i < data.length; i++ ) {
    //console.log(i)
    //console.log(data[i].techno[0])
    //document.body.innerHTML += "<h2>" + data[1].techno + "</h2>";
  };

  //SWITCH
  document.body.addEventListener("click", (e) =>{
    switch (e.target.id) {
      case "javascript":
        document.body.style.background = "yellow";
        break;
      case "php":
        document.body.style.background = "violet";
        break;
      case "python":
        document.body.style.background = "blue";
    }
  });
