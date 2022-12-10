let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')

setInterval(()=>{
    setTimeout(()=>{
        red.classList.add('red1') 
        green.classList.remove('green1')
    }, 1000)
    
    setTimeout(()=>{
        red.classList.remove('red1')
        yellow.classList.add('yellow1')
    }, 6000)
    setTimeout(()=>{
        yellow.classList.remove('yellow1')
        green.classList.add('green1')
    },9000)
},14000)


 