const _start = document.getElementById('start')
const infoBox = document.getElementById('infoBox')
const questionBox = document.getElementById('questionBox')
const timer = document.getElementById('timer')
const nextQue = document.getElementById('nextQue')
const counter = document.getElementById('counter')
const option = document.querySelectorAll('.option')
const question = document.getElementById('question')
const _end = document.getElementById('end')
const endText = document.getElementById('endText')
const quit = document.getElementById('quit')
const replay = document.getElementById('replay')
let clickCounter = 0
let point = 0
let conClick = 0




// click button start and showing the info:

_start.addEventListener('click', () => {
    _start.style.display = 'none'
    infoBox.style.display = 'block'
    setTimeout(() => {
        infoBox.style.opacity = '1'
        infoBox.style.transform = 'scale(1)'
    }, 1);

})



// click exit button and removing info: 

document.getElementById('exit').addEventListener('click', () => {
    infoBox.style.opacity = '0'
    infoBox.style.transform = 'scale(0)'
    setTimeout(() => {
        infoBox.style.display = 'none'
        _start.style.display = 'block'
    }, 200);



})



// click continue button and showing the quiz : 

document.getElementById('continue').addEventListener('click', () => {
    conClick++
    console.log(conClick);
    if (conClick == 1) {
        infoBox.style.opacity = '0'
        infoBox.style.transform = 'scale(0)'
        setTimeout(() => {
            infoBox.style.display = 'none'
            questionBox.style.display = 'block'
            questionBox.style.transform = 'scale(1)'
            questionBox.style.opacity = '1'

            let x = setInterval(() => {
                if (timer.innerHTML > 0) {
                    timer.innerHTML--
                }
                else {
                    clearInterval(x)
                    timer.previousElementSibling.innerHTML = 'Time Off'
                    nextQue.style.opacity = '1'
                    option.forEach((val) => {
                        if (val.innerHTML == questions[clickCounter].answer) {
                            val.parentElement.style.background = 'rgba(167, 255, 167, 0.5)'
                            val.parentElement.style.border = '1px solid rgba(26, 119, 26, 0.884)'
                            val.style.color = 'rgba(26, 119, 26, 0.884)'
                        }
                    })

                }



            }, 1000);

            option.forEach((val) => {

                val.parentElement.addEventListener('click', () => {


                    if (val.innerHTML != questions[clickCounter].answer) {

                        clearInterval(x)
                        nextQue.style.opacity = '1'
                        val.parentElement.style.background = 'rgba(255, 154, 154, 0.459)'
                        val.parentElement.style.border = '1px solid rgba(255, 105, 105, 0.596)'
                        val.style.color = 'rgba(255, 48, 48, 0.788)'



                    } else {
                        point++
                        console.log(point);

                        clearInterval(x)
                        nextQue.style.opacity = '1'
                        val.parentElement.style.background = 'rgba(167, 255, 167, 0.5)'
                        val.parentElement.style.border = '1px solid rgba(26, 119, 26, 0.884)'
                        val.style.color = 'rgba(26, 119, 26, 0.884)'

                    }

                })
            })


        }, 200);
    }

})


// click nextQue button and showing the next question : 

nextQue.addEventListener('click', () => {
    clickCounter++

    nextQue.style.opacity = '0'


    option.forEach((val) => {
        if (val.parentElement.style.background == 'rgba(167, 255, 167, 0.5)') {
            val.parentElement.style.background = 'rgba(194, 226, 255, 0.377)'
            val.parentElement.style.border = '1px solid rgb(133, 196, 255)'
            val.style.color = 'black'

        }
        if (val.parentElement.style.background = 'rgba(255, 154, 154, 0.459)') {
            val.parentElement.style.background = 'rgba(194, 226, 255, 0.377)'
            val.parentElement.style.border = '1px solid rgb(133, 196, 255)'
            val.style.color = 'black'
        }
    })



    if (clickCounter <= 4) {
        question.innerHTML = questions[clickCounter].question
        counter.innerHTML = questions[clickCounter].numb + ' Of 5 Questions'
        questions[clickCounter].options.map((val, i) => {
            option[i].innerHTML = val
        })
    }


    timer.previousElementSibling.innerHTML = 'Time Left'
    timer.innerHTML = 15
    let x = setInterval(() => {
        if (timer.innerHTML > 0) {
            timer.innerHTML--
        }
        else {
            clearInterval(x)
            timer.previousElementSibling.innerHTML = 'Time Off'
            nextQue.style.opacity = '1'
            option.forEach((val) => {
                if (val.innerHTML == questions[clickCounter].answer) {
                    val.parentElement.style.background = 'rgba(167, 255, 167, 0.5)'
                    val.parentElement.style.border = '1px solid rgba(26, 119, 26, 0.884)'
                    val.style.color = 'rgba(26, 119, 26, 0.884)'
                }
            })

        }





    }, 1000);

    option.forEach((val) => {

        val.parentElement.addEventListener('click', () => {

            if (val.innerHTML != questions[clickCounter].answer) {

                clearInterval(x)
                nextQue.style.opacity = '1'
                val.parentElement.style.background = 'rgba(255, 154, 154, 0.459)'
                val.parentElement.style.border = '1px solid rgba(255, 105, 105, 0.596)'
                val.style.color = 'rgba(255, 48, 48, 0.788)'




            } else {

                clearInterval(x)
                nextQue.style.opacity = '1'
                val.parentElement.style.background = 'rgba(167, 255, 167, 0.5)'
                val.parentElement.style.border = '1px solid rgba(26, 119, 26, 0.884)'
                val.style.color = 'rgba(26, 119, 26, 0.884)'

            }

        })
    })

    if (clickCounter == 5) {
        questionBox.style.display = 'none'
        questionBox.style.transform = 'scale(0)'
        questionBox.style.opacity = '0'

        _end.style.display = 'block'
        setTimeout(() => {
            _end.style.transform = 'scale(1)'
            _end.style.opacity = '1'

        }, 100);


        switch (true) {
            case point == 0 || point == 1: endText.innerHTML = 'and sorry 😐, You got only ' + point + ' out of 5'; break;
            case point == 2 || point == 3: endText.innerHTML = 'and nice 😎, You got ' + point + ' out of 5'; break;
            case point == 4 || point == 5: endText.innerHTML = 'and congrats!  🎉, You got ' + point + ' out of 5'; break;
        }


    }

})


// click the replay button :

replay.addEventListener('click', () => {
    _end.style.opacity = '0'
    _end.style.transform = 'scale(0)'
    clickCounter = 0
    point = 0
    timer.innerHTML = 15


    setTimeout(() => {
        _end.style.display = 'none'
        questionBox.style.display = 'block'
        questionBox.style.transform = 'scale(1)'
        questionBox.style.opacity = '1'


        if (clickCounter <= 4) {
            question.innerHTML = questions[clickCounter].question
            counter.innerHTML = questions[clickCounter].numb + ' Of 5 Questions'
            questions[clickCounter].options.map((val, i) => {
                option[i].innerHTML = val
            })
        }

    }, 300);


})
