/* eslint-disable */
import Vue from "vue";
import App from "./App";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

import VueCordova from "vue-cordova";
Vue.use(VueCordova, {
  optionTestKey: "optionTestValue"
});

Vue.use(MintUI);
// add cordova.js only if serving the app through file://
if (window.location.protocol === "file:" || window.location.port === "3000") {
  var cordovaScript = document.createElement("script");
  cordovaScript.setAttribute("type", "text/javascript");
  cordovaScript.setAttribute("src", "cordova.js");
  document.body.appendChild(cordovaScript);
}

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
  data: function() {
    return {
      cordova: Vue.cordova
    };
  }
});
