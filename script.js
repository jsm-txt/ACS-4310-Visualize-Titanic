import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')


// data.sort((a, b) => {
//   if (a.fields.embarked === undefined) {
//     return 1
//   } else i
//   return a.fields.embarked > b.field.embarked
// })

// data.sort((a, b) => {
//   if (a.fields.sex === "male") {
//     return -1
//   } else {
//     return 1
//   }
// })

// data.sort((a, b) => {
//   if (a.fields.survived === "Yes") {
//     return -1
//   } else {
//     return 1
//   }
// })
// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(34, 18px)'
titanic.style.gridGap = '2px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  const el = document.createElement('div')
  titanic.appendChild(el)
  return el
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  const { pclass, survived, sex, age} = data[i].fields
  
  p.style.opacity = survived === 'Yes' ? '100%' : '15%'
  p.style.borderRadius = sex === 'female' ? '25px' : '0px'
  if (data[i].fields.embarked === "S") {
    p.style.backgroundColor = 'red'
  } if (data[i].fields.embarked === "C") {
    p.style.backgroundColor = 'blue'
  } if (data[i].fields.embarked === "Q") {
    p.style.backgroundColor = 'green'
  }
  if (data[i].fields.age >= 40) {
    p.style.width = '18px'
    p.style.height = '18px'
  }
  else if (data[i].fields.age < 10) {
    p.style.width = '15px'
    p.style.height = '15px'
  }
  else if (data[i].fields.age < 20) {
    p.style.width = '12px'
    p.style.height = '12px'
  }
  else if (data[i].fields.age < 30) {
    p.style.width = '9px'
    p.style.height = '9px'
  }
  else if (data[i].fields.age < 40) {
    p.style.width = '6px'
    p.style.height = '6px'
  }
  else if (data[i].fields.age === undefined) {
    p.style.width = '18px'
    p.style.height = '18px'
  }
})

// Challenges - 

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 



// Change the number of columns on the titanic to 34


// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 



// Display each passengers who did not survive as 
// opacity 0.5. 



// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'



const fare = document.querySelector('#fare')


fare.style.display = 'grid'
fare.style.gridTemplateColumns = 'repeat(34, 15px)'
fare.style.gridGap = '1px'

//const fareSort
const fareSort = data.sort((a, b) => {
  return a.fields.fare - b.fields.fare})

const farePaid = fareSort.map(p => {
  const el = document.createElement('div')
  fare.appendChild(el)
  return el
})


farePaid.forEach((p, i) => {
  const { sex, survived} = data[i].fields
  p.style.width = '15px'
  p.style.height = '15px'
  p.style.borderRadius = sex === 'female' ? '25px' : '0px'
  p.style.opacity = survived === 'Yes' ? '100%' : '20%'
  if (data[i].fields.fare >= 200) {
    p.style.backgroundColor = 'red'
  }
  else if (data[i].fields.fare < 10) {
    p.style.backgroundColor = 'purple'
  }
  else if (data[i].fields.fare < 20) {
    p.style.backgroundColor = 'blue'
  }
  else if (data[i].fields.fare < 40) {
    p.style.backgroundColor = 'green'
  }
  else if (data[i].fields.fare < 80) {
    p.style.backgroundColor = 'yellow'
  }
  else if (data[i].fields.fare < 200) {
    p.style.backgroundColor = 'orange'
  }
  else if (data[i].fields.fare === undefined) {
    p.style.backgroundColor = 'black'
  }
})


const survived = document.querySelector('#survived')

survived.style.display = 'grid'
survived.style.gridTemplateColumns = 'repeat(34, 15px)'
survived.style.gridGap = '1px'

const survivedFilter = data.filter(p => p.fields.survived === 'Yes')
console.log(survivedFilter)
const survivedFilterMap = survivedFilter.map(p => {
  const el = document.createElement('div')
  survived.appendChild(el)
  return el
})

survivedFilterMap.forEach((p, i) => {
  const {sex} = data[i].fields
  p.style.width = '15px'
  p.style.height = '15px'
  p.style.borderRadius = sex === 'female' ? '25px' : '0px'
  //p.style.opacity = survived === 'Yes' ? '100%' : '20%'
  if (data[i].fields.fare >= 200) {
    p.style.backgroundColor = 'red'
  }
  else if (data[i].fields.fare < 10) {
    p.style.backgroundColor = 'purple'
  }
  else if (data[i].fields.fare < 20) {
    p.style.backgroundColor = 'blue'
  }
  else if (data[i].fields.fare < 40) {
    p.style.backgroundColor = 'green'
  }
  else if (data[i].fields.fare < 80) {
    p.style.backgroundColor = 'yellow'
  }
  else if (data[i].fields.fare < 200) {
    p.style.backgroundColor = 'orange'
  }
  else if (data[i].fields.fare === undefined) {
    p.style.backgroundColor = 'black'
  }
})