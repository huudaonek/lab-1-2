const fortuneCookies = [
    "consquer your fear or they will conquer you.",
    "Rivers nêd strings .",
    "Do you fear what you don't you.",
    "You will have a please.",
]
exports.getFortune = () =>{
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}