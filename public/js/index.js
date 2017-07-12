$(function() {
  var socket = io();

  socket.on('connect', function() {
    socket.emit('test', function() {

    });

    if(!navigator.geolocation) {
      return alert('Geolocation not supported by your browser');
    }

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);

      /*var userPosition = {

      }*/
    });

  });
});
