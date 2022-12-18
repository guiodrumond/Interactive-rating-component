# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![image](https://user-images.githubusercontent.com/87048670/208317260-24faa8f8-3dd9-4f09-9257-f436fdd5a730.png)

![image](https://user-images.githubusercontent.com/87048670/208317274-e2adf670-27c3-468a-b076-5dc834a1065c.png)

![image](https://user-images.githubusercontent.com/87048670/208317283-ea38d50c-cf35-44b0-912e-14665ed400ae.png)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/interactive-rating-component-zHGZudGEc5](https://www.frontendmentor.io/solutions/interactive-rating-component-zHGZudGEc5)
- Live Site URL: [https://interactive-rating-component-ten-pi.vercel.app/](https://interactive-rating-component-ten-pi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Document.querySelector


### What I learned

To change the style of the rating elements I used the code below, where use the forEach method:

```js
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
    })
})
```

