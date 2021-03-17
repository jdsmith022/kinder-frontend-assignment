<template>
  <section class="section">
    <div class="container">
      <div v-if="sortedData">
        awesome
        {{ sortedData }}
        <h3 class="search-organizations-header">
          Organizations matching '{{ searchResults.searchParam }}'
          <p class="total-search-result">
            ( {{ searchResults.totalFound }} )
          </p>
        </h3>
          <div class="columns is-multiline is-mobile">
            <div v-for="(set, index) in sortedData" :key="index">
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
      // isLoading: false as boolean,
      // arrangedData: {} as ArrangedDataType,
    };
  }

  //believe hasPassedPrelimiary is field basicPassed
  /**Arranges set for Card order*/
  // arrangeCardData(cardData: CauseDataType): void {
  //   let stage:Array<number> = []
  //   let index:number = 0

  //   console.log("whileee")
  //   while (index < 6 && this.cardData[index]) {
  //     let basicPass:boolean = this.cardData[index].hasPassedPreliminary
  //     let published:string = this.cardData[index].publishedAt
  //     this.arrangedData[index] = {
  //       officialName: this.cardData[index].officialName,
  //       tagline: this.cardData[index].tagline,
  //       category: this.cardData[index].categories,
  //       stage: -1,
  //       images: this.cardData[index].images,
  //       logo: this.cardData[index].logo,
  //       website: this.cardData[index].website
  //     }
  //     if (basicPass === true && published != false) {
  //       this.arrangedData[index].stage = 1
  //     } else if (basicPass === true && published === false) {
  //       this.arrangedData[index].stage = 0
  //     } else if (basicPass === false) {
  //       this.arrangedData[index].stage = -1;
  //     }
  //     index++;
  //   }
  //   console.log("arrange", this.arrangedData)
  //   this.putDataInNewOrder(this.arrangedData, index - 1)
  // }

  // putDataInNewOrder(arrangedData: ArrangedDataType, subdex:number): void {
  //   let temp:ArrangedDataType = {}
  //   let index:number = 0
  //   let length:number = subdex

  //   while (index < length) {
  //     while (subdex > 0 && this.arrangedData[subdex].stage < this.arrangedData[subdex - 1].stage) {
  //       console.log("sorting")
  //       temp = this.arrangedData[subdex]
  //       this.arrangedData[subdex] = this.arrangedData[subdex - 1]
  //       this.arrangedData[subdex - 1] = temp
  //       subdex--
  //     }
  //     index++
  //   }
  }

  // watch() {
  //   cardData(){ 
  //     this.arrangeCardData(this.cardData)
  //   }}

  // computed() {
  //   if (this.dataCard) {
  //     console.log("computed")
  //   }
  // }
  // beforeMount(){
  //   if (!this.cardData) {
  //     console.log("yp")
  //     setTimeout(() => {
  //         this.isLoading = false
  //     }, 2000)
  //   }
  //   if (this.cardData) {
  //     this.arrangeCardData()
  //   }
  // }

// }
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