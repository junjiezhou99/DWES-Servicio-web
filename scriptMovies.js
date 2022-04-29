async function myFunction1(){
    const response = await fetch("http://localhost:3011/movies/");
    let json = await response.json();

    console.log(json);
    render(json);
}

async function myFunction2(){
    const response = await fetch("http://localhost:3011/movies/2");
    let json = await response.json();
    let arr = [];
    arr.push(json);

    console.log(json);
    render(arr);
}

async function myFunction3(){
    let newMovie = {
        "id": 10,
        "title": "Dances with Wolves",
        "genres": [
            "Adventure", "Western ", "Drama"
        ],
        "year": 1990,
        "director": "Kevin Costner",
        "actors": [
            "Kevin Costner",
            "Mary McDonnell",
            "Graham Greene",
            "Rodney A. Grant"
        ]
    }
    const response = await fetch("http://localhost:3011/movies/add", {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMovie),
    });
    let json = await response.json();

    console.log(json);
    render(json);
}

function htmlNewSegment(movie){
    return `<tr>
    <td><img src="img/${movie.id}.jpg"></td>
    <td>
        <h1 id="titulo">${movie.title}</h1>
        <h4 id="parrafo">Director: ${movie.director}</h4>
        <h4 id="parrafo">Fecha de lanzamiento: ${movie.year}</h4>
    </td>
    </tr>`
}

function render(json){
    let html = "";
    json.forEach(movie => {
        html += htmlNewSegment(movie)

        let container = document.querySelector("#plantilla")
        container.innerHTML = html;
    });
}