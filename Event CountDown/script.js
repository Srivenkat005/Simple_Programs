const events = [];

function addEvent() {
  const eventName = document.getElementById("eventName").value;
  const eventDate = new Date(document.getElementById("eventDate").value).getTime();

  if (eventName && !isNaN(eventDate)) {
    events.push({ name: eventName, date: eventDate });
    updateEventsList();
  } else {
    alert("Please enter a valid event name and date.");
  }
}

function updateEventsList() {
  const eventsListDiv = document.getElementById("eventsList");
  eventsListDiv.innerHTML = "";

  events.forEach((event, index) => {
    const eventDiv = document.createElement("div");
    const eventTimerDiv = document.createElement("div");
    eventTimerDiv.id = `timer${index}`;

    eventDiv.innerHTML = `<h3>${event.name}</h3>`;
    eventDiv.appendChild(eventTimerDiv);
    eventsListDiv.appendChild(eventDiv);

    updateCountdown(event.date, `timer${index}`);
  });
}

function updateCountdown(eventDate, timerId) {
  const countdownInterval = setInterval(() => {
    const currentDate = new Date().getTime();
    const timeDifference = eventDate - currentDate;

    const timerElement = document.getElementById(timerId);

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      timerElement.innerHTML = "Event has started!";
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}
