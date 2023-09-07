const notes = document.querySelectorAll(".case");
const toggleButton = document.getElementById("toggleButton");
const checkMode = document.getElementById("checkMode");
// création d'un tableau avec les 4 couleurs, si un jour on doit ajouter une nouvelle couleur
const colors = ["green", "yellow", "orange", "red"];
let mode = 0;

// pour vérifié que les valeurs sont valides
const regexCouleur = /^[1-4&é"']{1}$/;
const regexNote = /^[1-5&é"'(]{1}$/;

// création de l'événement sur le bouton avec les 2 modes
toggleButton.addEventListener("click", () => {
  if (mode == 0) {
    checkMode.textContent = "mode actuel : note";
    mode = 1;
  } else if (mode == 1) {
    checkMode.textContent = "mode actuel : couleur";
    mode = 2;
  } else if (mode == 2) {
    checkMode.textContent = "mode actuel : note";
    mode = 1;
  }
  // ajout et suppréssion des attribus sur les inputs en mode note
  notes.forEach((element) => {
    element.removeAttribute("hidden");
    if (element.getAttribute("style") == null) {
      element.setAttribute("style", "background-color : white");
    } else {
      element.removeAttribute("style");
    }
  });
  notes[0].focus();
});

// reset des inputs via le onclick (dans le html)
function resetInputs() {
  notes.forEach((element) => {
    if (element.value != "") {
      element.value = "";
    }
  });
}

// teste des valeurs et affectation des couleurs pour chaque note
notes.forEach((element) => {
  element.addEventListener("input", () => {
    if (mode == 2) {
      let noteResults = regexCouleur.test(element.value);
      if (noteResults) {
        if (element.parentElement.parentElement.nextElementSibling === null) {
          if (element.value == 1 || element.value == "&") {
            colors.forEach((c) => {
              if (element.classList.contains(c)) {
                element.classList.remove(c);
              }
            });
            element.classList.add("red");
            element.value = "";
          } else if (element.value == 2 || element.value == "é") {
            colors.forEach((c) => {
              if (element.classList.contains(c)) {
                element.classList.remove(c);
              }
            });
            element.classList.add("orange");
            element.value = "";
          } else if (element.value == 3 || element.value == '"') {
            colors.forEach((c) => {
              if (element.classList.contains(c)) {
                element.classList.remove(c);
              }
            });
            element.classList.add("yellow");
            element.value = "";
          } else if (element.value == 4 || element.value == "'") {
            colors.forEach((c) => {
              if (element.classList.contains(c)) {
                element.classList.remove(c);
              }
            });
            element.classList.add("green");
            element.value = "";
          }
          element.blur();
        } else {
          if (element.value == 1 || element.value == "&") {
            colors.forEach((c) => {
              if (element.classList.contains(c)) {
                element.classList.remove(c);
              }
            });
            element.classList.add("red");
            element.value = "";
          } else if (element.value == 2 || element.value == "é") {
            colors.forEach((c) => {
              if (element.classList.contains(c)) {
                element.classList.remove(c);
              }
            });
            element.classList.add("orange");
            element.value = "";
          } else if (element.value == 3 || element.value == '"') {
            colors.forEach((c) => {
              if (element.classList.contains(c)) {
                element.classList.remove(c);
              }
            });
            element.classList.add("yellow");
            element.value = "";
          } else if (element.value == 4 || element.value == "'") {
            colors.forEach((c) => {
              if (element.classList.contains(c)) {
                element.classList.remove(c);
              }
            });
            element.classList.add("green");
            element.value = "";
          }
          element.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild.focus();
        }
      } else {
        alert("Veuillez entrer un chiffre entre 1 et 4");
        element.value = "";
      }
    }

    // teste des notes touches &é"'(
    if (mode == 1) {
      let noteResults = regexNote.test(element.value);
      switch (element.value) {
        case "&":
          element.value = 1;
          break;
        case "é":
          element.value = 2;
          break;
        case '"':
          element.value = 3;
          break;
        case "'":
          element.value = 4;
          break;
        case "(":
          element.value = 5;
          break;
        default:
          break;
      }
      if (noteResults) {
        if (element.parentElement.parentElement.nextElementSibling === null) {
          element.blur();
        } else {
          element.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild.focus();
        }
      } else {
        alert("Veuillez entrer un chiffre entre 1 et 5");
        element.value = "";
      }
    }
  });
});
