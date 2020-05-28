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
      ['My favorite vegetable is spinach (or is that a leaf?)', 'I can speak English, Urdu & Japanese', 'I would love to go to the moon', 'Moosetracks is my favorite ice cream!',
      "My favorite color is purple", "I'm the youngest child", "I usually visit Toronto twice a year", "I love doing hair masks", "My favorite band is BTS", "My name with no vowels is Tb", 
      "I HATE olives", "If I were a punctuation I would definitely be a exclamation mark", "I once fell on my chin and hand to get it glued back together", "My favorite season is fall"];

  // Pick a random greeting.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}
