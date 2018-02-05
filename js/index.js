//use Vuex
Vue.use(Vuex);
// Vuex Store init
var store = new Vuex.Store({
  state: {
    name: 'Spinbachs',
    about: {},
    project: {},
    contact: {},
    texts: ["This Page is Under construction", "Thank You 4 the drop by", "See you Soon", "Bye"]
  }
});
//Global Pages
var About = {
  template: '<div>{{store.state.about}}</div>'
};
var Project = {
  template: '<div>{{store.state.project}</div>'
};
var Contact = {
  template: '<div>{{store.state.contact}}</div>'
};
//The Routes
var routes = [{ path: '/', name: 'About', component: About }, { path: '/project', name: 'Projects', component: Project }, { path: '/contact', name: 'Contact', component: Contact }];
//Create Router
var router = new VueRouter({
  mode: 'history',
  routes: routes
});
//Global Components

Vue.component('logo', {
  template: "<div class=\"cary\">\n      <div class=\"loadAnim\">   \n        <div class=\"loadeAnim1\"></div>\n        <div class=\"loadeAnim2\"></div>\n        <div class=\"loadeAnim3\"></div>\n      </div>\n    </div>"
});
Vue.component('nav-bar', {
  template: "<div class=\"navigation\" v-for=\"route in routes\">\n      <router-link :to=\"{ name: route.name}\"> {{ route.name }} </router-link>\n    </div>"
});
Vue.component('head-bar', {
  data: function data() {
    return { text: "Pleas stand by..." };
  },

  template: "<content>\n      <h1>{{ store.state.name }}</h1>\n      <h2>{{ text }}</h2>\n      <logo></logo>\n    </content>",
  created: function created() {
    var _this = this;

    var count = 0;
    setInterval(function () {
      count++;
      if (count % 5 === 0) {
        _this.text = store.state.texts[count / 5];
        if (count / 5 == store.state.texts.length - 1) {
          count = 0;
        }
      }
    }, 1500);
  }
});
Vue.component('foot-bar', {
  data: function data() {
    return {
      author: 'Zsolt Kiss',
      email: 'dzsingis@gmail.com',
      Href: './DaLetter.pdf'
    };
  },

  template: "<footer>\n      <ul>\n        <li>\n          <h2>\n            <a class=\"personal\" href=\"{{Href}}\"><i class=\"glyphicon glyphicon-user\"></i></a>\n            {{ author }}\n          </h2>\n        </li>\n        <li>\n          <i class=\"glyphicon glyphicon-envelope\"></i>\n          <a class=\"personal\" href=\"mailto:{{email}}\" _trarget=\"top\">{{email}}</a>\n        </li>\n      </ul>\n    </footer>"
});
// Create App
new Vue({
  store: store,
  router: router
}).$mount('#app');