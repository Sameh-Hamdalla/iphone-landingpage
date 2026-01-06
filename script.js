/**
 * Wählt das große Handy-Bild aus dem HTML aus.
 * Es handelt sich um das <img>-Element innerhalb des .img-Containers.
 */
let img = document.querySelector(".img img");
let Container = document.querySelector(".container");

/**
 * Ändert das angezeigte Handy-Bild.
 *
 * @param {string} phone - Der Bildpfad (src) des angeklickten Icons
 */
function phones(phone) {
  img.src = phone;
}
function colors(color) {
  Container.style.background = color;
}
