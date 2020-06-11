// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/**
 * Adds a random greeting to the page.
 */
function addRandomFact() {
  const facts =
      ['My favorite vegetable is spinach (or is that a leaf?)', 'I can speak English, Urdu & Japanese', 'I would love to go to the moon', 
      'Moosetracks is my favorite ice cream!', "My favorite color is purple", "I'm the youngest child", "I usually visit Toronto twice a year", 
      "I love doing hair masks", "My favorite band is BTS", "My name with no vowels is Tb", "I HATE olives", 
      "If I were a punctuation I would definitely be a exclamation mark", "I once fell on my chin and had to get it glued back together", 
      "My favorite season is fall"];

  // Pick a random greeting.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}

function getComments() {
  fetch("/data").then(response => response.json()).then((text) => {
    const comments = document.getElementById('comment-list');
    comments.innerHTML = '';
    var i;
    for (i = 0; i < text.length; i++) {
      if (text[i] != null) {comments.innerHTML += text[i] + "<br>";}
    }
  });
}

function deleteComments() {
  fetch("/delete-data").then(response => response.json()).then((text) => {
    const comments = document.getElementById('comment-list');
    comments.innerHTML = '';
    var i;
    for (i = 0; i < text.length; i++) {
      comments.innerHTML += text[i] + "<br>";
    }
  });
}

var slideIndex = 0;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Add it to the page.
const slideContainer = document.getElementById('slides-fade');

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slides-fade');
  if (n > slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  slides[slideIndex-1].style.display = 'block';
}

function createMap() {
  const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 41.998599, lng: -87.686634}, zoom: 5});

  const restaurant1 = new google.maps.Marker({
      position: {lat: 41.998599, lng: -87.686634},
      map: map,
      title: 'When I want Halwa Poori.'
  });

  const restaurant2 = new google.maps.Marker({
      position: {lat: 42.010480, lng: -88.078836},
      map: map,
      title: 'When I want a spicy chicken sandwich.'
  });

 const restaurant3 = new google.maps.Marker({
      position: {lat: 42.440098, lng: -76.499338},
      map: map,
      title: 'My favorite taco place.'
  });

 const restaurant4 = new google.maps.Marker({
      position: {lat: 42.439693, lng: -76.506755},
      map: map,
      title: 'Some really good spicy ramen.'
  });

 const restaurant5 = new google.maps.Marker({
      position: {lat: 42.448526, lng: -76.489515},
      map: map,
      title: 'The best dining hall at Cornell.'
  });

 const restaurant6 = new google.maps.Marker({
      position: {lat: 41.886542, lng: -87.624846},
      map: map,
      title: 'A place I visit whenever I am in downtown Chicago.'
  });

 const restaurant7 = new google.maps.Marker({
      position: {lat: 42.049014, lng: -88.100470},
      map: map,
      title: 'Their cactus and egg sopa combo is super yummy.'
  });

 const restaurant8 = new google.maps.Marker({
      position: {lat: 41.998045, lng: -87.691950},
      map: map,
      title: 'A really good Nihari spot.'
  });

 const restaurant9 = new google.maps.Marker({
      position: {lat: 24.866154, lng: 67.078181},
      map: map,
      title: 'A delicious place to eat in Pakistan.'
  });

 const restaurant10 = new google.maps.Marker({
      position: {lat: 43.645964, lng: -88.033743},
      map: map,
      title: 'If you want an cookie ice-cream sandwich.'
  });

 const restaurant11 = new google.maps.Marker({
      position: {lat: 43.646045, lng: -79.409491},
      map: map,
      title: 'Yummy ube ice-cream served in a black cone.'
  });
}

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Person');
  data.addColumn('number', 'Percentage');
        data.addRows([
          ['Men', 72],
          ['Women', 28],
        ]);

  const options = {
    'title': 'The Distribution of Women & Men in the Science and Engineering Workforce',
    'fontSize': 15,
    'backgroundColor': 'whitesmoke',
    'width':550,
    'height':550,
    'colors': ['#ffbdf1', '#FBDB87']
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('chart-container'));
  chart.draw(data, options);
}