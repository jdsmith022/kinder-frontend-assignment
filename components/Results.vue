<template>
  <section class="section">
    <div class="container">
      <h3 v-if="searchResults.searchParam" class="search-organizations-header">
        Organizations matching '{{ searchResults.searchParam }}'
        <p v-if="searchResults.totalFound" class="total-search-result">
          ( {{ searchResults.totalFound }} )
        </p>
      </h3>
      <div v-for="(set) in cardData"class="columns is-mobile">
        <Card :set="cardData"/>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>

import { Component, Prop, Vue } from 'vue-property-decorator'
import { SearchDataType, CauseDataType } from '@/src/types'
import Card from '@/components/Card'

@Component({
  components: {
      Card,
    }
  })

export default class Results extends Vue {

  @Prop({default: ' '}) searchResults: SearchDataType
  @Prop({default: ' '}) cardData: CauseDataType


}
</script>

<style>
  .search-organizations-header {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    padding-right: 8px;
  }
  .total-search-result {
    font-weight: normal;
    color: gray;
    opacity: 0.5;
  }
</style>