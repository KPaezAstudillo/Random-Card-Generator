window.onload = () => {
  let button = document.getElementById("clickme");
  button.addEventListener("click", function() {
    let Valor = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    let Pinta = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
    let sortValor = Valor[Math.floor(Math.random() * Valor.length)];
    let sortPinta = Pinta[Math.floor(Math.random() * Pinta.length)];

    let color =
      sortPinta == "&hearts;" || sortPinta == "&diams;" ? "red" : "black";

    let top = document.getElementById("top");
    let number = document.getElementById("number");
    let bottom = document.getElementById("bottom");

    top.style.color = color;
    number.style.color = color;
    bottom.style.color = color;

    top.innerHTML = sortPinta;
    number.innerHTML = sortValor;
    bottom.innerHTML = sortPinta;
  });
};
