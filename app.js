const obj = {
  name: "Alex",
  id: 1
}
console.log(obj)
const data = JSON.stringify(obj)
console.log(data)
console.log(JSON.parse(data))


const arr = [1,2,4,6,8]
console.log(JSON.stringify(arr))

const yes = document.querySelector(".Yes")
const no = document.querySelector(".No")

  yes.addEventListener('click', () => {
  const request = new XMLHttpRequest() //coздание запроса
  request.open("GET", "data.json") //обьявление метода и пути запроса
  request.setRequestHeader("Content-type", "application/json") // указание типа данных в 
  request.send() // отправка запроса
  request.addEventListener("load", () => {
    const data = JSON.parse(request.response)
    console.log(data)
    document.querySelector('.name').innerHTML= data.name
    document.querySelector('.age').innerHTML= data.age
  })
})

no.addEventListener('click', () => {
  const obj = new XMLHttpRequest() //coздание запроса
  obj.open("GET", "data.json") //обьявление метода и пути запроса
  obj.setRequestHeader("Content-type", "application/json") // указание типа данных в 
  obj.send() // отправка запроса
  obj.addEventListener("load", () => {
    const data = JSON.parse(obj.response)
    console.log(data.obj)
    document.querySelector('.name').innerHTML= data.obj.name
    document.querySelector('.age').innerHTML= data.obj.age
  })
})






