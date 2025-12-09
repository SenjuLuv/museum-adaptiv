var map = L.map("map").setView([48.86091, 2.3364], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker1 = L.marker([48.86091, 2.3364]).addTo(map);
var marker2 = L.marker([48.8602, 2.3333]).addTo(map);
var marker3 = L.marker([48.8607, 2.3397]).addTo(map);
var marker4 = L.marker([48.8619, 2.333]).addTo(map);
var marker5 = L.marker([48.8625, 2.3365]).addTo(map);
