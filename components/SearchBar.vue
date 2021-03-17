<template>
  <section>
    <Header />
    <div class="container search-container">
      <div class="search-header">
        <p class="search-title">
          Search effective charitable organisations
        </p>
        <div class="search">
          <input v-model="searchInput" class="search-bar" v-on:keyup.enter="onSearch()" placeholder="e.g. Health"/>
          <div class="search-bar-icons">
            <img class="close-icon" @click="onClose()" src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png"/>
            <span class="vertical-line"></span>
            <svg class="search-icon svg-icon search-icon" @click="onSearch()" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { SearchParams, SearchResponsePaginationDataType } from '@/src/types'
  import Header from '@/components/Header'

  @Component({
    componenets: {
      Header,
    }
  })
  export default class SearchBar extends Vue {
    data() {
      return {
        data: {} as SearchParams,
        response: {} as SearchResponsePaginationDataType,
        searchInput: '',

      }
    }
    onSearch(data: searchParams, response: SearchResponsePaginationDataType): void {
      //create data interface to send to api
      this.data = {
        query: this.searchInput,
        entities: [ {
          entity: "causes",
          perPage:  6,
          currentPage: 1,
        }],
      };
      //call Kinder API withawait/async

      //will return?
    }

    onClose(): void {
      console.log("somethings to do...")
    }
  }
  </script>

  <style>
  .search-container {
    top: -100px; }
  .search {
    display: flex;
    flex-direction: row;
    border: 1px solid #bdbcbc;
    padding: 2px;
    color: white;
    background-color: white; }
  .search-bar {
    padding: 8px;
    width: 100%; }
  .search-title {
    font-size: 20px;
    font-weight: bold; }
  input {
    flex-grow:2;
    border:none; }

  input:focus {
    outline: none; }

  .search-bar-icons {
    padding: 2px;
    margin-right: 4px;
    display: flex; }
  .close-icon {
    opacity: 0.7;
    cursor: pointer;
    width: 16px;
    height: 16px;
    margin: auto;
    margin-right: 8px; }
  .vertical-line{
    display: inline-block;
    border-left: 1px solid #ccc;
    height: 18px;
    margin: auto;
    margin-left: -1px; }
  .search-icon {
    cursor: pointer;
    width: 17px;
    margin-left: 8px;
    margin-right: 3px; }
</style>