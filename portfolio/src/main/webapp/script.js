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

function sayHello() {
    fetch("/data").then(response => response.json()).then((text) => {
        const greetings = document.getElementById('hello-container');
        greetings.innerHTML = '';
        var i;
        for (i = 0; i < text.length; i++) {
          greetings.innerHTML += text[i];
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