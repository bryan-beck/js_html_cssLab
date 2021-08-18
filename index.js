console.log ('hello world')
document.querySelector("form").addEventListener
("submit", addMovie);
const message = document.querySelector('#message')
console.log ("form")
function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    var movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie)
    ;
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn/addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    const list = document.querySelector("ul").appendChild(movie);
    inputField.value = ''
}
function deleteMovie(event) {
    MessageChannel.textContent = 'Movie deleted!'
    event.target.parentNode.remove();
}
function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')
    === true) {
        MessageChannel.textContent = 'Movie watched!'
    }else {
        MessageChannel.textContent = 'Movie added back!'
    }
}




