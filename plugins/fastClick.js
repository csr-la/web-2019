import Vue from "vue";
import FastClick from "fastclick";

Vue.mixin({
  mounted: () => {
    if ("addEventListener" in document) {
      document.addEventListener(
        "DOMContentLoaded",
        function() {
          FastClick.attach(document.body);
        },
        false
      );
    }
  }
});
