// setTimeout(() => {
//     alert('Hello!')
// }, 3000)




// let number = 1

// const a = setInterval(() => {
//     if (number > 5){
//         clearInterval(a)
//         return
//     }
//     console.log(number);
//     number++
// }, 2000)

// setTimeout(() => {
//     clearInterval(a)
// }, 5000)






// function Congratulate(name) {
//     console.log(`Привіт, ${name}!`);
// }

// setTimeout((name) => {
//     Congratulate('John')
// }, 5000)





// function wasd(){
//     const a = new Date()
//     console.log(`Hours:${a.getHours()}, Minutes:${a.getMinutes()}, Seconds:${a.getSeconds()}`);
// }

// const b = setInterval(() => {
//     wasd()
// }, 1000)

// setTimeout(() => {
//     clearInterval(b)
// }, 5000)







// function wasd(){
//     const a = new Date()
//     console.log(`Hours:${a.getHours()}, Minutes:${a.getMinutes()}, Seconds:${a.getSeconds()}`);
//     console.log("Це несподівано!");
// }


// let b = setInterval(wasd, 3000)

// setTimeout(() => {
//     clearInterval(b)
//     console.log("wwwwwwwww");
// }, 3000)









// const b = setInterval(() => {
//     const a = new Date()
//     console.log(`Hours:${a.getHours()}, Minutes:${a.getMinutes()}, Seconds:${a.getSeconds()}`);
// }, 2000)

// setTimeout(() => {
//     clearInterval(b)
//     console.log("Час зупинено.");
// }, 10000)



// home work


// ex 1

// const a = setInterval(() => {
//     console.log("Повідомлення");
// }, 1000)

// setTimeout(() => {
//     clearInterval(a)
// }, 5000)


// ex 2


// const btn = document.querySelector('.btn');

// const animation = setInterval(() => {
//     btn.style.backgroundColor = "black"
//     btn.style.marginLeft = "550px"
// }, 2000)

// ex 3


// const btns = document.querySelectorAll('.gameBtn')
// let counter = document.querySelector('.points')
// let points = 0

// btns.forEach(button => {
//     button.addEventListener('click', () => {
//         updatePoints()
//     })
// })

// function updatePoints(){
//     points++
//     counter.textContent = `Points: ${points}`
// }

// let a = setInterval(() => {
//         clearInterval(a)
// }, 1000)

// setTimeout(() => {
//     clearInterval(a)
//     alert("Гра завершилась! Ваш результат: " + points + " очків.")
// }, 5000)



// ex 4


const inpt = document.querySelector('.inpt')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const count = inpt.value

    if (count <= 0){
        alert("Введіть число більше 0");
    }
    else {
        setTimeout(() => {
            alert("Час вийшов")
        }, count * 1000) 
    }
})