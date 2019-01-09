/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*<link rel="stylesheet" href="../src/css/components.css">*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/neon-animation/web-animations.js';

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import 'paper-autocomplete/paper-autocomplete.js';
import 'paper-autocomplete-chips/paper-autocomplete-chips.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import 'vaadin-checkbox/vaadin-checkbox.js';
import './model-search.js';
import './view-model.js';
import './model-configuration.js';
import './not-found.js';
import '/node_modules/@polymer/app-layout/app-layout.js';
import '/node_modules/@polymer/app-layout/app-header/app-header.js';
import '/node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';
import '/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '/node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import '/node_modules/paper-chip/paper-chip.js';
import '/node_modules/@polymer/paper-input/paper-input.js';
import '/node_modules/@polymer/paper-button/paper-button.js';
import '/node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import '/node_modules/@polymer/iron-icon/iron-icon.js';
import '/node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '/node_modules/@polymer/paper-listbox/paper-listbox.js';
import '/node_modules/@polymer/paper-item/paper-item.js';
import '/node_modules/@polymer/neon-animation/web-animations.js';
import '/node_modules/@polymer/paper-toggle-button/paper-toggle-button.js';
import '/node_modules/@polymer/paper-card/paper-card.js';
import './my-icons.js';
import 'vaadin-button/vaadin-button.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

class ModelSearch extends PolymerElement {
  static get template() {
    return html`
    <style>
      html, body {
          margin: 0;
          font-family: 'Roboto', sans-serif;
          -webkit-font-smoothing: antialiased;
          max-height: 368px;
        }

        paper-card{
          color: black;
          width: 50%;
          word-wrap: break-word;
          margin: 10px;
        }

        paper-input{
          width: 25%;
        }

        paper-button{
          background-color: #eee
        }

        paper-toolbar {
          background-color: #f2f1ed;
          padding: 10px;
        }

        .card-body {
          padding: 15px;
        }

        .card-actions {
          padding: 10px;
        }

        .card-content {
          padding: 10px;
        }

        #search-bar {
          width: 50%;
        }

        #options {
          width: 50%;
        }

        #search-input {
          width: 1000%;
        }
        #searchIcon {
          width: 50%;
        }
        #clearIcon {
          margin-top: -40px;
          margin-left: 51%;
          width: 50%;
        }

        #heading {
          margin-left: 20px;
        }

        #category {
          margin-right: 10px;
          width: 100%
        }

        #version {
          margin-left: 10px;
        }

        #styled{
          width: 35%;
        }
        .primary{
          cursor: pointer;
          border: 1px solid transparent;
          font-size: 14px;
          line-height: 1.846;
          border-radius: 3px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          color: #ffffff;
          background-color: #2196f3;
        }

        .dropdown-content{
          width: 100%;
        }

        .grid {
          margin-left: 20px;
          margin-right: 20px;
          @apply --layout-horizontal;
          @apply --layout-wrap;
          @apply --layout-justified;
          -webkit-flex-basis: 50%;
          flex-basis: 50%;
          max-width: 100%;
        }
        .box {
          @apply --layout-vertical;

          background-color: #FEFEFE;
          border: 1px solid var(--app-accent-color);
          border-radius: 4px;
          background-size: 100% auto;
          background-position: 0px 24px;

          margin: 5px;
          margin-left: 0px;
          min-height: 190px;

          display: block;
          text-decoration: none;
          text-align: center;
          position: relative;
          width: 47.5%;
          padding: 15px;
        }
        .box .inner {
          background: rgba(255,255,255,0.5);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .flex-center-justified {
          @apply --layout-horizontal;
          @apply --layout-center-justified;
        }

        .flex-end-justified {
          margin-right: 40px;
          @apply --layout-horizontal;
          @apply --layout-end-justified;
        }

        paper-chip.custom-background {
          --paper-chip-background-color: #eee;
        }
        paper-chip{
          font-weight: bold;
        }

        .search-icon{
          cursor: pointer;
        }

        .clear-icon{
          cursor: pointer;
        }



    </style>

    <div class="container flex-center-justified">
      <div><h1>Model Catalog Explorer</h1></div>
    </div>
    <div class="container flex-center-justified">
      <div id="options">
        <paper-dropdown-menu id="category" label="Select Category">
          <paper-listbox slot="dropdown-content" class="dropdown-content">
          <dom-repeat items="{{cts}}">
            <template>
              <paper-item>[[item.name]]</paper-item>
            </template>
          </dom-repeat>
          </paper-listbox>
        </paper-dropdown-menu>
        <vaadin-checkbox id="version" checked="">Retrieve latest version</vaadin-checkbox>
      </div>
    </div>
    <div class="container flex-center-justified">
      <div id="search-bar">
        <!--<paper-input id="searchInput" label="Search Model Name" value="{{searchParameter}}"></paper-input>-->
        <paper-autocomplete-chips id="searchInput" label="Search Model Name" for="searchInput" source="[[accounts]]">
        </paper-autocomplete-chips>
        <br>
        <div class="grid">
          <vaadin-button theme="contrast primary" class="search-icon" id="searchIcon" title="Search" on-click="searchHandler" slot="suffix" prefix="" icon="search"><iron-icon icon="icons:search" slot="prefix"></iron-icon>Search
          </vaadin-button>
          <vaadin-button theme="error primary" class="clear-icon" id="clearIcon" title="Clear" on-click="clearHandler" slot="suffix" prefix="" icon="search"><iron-icon icon="icons:close" slot="prefix"></iron-icon>Clear
          </vaadin-button>
        </div>
      </div>
    </div>
    <br>
    <div class="container flex-end-justified">
      <div><b>Displaying [[numberofRes]]/[[totalRes]] results</b></div>
    </div>
    <br>
    <div class="grid flex-center-justified">
      <dom-repeat items="{{tempResults}}">
      <template>
        <div class="box">
         <div class="card-content" identity\$="{{index}}">
              <h2><strong>[[item.label]]
                &nbsp;<a href="[[item.link]]" target="_blank" title="View Documentation" hidden="[[item.avail]]" style="color: #000;"><iron-icon icon="book"></iron-icon></a>
                &nbsp;<paper-chip label="Total Versions: [[item.version.len]]" class="custom-background" no-hover=""></paper-chip></strong></h2>
              <p>[[item.description]]</p>
              <a href="[[routePath]]view-model"><vaadin-button theme="primary" label\$="{{item.label}}" model\$="{{item.model}}" on-click="goToModel" raised="">Explore [[item.label]]</vaadin-button></a>
            </div>
        </div>
        </template>
      </dom-repeat>
    </div>

      <!-- <paper-button on-click="buttonPress">Fire</paper-button> -->
    <!-- </app-header-layout> -->
`;
  }

