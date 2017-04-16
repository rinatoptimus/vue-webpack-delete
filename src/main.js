import Vue from 'vue';
import App from './App.vue';
import Message from './Message.vue';
// my code begin
import QueryBrowserTab from './QueryBrowserTab.vue';
import QueryBrowserContainer from './QueryBrowserContainer.vue';
// my code end

Vue.component('app-message', Message);

// my code begin
Vue.component('app-querybrowsertab', QueryBrowserTab);
Vue.component('app-querybrowsercontainer', QueryBrowserContainer);
// my code end

new Vue({
  el: '#app',
  render: h => h(App)
})
