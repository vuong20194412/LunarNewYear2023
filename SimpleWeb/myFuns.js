/**
*@param {number} num
*
*@return {string} result
*/
function randomHex(num) {
  //console.log(`randomHex(${num})`);
  const chars = "0123456789abcdef";
  let result = "";
  for (let i = 0; i < num; i++)
    result += chars[Math.floor(Math.random() * 16)];
  return result;
}

/**
*@param {Date} date
*@param {string} zone @default 'en-GB'
*
*@return {Object} {day,date,time}
*/
function formatDate(date, zone = 'en-GB') {
  return {
    day: Intl.DateTimeFormat(zone, {weekday: "long"}).format(date),
    date: Intl.DateTimeFormat(zone, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(date).map(({ type, value }) => value).join(''),
    time: Intl.DateTimeFormat(zone, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).formatToParts(date).map(({ type, value }) => value).join(''),
  };
}