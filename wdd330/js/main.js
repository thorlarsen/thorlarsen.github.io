/* const links = [
  {
    label: "Week1",
    url: "week1/index.html"
  }
] */

function writeFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = "<div><p>&copy 2021 Thor Larsen | Web Frontend Dev II | BYU-Idaho</p></div>"
} 

addEventListener('load', writeFooter);