  static get is() { return 'model-search'; }
  static get properties() {
    return {
      queries: {
        type: Array,
        value: [],
        observer: "queriesChange"
      },
      searchParameter: String,
      models: Array,
      dummy: Array,
      queriedModels: Array,
      modelSelected: String,
      searchResults: Array,
      tempResults: Array,
      numberofRes: String,
      totalRes: String,
      results: Array,
      cts: Array,
      finResults: Array,
    };
  }

  queriesChange(newValue, oldValue) {
    console.log(newValue);
    console.log(oldValue);
  }

  goToModel(e) {
    console.log(e.target);
    var _label = e.target.getAttribute("label");
    console.log("From", _label);
    var _model = e.target.getAttribute("model");
    var _parent = document.querySelector("mint-explorer-app");

    _parent.modelSelected = {
      model: _model,
      label: _label
    }
    console.log("Here", _parent.modelSelected);
    var _pages = dom(_parent.root).querySelector("#pages");
    console.log(_pages);
    console.log(_pages.selected);
    _pages.selected = "view-model";
    window.dispatchEvent(new CustomEvent('location-changed'));
    //this.set('route.path', '/view-model');
    console.log(_pages.selected);

  }

  searchHandler(){
    var searchString = dom(this.root).querySelector("#searchInput").value;
    console.log("Done", searchString)
    var filtered = [];
    console.log(this.results)
    for(var i=0; i<this.results.length; ++i) {
      if(this.results[i].label === searchString){
        var obj = JSON.parse(JSON.stringify(this.results[i]));
        filtered.push(obj);
      }
    }
    this.tempResults = filtered;
    this.totalRes = this.tempResults.length.toString();
    this.numberofRes = this.tempResults.length.toString();
    console.log(this.searchResults);
  }

