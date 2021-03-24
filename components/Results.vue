<template>
  <section class="section" style="padding: 3rem 0rem;">
    <div v-if="sortedData">
      <h3 class="search-organizations-header">
        Organizations matching '{{ searchResults.searchParam }}'
        <p class="total-search-result">
          ( {{ searchResults.totalFound }} )
        </p>
      </h3>
        <div class="columns is-multiline is-mobile">
          <div v-for="(set, index) in sortedData" :key="index" class="column is-one-third">
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
      // isLoading: false as boolean,
      // arrangedData: {} as ArrangedDataType,
    };
  }
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
  .limit-flex {
  display: flex !important;
  flex-wrap: wrap;
  margin: auto;
  padding-bottom: 150px;
  justify-content: center; }
  .columns {
    margin: auto;
  }
</style>