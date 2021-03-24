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
          <b-field>
          </b-field>
          <div class="search-bar-icons">
            <img class="clear-icon" @click="onClear(); openLoading" src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png"/>
            <span class="vertical-line"></span>
            <svg class="search-icon svg-icon search-icon" @click="onSearch()" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
          </div>
        </div>
      </div>
      <div class="search-results">
        <Results :searchResults="searchResults" :sortedData="sortedData"></Results>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { ApiDataType, SearchResponsePaginationDataType, CauseDataType, ArrangedDataType } from '@/src/types'
  import { getOrganizations } from '@/src/http'
  import Header from '@/components/Header'
  import Results from '@/components/Results'


  @Component({
    componenets: {
      Header,
      Results
    }
  })
  export default class SearchBar extends Vue {

    data() {
      return {
        searchData: {} as ApiDataType,
        searchResults: {} as SearchDataType,
        cardData: {} as CauseDataType,
        sortedData: {} as ArrangedDataType,
        pagination: '1' as string,
        searchInput: '' as string,
        totalFound: '' as number,
      };
    }

    /** Queries Kinder API and handles response*/
    onSearch(searchData: ApiDataType, response: SearchResponsePaginationDataType, cardData: CauseDataType, sortedData: ArrangedDataType): void {
      this.searchData = {
        query: this.searchInput,
        entities: [ {
          entity: "causes",
          perPage:  6,
          currentPage: this.pagination
        }],
      };
      getOrganizations(this.searchData).then(response => {
        this.cardData = response.causes.data;
        this.searchResults = {
          totalFound: response.causes.meta.pagination.total,
          searchParam: this.searchInput
        };
        this.pagination = this.pagination + 1;
        let index:number = this.arrangeCardData(this.cardData, this.sortedData);
        this.sortDataOrder(index - 1, this.sortedData);
        console.log("sorted data ", this.sortedData);
      })
    }

    arrangeCardData(cardData: CauseDataType, sortedData: ArrangedDataType): number {
      let stage:Array<number> = [];
      let index:number = 0;

      while (index < 6 && this.cardData[index]) {
        let basicPass:boolean = this.cardData[index].hasPassedPreliminary;
        let published:string = this.cardData[index].publishedAt;
        this.sortedData[index] = {
          officialName: this.cardData[index].officialName,
          tagline: this.cardData[index].tagline,
          category: this.cardData[index].categories,
          stage: '',
          images: this.cardData[index].images,
          logo: this.cardData[index].logo,
          website: this.cardData[index].website
        };
        if (basicPass === true && published != false) {
          this.sortedData[index].stage = 1;
        } else if (basicPass === true && published === false) {
          this.sortedData[index].stage = 0;
        } else if (basicPass === false) {
          this.sortedData[index].stage = -1;
        }
        index++;
      }
      return index - 1;
    }

    sortDataOrder(subdex:number, sortedData: ArrangedDataType ): void {
      let temp:ArrangedDataType = {};
      let index:number = 0;
      let length:number = subdex;

      while (index < length) {
        subdex = length;
        while (subdex > 0) {
          if (this.sortedData[subdex].stage > this.sortedData[subdex - 1].stage) {
            temp = this.sortedData[subdex];
            this.sortedData[subdex] = this.sortedData[subdex - 1];
            this.sortedData[subdex - 1] = temp;
          }
          subdex--;
        }
        index++;
      }
      return (this.sortedData);
    }

    //add button!
    onClear(): void {
      this.searchInput = '';
    }

  }

  </script>

  <style>
  .search-container {
    top: -115px;
  }
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
    font-weight: bold;
    padding-bottom: 8px; }
  input {
    flex-grow:2;
    border:none; }

  input:focus {
    outline: none; }

  .search-bar-icons {
    padding: 2px;
    margin-right: 4px;
    display: flex; }
  .clear-icon {
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