  displayLabel(tp){
    if(tp.length != 0){
      var temp = []
      for(var i=0; i < this.finResults.length; i++){
        for(var j=0; j < tp.length; j++){
          if(tp[j] === this.finResults[i].model){
            temp.push(this.finResults[i])
            break
          }
        }
      }
      console.log("From Disp", this.finResults)
      this.results = temp;
      this.totalRes = temp.length.toString();
      this.searchResults = temp;
      var newArray = temp.slice();
      this.tempResults = newArray.splice(0, 10);
      this.numberofRes = this.tempResults.length.toString();
    }
  }

  clearHandler(){
    location.reload();
  }

  getVersion(versions){
      // Get All the related Versions for the model
      console.log("Temp", versions)
      var _self = this;
      var _parent = document.querySelector("mint-explorer-app");
      // Get Versions
      var qs = _parent.queries[6].query
      var r = []
      var finVersions = []
      for(var i = 0; i < versions.length; i++){
        $.ajax({
          url: qs,
          type: "GET",
          data:{
              mv: versions[i]
          },
          cache: false,
          timeout: 5000,
          async: false,
          success: function(data) {
            r = data.results.bindings
            var temp = []
            for(var i = 0; i < r.length; i++){
              temp = r[i].prop.value.split("#")
              if(temp[1] === "hasVersionId"){
                finVersions.push(r[i].value.value)
              }
            }
          },
          error: function(jqXHR, exception) {
              var msg = '';
              if (jqXHR.status === 0) {
                  msg = 'Not connected.\n Verify Network.';
              }
              else if (jqXHR.status == 404) {
                  msg = 'Requested page not found. [404]';
              }
              else if (jqXHR.status == 500) {
                  msg = 'Internal Server Error [500].';
              }
              else if (exception === 'parsererror') {
                  msg = 'Requested JSON parse failed.';
              }
              else if (exception === 'timeout') {
                  msg = 'Time out error.';
              }
              else if (exception === 'abort') {
                  msg = 'Ajax request aborted.';
              }
              else {
                  msg = 'Uncaught Error.\n' + jqXHR.responseText;
              }
          }
        });
      }
      console.log("Final Versions", finVersions)
      return finVersions
  }

  populateSearchResults() {
    var results = [];
    var cats = [];
    var versions = [];
    var _self = this
    var categories = new Set();
    var _parent = document.querySelector("mint-explorer-app");
    var query = _parent.queries[3].query
    console.log("hfkjdf")
    console.log(query)
    $.ajax({
      url: query,
      type: "GET",
      cache: false,
      timeout: 5000,
      async: false,
      complete: function() {
          console.log("GET request sent");
      },

      success: function(data) {
          var x = data.results.bindings
          var res = []
          for(var i = 0;i < x.length; i++){
            var result = {}
            versions = [];
            result.model = x[i].model.value
            result.label = x[i].label.value
            result.description = x[i].desc.value
            result.category = x[i].categories.value
            if('doc' in x[i]){
              result.link = x[i].doc.value
              result.avail = false
            }
            else{
              result.avail = true
            }
            categories.add(x[i].categories.value)
            if(x[i].versions.value.includes(",")){
              versions = x[i].versions.value.split(", ")
            }
            else{
              versions.push(x[i].versions.value.trim())
            }
            res = _self.getVersion(versions)
            var h = {
              data: res,
              len: res.length
            }
            result.version = h
            results.push(result)
          }
          console.log("This", results)
          cats = Array.from(categories);
      },

      error: function(jqXHR, exception) {
          var msg = '';
          if (jqXHR.status === 0) {
              msg = 'Not connected.\n Verify Network.';
          }
          else if (jqXHR.status == 404) {
              msg = 'Requested page not found. [404]';
          }
          else if (jqXHR.status == 500) {
              msg = 'Internal Server Error [500].';
          }
          else if (exception === 'parsererror') {
              msg = 'Requested JSON parse failed.';
          }
          else if (exception === 'timeout') {
              msg = 'Time out error.';
          }
          else if (exception === 'abort') {
              msg = 'Ajax request aborted.';
          }
          else {
              msg = 'Uncaught Error.\n' + jqXHR.responseText;
          }
          console.log(msg);
        }
    });

    /*for(var i = 0; i < this.models.length; ++i) {
      var result = {};
      result.model = this.models[i].model.value;
      result.label = this.models[i].label.value;
      result.avail = false;
      for(var j = 0; j < modelDescriptions.length; ++j) {
        if(modelDescriptions[j].model == this.models[i].model.value) {
          result.description = modelDescriptions[j].description;
          if('link' in modelDescriptions[j]) {
            result.link = modelDescriptions[j].link;
          }
          else{
            result.avail = true;
          }
        }
      }
      results.push(result);
    }*/
    var cts = [{'name': ''}]
    console.log(cats)
    for(var i = 0; i < cats.length; i++){
      cts.push({
        "name": cats[i]
      })
    }
    this.cts = cts
    this.results = results;
    this.totalRes = results.length.toString();
    this.searchResults = results;
    var newArray = results.slice();
    this.tempResults = newArray.splice(0, 10);
    this.numberofRes = this.tempResults.length.toString();
    console.log("Got", this.results)
    console.log("Complete", this.numberofRes)
  }

