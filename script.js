const ratings = document.querySelectorAll('.rating')

const ratingState = document.querySelector('.rating-state')
const thankyouState = document.querySelector('.thankyou-state')

let rating = 0

ratings.forEach((Element) => {
    Element.addEventListener("click", () => {
        rating = Element.innerHTML
        ratings.forEach((Element) => {
            if (Element.innerHTML == rating) {
                Element.classList.add('selected')
            } else {
                Element.classList.remove('selected')
            }
        })
        console.log(rating)
    })
})

document.getElementById('submit').addEventListener("click", () => {

    if (rating == 0) {
        return
    } else {
        ratingState.classList.add('hidden')
        thankyouState.classList.remove('hidden')
        document.getElementById("rating-message").innerHTML = `You selected ${rating} out of 5`
    }
})