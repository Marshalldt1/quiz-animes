// form selection and answer
const form = document.querySelectorAll("form");
const modalScore = document.querySelector(".modal-score");
let modalImg = document.querySelector(".img-modal");
const resultado = document.querySelector(".resultado");
const pResultado = document.querySelector(".resultado-p");
const buttonResult = document.querySelectorAll(".buttonResult");
const chooseAnime = document.querySelectorAll(".animes img");
const sectionAnimes = document.querySelectorAll("section");

const animesAnswer = [
  ["B", "D", "B", "D", "B"],
  ["A", "C", "C", "D", "D"],
];

const imagemModal = {
  final: [
    '<img class="img-resultado" src="img/one piece result/happy.jpg" alt=""></img>',
    '<img class="img-resultado" src="img/naruto result/naruto happy.jpg" alt=""></img>',
  ],
};
console.log(animesAnswer[0]);
// choose anime quiz

function clearAttribute() {
  sectionAnimes.forEach((item) => {
    item.classList.remove("teste");
  });
}

// submit event add modal and result
function submitQuiz(teste) {
  form[teste].addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;
    const respostas = [
      e.target.inputQuestion1.value,
      e.target.inputQuestion2.value,
      e.target.inputQuestion3.value,
      e.target.inputQuestion4.value,
      e.target.inputQuestion5.value,
    ];

    respostas.forEach((item, index2) => {
      if (item === narutoAnswer[index][index2]) {
        score += 20;
      }
    });
    console.log(score);
    addClassAndModal(score);
  });
}

chooseAnime.forEach((item, index) => {
  console.log(index);
  console.log(item, index);
  item.addEventListener("click", (e) => {
    const animeEscolhido = item.classList.value;
    console.log(animeEscolhido);
    clearAttribute();
    sectionAnimes[index].classList.add("teste");
  });
  form[index].addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;
    const respostas = [
      e.target.inputQuestion1.value,
      e.target.inputQuestion2.value,
      e.target.inputQuestion3.value,
      e.target.inputQuestion4.value,
      e.target.inputQuestion5.value,
    ];

    respostas.forEach((item, index2) => {
      if (item === animesAnswer[index][index2]) {
        score += 20;
      }
      console.log(item, index2);
    });
    console.log(score);
    addClassAndModal(score, index);
  });
  // submitQuiz(index);
});

// Modal function
function addClassAndModal(pontos, index) {
  modalScore.style.display = "block";
  resultado.textContent = `PARABENS POR CONCLUIR`;
  pResultado.textContent = `A sua pontuação foi:${pontos}`;
  img = imagemModal.final[index];
  modalImg.innerHTML = img;
}

// Close modal
modalScore.addEventListener("click", (e) => {
  const classQuit = ["modal-score", "a-modal", "buttonResult"];
  const getClass = e.target.getAttribute("class");
  const isValidClass = classQuit.some((item) => item === getClass);

  if (isValidClass) {
    modalScore.style.display = "none";
    window.location.reload();
  }
});
