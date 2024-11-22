// const people = [
//     {
//         name: 'Daniel',
//         occupation: 'Event Planner',
//         image: './8108c34474db40759668f9f3ff76e566_1592778258172.jpg',
//     },
//     {
//         name: 'Daniel',
//         occupation: 'Event Planner',
//         image: './8108c34474db40759668f9f3ff76e566_1592778258172.jpg',
//     },
//     {
//         name: 'Daniel',
//         occupation: 'Event Planner',
//         image: './8108c34474db40759668f9f3ff76e566_1592778258172.jpg',
//     },
//    {
//         name: 'Daniel',
//         occupation: 'Event Planner',
//         image: './8108c34474db40759668f9f3ff76e566_1592778258172.jpg',
//     },
//     {
//         name: 'Daniel',
//         occupation: 'Event Planner',
//         image: './8108c34474db40759668f9f3ff76e566_1592778258172.jpg',
//     },
//     {
//         name: 'Daniel',
//         occupation: 'Event Planner',
//         image: './8108c34474db40759668f9f3ff76e566_1592778258172.jpg',
//     },
//    {
//         name: 'Daniel',
//         occupation: 'Event Planner',
//         image: './8108c34474db40759668f9f3ff76e566_1592778258172.jpg',
//     },
//     {
//         name: 'Daniel',
//         occupation: 'Event Planner',
//         image: './8108c34474db40759668f9f3ff76e566_1592778258172.jpg',
//     },
//     {
//         name: 'Daniel',
//         occupation: 'Event Planner',
//         image: './8108c34474db40759668f9f3ff76e566_1592778258172.jpg',
//     },
//    {
//         name: 'Daniel',
//         occupation: 'Event Planner',
//         image: './8108c34474db40759668f9f3ff76e566_1592778258172.jpg',
//     },

// ];

// let body = document.getElementById("body")

// people.forEach(person => {
//     let card = document.createElement("div")
//     card.classList.add("card")
//     body.appendChild(card)

//     let image = document.createElement("img")
//     image.src = person.image
//     card.appendChild(image)

//     let name = document.createElement("h2")
//     name.textContent = person.name
//     card.appendChild(name)

//     let occupation = document.createElement("p")
//     occupation.textContent = person.occupation
//     card.appendChild(occupation)
// })


const req = new XMLHttpRequest()

req.open("GET","https://catfact.ninja/fact")
req.send()

req.responseType = "json"
req.onload = () => console.log(req.response.fact);

getFacts
.then(result => result.data)

.then(result=>console.log(result)).catch(error=>console.log())