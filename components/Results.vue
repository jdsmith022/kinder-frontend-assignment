<template>
  <section style="padding: 3rem 0rem;">
    <div class="container">
      <div v-if="searchResults.totalFound > 0">
        <h3 class="search-organizations-header">
          Organizations matching '{{ searchResults.searchParam }}'
          <p class="total-search-result">
            ( {{ searchResults.totalFound }} )
          </p>
        </h3>
        <div class="columns is-multiline is-mobile" ref="element">
          <div v-for="(set, index) in sortedData" :key="index" class="column is-one-third">
            <b-loading :is-full-page="false" v-model="isLoading" :can-cancel="true" style="position: relative"></b-loading>
            <Card :set="set"/>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if="sortedData.length === 0">
          <h3 class="search-organizations-header">
            No orgaizations matching {{ searchResults.searchParam }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>

import { Component, Prop, Vue } from 'vue-property-decorator'
import { SearchDataType, CauseDataType, ArrangedDataType } from '@/src/types'
import Card from '@/components/Card'

@Component({
  components: {
      Card,
    }
  })

export default class Results extends Vue {

  @Prop({default: ' '}) searchResults: SearchDataType
  @Prop({default: ' '}) sortedData: ArrangedDataType

  data() {
    return {
      isLoading: false as boolean,
    };
  }

  open() {
    console.log("loadding bitchesss")
    const loadingComponent = this.$buefy.loading.open({
      container: this.isFullPage ? null : this.$refs.element
    })
    setTimeout(() => loadingComponent.close(), 1 * 1000)
  }

  created() {
    console.log("total ", this.searchResults);
      if (this.searchResults.totalFound > 0) {
        this.open()
      }
    }
  // openLoading() {
  //   this.isLoading = true
  //   setTimeout(() => {
  //       this.isLoading = false
  //   }, 2000)
  // }
}
</script>

<style>
  .search-organizations-header {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    padding-right: 8px; }
  .total-search-result {
    font-weight: normal;
    color: gray;
    opacity: 0.5; }
  .columns {
    margin: auto;
  }
</style>