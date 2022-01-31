// const quote = document.querySelector(".quote");
// const luciferEl = document.querySelector(".lucifer_quote")
// const base = "https://tasty.p.rapidapi.com/recipes/list"
// const fetchApi = async (url) => {
//     const {data} = await fetch((url), {
//         headers: {
//             'x-rapidapi-host': 'tasty.p.rapidapi.com',
//             'x-rapidapi-key': '8c73674f93msh49858921607b90ep152258jsn8c766436ac2f'
//           }
//     });
//     console.log(data)
//     return data
// }
// fetchApi
// function getAllData() {
//     let firstAPICall = fetch();
//     let secondAPICall = fetch("https://lucifer-quotes.vercel.app/api/quotes");
//     Promise.all([firstAPICall, secondAPICall])
//     .then(values => Promise.all(values.map(value => value.json())))
//     .then(finalVals => {
//       let firstAPIResp = finalVals[0];
//       let secondAPIResp = finalVals[1];
//       console.log(firstAPIResp,secondAPIResp);
//     });
// }
// getAllData()

const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle");
toggle.addEventListener("click" , () => {
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})










