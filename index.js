// form selection and answer
const form = document.querySelector("form");
const onePieceAnswer = ["B", "D", "B", "D", "B"];

const modalScore = document.querySelector(".modal-score");
let modalImg = document.querySelector(".img-modal");
const resultado = document.querySelector(".resultado");
const pResultado = document.querySelector(".resultado-p");
const buttonResult = document.querySelector(".buttonResult");

// Modal function
function addClassAndModal(pontos) {
  modalScore.style.display = "block";
  resultado.textContent = `PARABENS POR CONCLUIR`;
  pResultado.textContent = `A sua pontuação foi:${pontos}`;
  img =
    '<img class="img-resultado" src="img/one piece result/happy.jpg" alt=""></img>';
  modalImg.innerHTML = img;
}

// Close modal
modalScore.addEventListener("click", (e) => {
  const classQuit = ["modal-score", "a-modal", "buttonResult"];
  const getClass = e.target.getAttribute("class");
  const isValidClass = classQuit.some((item) => item === getClass);

  if (isValidClass) {
    modalScore.style.display = "none";
  }
});

// submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const respostas = [
    e.target.inputQuestion1.value,
    e.target.inputQuestion2.value,
    e.target.inputQuestion3.value,
    e.target.inputQuestion4.value,
    e.target.inputQuestion5.value,
  ];

  respostas.forEach((item, index) => {
    if (item === onePieceAnswer[index]) {
      score += 20;
    }
  });
  console.log(score);
  addClassAndModal(score);
});
