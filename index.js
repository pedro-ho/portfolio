const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 520,
    reset: true
})

scrollReveal.reveal(
    `#inicio .leftside, #inicio .rightside,
     #exp .leftside, #exp .rightside > p, #exp .rightside .cards,
     #formacao .leftside, #formacao .rightside`,
    { interval: 70 })