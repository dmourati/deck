'use strict';
import 'zone.js';
import 'reflect-metadata';
import {UpgradeAdapter} from 'angular2/upgrade';
// deck is reliant on a million jquery features; we need to load it before angular so that angular does not
// try to use its jqLite implementation.
global.$ = global.jQuery = require('jquery');

var adapter = new UpgradeAdapter();
window.adapter = adapter;

let angular = require('angular');

module.exports = angular.module('netflix.spinnaker', [
  require('./modules/netflix/netflix.module.js'),
  require('./modules/core/core.module.js'),
  require('./modules/amazon/aws.module.js'),
  require('./modules/google/gce.module.js'),
  require('./modules/cloudfoundry/cf.module.js'),
  require('./modules/titan/titan.module.js'),
  require('./modules/azure/azure.module.js'),
  require('./modules/kubernetes/kubernetes.module.js'),
]);

adapter.bootstrap(document.body, ['netflix.spinnaker'], {strictDi: false});

