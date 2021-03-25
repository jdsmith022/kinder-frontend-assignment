<template>
  <section>
    <div class="container">
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
                {{ set.category.data.name }}
                </div>
              </div>
              <div class="membership-box" v-if="set.stage === 0 || set.stage === -1">
                <div class="gray-box">
                  <p class="membership-title">
                    Membership pending
                  </p>
                   <p class="membership-paragraph">
                    This organisation has no published profile
                   </p>
                </div>
              </div>
            </div>
          </div>
          <div class="progress-bar">
            <b-progress type="is-danger" :value="getProgressBarValue(set.stage)"></b-progress>
          </div>
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
        progress: 0 as number,
        categoryString: '' as string
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
        this.progress = 66;
      } else if (status === -1) {
        this.progress = 33;
      }
      return this.progress
    }

  }
</script>

<style>
  .card {
    min-height: 290px;
    /* min-width: 285px;
    max-width: 285px; */
    border-radius: 0rem;
  }
  .card-content {
    position: relative;
    min-height: 290px;
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
  .membership-box {
    bottom: 24px;
    right: 24px;
    position: absolute;
    left: 24px;
  }
  .gray-box {
    background-color: #f7f7f7;
    border: 1px solid #e8e5e5;
    margin: auto;
    margin-top: 24px;
  }
  .membership-title {
    padding: 16px 16px 0px 16px;
    font-size: 13px;
    font-weight: 550;
    color: #868282;
  }
  .membership-paragraph {
    font-size: 12px;
    padding: 8px 16px 16px;
    color: gray;
  }
</style>