  getModelsByCategory(category){
    var _parent = document.querySelector("mint-explorer-app");
    var qt = _parent.queries[4].query;
    var query = qt + "&cat=" + category
    var catsByModel = []
    console.log("Done", query)
    $.ajax({
      url: query,
      type: "GET",
      cache: false,
      timeout: 5000,
      async: false,
      complete: function() {
          console.log("GET request sent");
      },

      success: function(data) {
        var x = []
        x = data.results.bindings
        for(var i=0; i< x.length; i++){
          catsByModel.push(x[i].model.value)
        }
      },

      error: function(jqXHR, exception) {
          var msg = '';
          if (jqXHR.status === 0) {
              msg = 'Not connected.\n Verify Network.';
          }
          else if (jqXHR.status == 404) {
              msg = 'Requested page not found. [404]';
          }
          else if (jqXHR.status == 500) {
              msg = 'Internal Server Error [500].';
          }
          else if (exception === 'parsererror') {
              msg = 'Requested JSON parse failed.';
          }
          else if (exception === 'timeout') {
              msg = 'Time out error.';
          }
          else if (exception === 'abort') {
              msg = 'Ajax request aborted.';
          }
          else {
              msg = 'Uncaught Error.\n' + jqXHR.responseText;
          }
          console.log(msg);
      }
    });
    console.log("BOB" + catsByModel)
    return catsByModel;
  }

  ready() {
    super.ready();
    var _self = this;
    _self.populateSearchResults();

    this.finResults = this.results
    var states = [];
    var opts = [];
    console.log("Hellop");
    console.log(this.results);
    console.log(this.cts)
    for(var i = 0; i < this.results.length; ++i) {
      states.push({
        "text": this.results[i].label+" "+this.results[i].description,
        "value": this.results[i].label
      })
      opts.push(this.results[i].label)
    }
    console.log(opts)


    var autocompleteSuggestions = dom(this.root).querySelector('paper-autocomplete-chips');
    var dropdownContent = dom(this.root).querySelector('paper-dropdown-menu');

    dropdownContent.addEventListener('selected-item-changed', function(event){
      // Write function to implement Search for specific element
      var inp = dom(_self.root).querySelector('#category')
      var category = inp.value
      var tp = [];
      if(category != ''){
        tp = _self.getModelsByCategory(category);
        _self.displayLabel(tp);
      }
      else{
        console.log("Empty String")
        _self.populateSearchResults();
        this.finResults = this.results
      }

    })
    autocompleteSuggestions.source = opts;

    autocompleteSuggestions.addEventListener('autocomplete-selected', function (event) {
      //var paperToast = document.querySelector('paper-toast');
      //var selected = event.detail.text;
      //paperToast.text = 'Selected: ' + selected;
      //paperToast.show();
      var input = dom(_self.root).querySelector("#searchInput");
      input.value = event.detail.value;
      console.log(input.value)
      _self.searchHandler()
    });
  }
}

window.customElements.define(ModelSearch.is, ModelSearch);
