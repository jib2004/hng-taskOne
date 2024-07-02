const time = document.querySelector('#currentTimeUTC')
const day = document.querySelector('#currentDay')

const date = new Date()

time.innerText = `${date.getHours()}:${date.getMinutes()}`

const getDay = () =>{
let currentDay = date.getDay()

    switch (currentDay) {
        case 0:
          currentDay ="Sunday";
          break;
        case 1:
          currentDay = "Monday";
          break;
        case 2:
          currentDay = "Tuesday";
          break;
        case 3:
          currentDay = "Wednesday";
          break;
        case 4:
          currentDay = "Thursday";
          break;
        case 5:
          currentDay = "Friday";
          break;
        case 6:
          currentDay = "Saturday";
          break;
        default:
           "Invalid Day"; 
          break
      }


return currentDay
}
  day.innerText = getDay()


  