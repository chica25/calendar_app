const date = new Date();
// console.log(date)

// const month = date.getMonth()
// console.log(month)

const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// console.log(months)

document.querySelector(".date h1").innerHTML = months[date.getMonth()];

document.querySelector(".date p").innerHTML = date.toDateString();