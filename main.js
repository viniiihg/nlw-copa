function createGame1(
  player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

function createGame3(
  player1, hour1, player2, 
  player3, hour2, player4, 
  player5, hour3, player6) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
      <strong>${hour1}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>

    <li>
      <img src="./assets/icon-${player3}.svg" alt="Bandeira do ${player3}" />
      <strong>${hour2}</strong>
      <img src="./assets/icon-${player4}.svg" alt="Bandeira da ${player4}" />
    </li>

    <li>
      <img src="./assets/icon-${player5}.svg" alt="Bandeira de ${player5}" />
      <strong>${hour3}</strong>
      <img src="./assets/icon-${player6}.svg" alt="Bandeira da ${player6}" />
    </li>
  `
}

function createGame4(
  player1, hour1, player2, 
  player3, hour2, player4, 
  player5, hour3, player6,
  player7, hour4, player8) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
      <strong>${hour1}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>

    <li>
      <img src="./assets/icon-${player3}.svg" alt="Bandeira do ${player3}" />
      <strong>${hour2}</strong>
      <img src="./assets/icon-${player4}.svg" alt="Bandeira da ${player4}" />
    </li>

    <li>
      <img src="./assets/icon-${player5}.svg" alt="Bandeira de ${player5}" />
      <strong>${hour3}</strong>
      <img src="./assets/icon-${player6}.svg" alt="Bandeira da ${player6}" />
    </li>

    <li>
      <img src="./assets/icon-${player7}.svg" alt="Bandeira do ${player7}" />
      <strong>${hour4}</strong>
      <img src="./assets/icon-${player8}.svg" alt="Bandeira da ${player8}" />
    </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + .3
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 

createCard("20/11", "domingo", createGame1(
  "qatar", "13:00", "ecuador"))+

createCard("21/11","segunda",createGame3(
  "england","10:00","iran",
  "senegal","13:00","netherlands",
  "usa","16:00","wales"))+

createCard("22/11","terça",createGame4(
  "argentina", "07:00", "saudi-arabia", 
  "denmark", "10:00", "tunisia", 
  "mexico", "13:00", "poland", 
  "france", "16:00", "australia"))+

createCard("23/11","quarta",createGame4(
  "morocco", "07:00", "croatia",
  "germany", "10:00", "japan",
  "spain", "13:00", "costa-rica",
  "belgium", "16:00", "canada"))+

createCard("24/11","quinta",createGame4(
  "switzerland", "07:00", "cameroon",
  "uruguay", "10:00", "south-korea",
  "portugal", "13:00", "ghana",
  "brazil", "16:00", "serbia"))+

createCard("25/11","sexta",createGame4(
  "wales", "07:00", "iran",
  "qatar", "10:00", "senegal",
  "netherlands", "13:00", "ecuador",
  "england", "16:00", "usa"))+

createCard("26/11","sabado",createGame4(
  "tunisia", "07:00", "australia",
  "poland", "10:00", "saudi-arabia",
  "france", "13:00", "denmark",
  "argentina", "16:00", "mexico"))+

createCard("27/11","domingo",createGame4(
  "japan", "07:00", "costa-rica",
  "belgium", "10:00", "morocco",
  "croatia", "13:00", "canada",
  "spain", "16:00", "germany"))+

createCard("28/11","segunda",createGame4(
  "cameroon", "07:00", "serbia",
  "south-korea", "10:00", "ghana",
  "brazil", "13:00", "switzerland",
  "portugal", "16:00", "uruguay"))+

createCard("29/11","terça",createGame4(
  "ecuador", "12:00", "senegal",
  "netherlands", "12:00", "qatar",
  "iran", "16:00", "usa",
  "wales", "16:00", "england"))+

createCard("30/11","quarta",createGame4(
  "tunisia", "12:00", "france",
  "australia", "12:00", "denmark",
  "poland", "16:00", "argentina",
  "saudi-arabia", "16:00", "mexico"))+

createCard("01/12","quinta",createGame4(
  "croatia", "12:00", "belgium",
  "canada", "12:00", "morocco",
  "japan", "16:00", "spain",
  "costa-rica", "16:00", "germany"))+

createCard("02/12","sexta",createGame4(
  "south-korea", "12:00", "portugal",
  "ghana", "12:00", "uruguay",
  "serbia", "16:00", "switzerland",
  "cameroon", "16:00", "brazil"))
