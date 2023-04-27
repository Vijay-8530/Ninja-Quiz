const currectAns = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form ')
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault()

    let score = 0
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    console.log(userAns)

    // chek ans
    userAns.forEach((answer, index) => {
        console.log(answer)
        console.log(index)
        if (answer === currectAns[index]) {
            score += 25
        }
    })

    // show result on page 
    scrollTo(0, 0)
    result.querySelector('span').textContent = `${score}%`
    result.classList.remove('d-none')

    console.log(score)
})