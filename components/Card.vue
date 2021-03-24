<template>
  <section>
    <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="true" style="position: relative"></b-loading>
    <div class="is-multiline">
      <div class="card organization-card">
        <div class="card-content">
          <div class="card-org-content">
            <div v-if="set.images" class="org-image">
              <img :src="set.images" :href="set.website" target="blank">
            </div>
            <div class="sub-header">
              <p>
                Organization
              </p>
            </div>
            <div v-if="set.officialName" class="org-name">
              <p>
                {{ set.officialName }}
              </p>
            </div>  
            <div v-if="set.tagline" class="org-tagline">
              {{ set.tagline }}
            </div>
            <div v-if="set.category" class="org-categories">
              <!-- <div class="categories" : -->
              <div v-for="(cat, index) in set.category.data" :key="index">
                <div v-if="index > 0">
                  •
                </div>
                <p class="category-name">
                  {{ cat.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="progress-bar">
          <b-progress type="is-danger" :value="getProgressBarValue(set.stage)"></b-progress>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>

  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { CauseDataType } from '@/src/types'

  @Component({})

  //type interface enabled
  export default class Card extends Vue {

    data() {
      return {
        isLoading: false as boolean,
        isFullPage: false as boolean,
        progress: 0 as number
      }
    }

    @Prop({default: ' '}) set: CauseDataType

    openLoading() {
      this.isLoading = true
      setTimeout(() => {
          this.isLoading = false
      }, 2000)
    }

    /** sets value of progress bar based on stage value
     *
     * Stage value is based on requirements set out by Kinder in the assignment
    */
    getProgressBarValue(status:number) {
      if (status === 1) {
        this.progress = 100;
      } else if (status === 0) {
        this.progress - 66;
      } else if (status === -1) {
        this.progress = 33;
      }
      return this.progress
    }

    beforeMount(){
      this.openLoading()
    }

  }
</script>

<style>
  .card {
    min-height: 370px;
    /* min-width: 285px;
    max-width: 285px; */
    border-radius: 0rem;
  }
  .organization-card {
    box-shadow: gray;
  }
  .sub-header {
    color: #E63E60;
    font-size: 10px;
  }
  .org-name {
    font-weight: bold;
    padding: 8px 0px;
  }
  .org-tagline {
    font-size: 12px;
    padding-bottom: 8px;
  }
  .org-categories {
    font-size: 10px;
    color: gray;
  }
  .category-name {
    display: flex;
    flex-direction: row;
    padding-right: 4px;
  }
  .progress {
    border-radius: 0px !important;
    height: 3px !important;
  }
</style>