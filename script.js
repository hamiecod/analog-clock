/*
Mathematical formulas used to calculate the theta of the three hands- hour hand, minute hand and second hand are as follows:
1) theta(hour hand): (30h)° + (m/2)° + (s/120)°
2) theta(minute hand): (6m)° + (s/10)°
3) theta(second hand): (6s)°
where, h=number of hours, m=number of minutes, s=number of seconds
*/

setInterval(()=>{
  hour = document.getElementById('clock-hour');
  // pointing to the hour hand

  minute = document.getElementById('clock-minute');
  // pointing to the minute hand

  second = document.getElementById('clock-second');
  // pointing to the second hand
  date = new Date();


  htime = date.getHours();
  // stores hours(h)

  mtime = date.getMinutes();
  // stores minutes(m)

  stime = date.getSeconds();
  // stores seconds(s)


  hrotation=(30*htime) + (mtime/2) + (stime/120);
  // rotation of the hour hand

  mrotation=(6*mtime) + (stime/10);
  // rotation of the minute hand

  srotation=(6*stime);
  // rotation of the second hand

  hour.style.transform = `rotate(${hrotation}deg)`;
  // setting the rotation of the hour hand
  
  minute.style.transform = `rotate(${mrotation}deg)`;
  // setting the rotation of the minute hand
  
  second.style.transform = `rotate(${srotation}deg)`;
  // setting the rotation of the second hand
}, 1000);
