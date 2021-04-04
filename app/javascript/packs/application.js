// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.dom-content-loaded');
  container.innerText = 'DOMContentLoaded is fired🔥';
});

document.addEventListener('turbolinks:load', function () {
  const container = document.querySelector('.turbolinks-load');
  container.innerText = 'turbolinks:load is fired🔥';
});
