"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Job = _interopRequireDefault(require("../views/Job.vue"));

var _JobEditor = _interopRequireDefault(require("../views/JobEditor.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/",
  name: "Home",
  component: _Home["default"]
}, {
  path: "/job/:id",
  name: "job",
  component: _Job["default"],
  props: true
}, {
  path: "/editor",
  name: "editor",
  component: _JobEditor["default"],
  props: true
}];
var router = new _vueRouter["default"]({
  mode: "history",
  routes: routes
});
var _default = router;
exports["default"] = _default;