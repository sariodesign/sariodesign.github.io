export default (time = "daily") => {
    const currentHour = document.querySelectorAll(".card-current-hour");
    const previousHour = document.querySelectorAll(".card-previous-hour");
  
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element, index) => {
          let timeGroup = element.timeframes[time];
          currentHour[index].textContent = timeGroup.current;
          previousHour[index].textContent = timeGroup.previous;
        });
      });
  };
  