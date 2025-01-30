const utcTime = document.getElementById('currentTimeUTC');
const displayTime = () => {
  const date = new Date();
  let hours = date.getUTCHours().toString().padStart(2, 0);
  const month = (date.getUTCMonth() + 1).toString().padStart(2, 0);
  const day = date.getUTCDate().toString().padStart(2, 0);
  const minutes = date.getUTCMinutes().toString().padStart(2, 0);
  const seconds = date.getUTCSeconds().toString().padStart(2, 0);

  //let time = date.toLocaleTimeString();
  const year = date.getUTCFullYear();
  // const month = String(date.getUTCMonth() + 1).padStart(2, '0');

  //   const day = String(date.getUTCDate()).padStart(2, '0');
  // const hours = String(date.getUTCHours()).padStart(2, '0');
  //   const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  //   const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  utcTime.innerText = time;
  console.log(month);
};
console.log(utcTime);
setInterval(displayTime, 1000);
displayTime();
