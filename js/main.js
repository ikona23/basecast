function time() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var milliseconds  = date.getMilliseconds();
  var arr = [hours, minutes, seconds, milliseconds].map(function(num) {
    return num < 10 ? '0' + num : String(num);
  });

  hours = arr[0]
  minutes = arr[1];
  seconds = arr[2];
  milliseconds = arr[3];

  return hours + minutes + seconds + milliseconds;
}

console.log(time());

function output(time) {
  var color = '#' + time;
  document.body.bgColor = color;
  document.body.textContent = color;
  document.body.style.color = 'white'
  document.body.style.fontSize = '2em'
  document.body.style.marginLeft = '44%'
  document.body.style.marginTop = '200px'
}

function startClick(callback, name) {
  document.body.addEventListener('dblclick', function(event) {
    callback();
  });
}

function stopClick(callback, name) {
  document.body.addEventListener('click', function(event) {
    callback(name);
  });
}

function init() {
  var tick = setInterval(function() {
    output(time())
  }, 1000);
  stopClick(clearInterval, tick); //clearInterval(tick);
  startClick(init);
}

init();
