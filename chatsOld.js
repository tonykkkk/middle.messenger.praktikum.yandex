import './style.css'
import chatModels from './api/chats.json'

import { chatView } from './src/modules/chats/components/chatCard/chatCard.js'
import './src/modules/chats/components/chatCard/chatCard.css'

import { mainLayout } from './src/layouts/main/main.js';
import './src/layouts/main/main.css';

import { searchFormView } from './src/modules/chats/components/search-form/search-form.js';
import  './src/modules/chats/components/search-form/search-form.css';

import { profileBar } from './src/modules/chats/components/profile-bar/profile-bar.js';
import  './src/modules/chats/components/profile-bar/profile-bar.css';

document.addEventListener("DOMContentLoaded", function(){
  console.log("DOM loaded");
document.querySelector('#app').innerHTML += mainLayout();
document.querySelector('.leftPanel').innerHTML += profileBar();
document.querySelector('.leftPanel').innerHTML += searchFormView();

chatModels.forEach(chatModel=>{
  document.querySelector('.leftPanel').innerHTML += chatView(chatModel);
})
//document.querySelector('#app').innerHTML = chatView();
});


