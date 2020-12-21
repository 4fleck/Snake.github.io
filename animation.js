
let animationOne = anime ({
    targets: '.letter',
    color:"#FF66FF",
    opacity: 1,
    translateY: 50,
    loop: true,
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'easeInExpo',
    },
  
    scale: anime.stagger([0.7, 1], {from: 'center'}),
    delay: anime.stagger(100, {start: 1000}),
    delay: anime.stagger(100, {start: 1000}),
    translateX: [-20, 40],

 

})

let animatioTwo = anime ({
targets: "#demo-svg path,#lines path",
strokeDashoffset: [anime.setDashoffset, 0],
easing: 'easeInOutSine',
duration: 5000,
delay: function(el, i) { return i * 250 },
direction: 'alternate',
loop: true

 
})
let animationThree = anime ({
targets: "#demo-svgTwo path , #path",
strokeDashoffset: [anime.setDashoffset, 0],
easing: 'easeInOutSine',
duration: 5000,
delay: function(el, i) { return i * 250 },
direction: 'alternate',
loop: true

})






