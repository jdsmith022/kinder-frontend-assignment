<template>
  <div class="column">
    <div class="card organization-card">
      <div class="card-content">
        <div class="card-org-content">
          <!-- {{ set }} -->
          <div v-if="set.images" class="org-image">
            <img :src="set.images.data.files.data.url">
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
          <div class="org-categories">
            <div v-if="set.categories.data" v-for="(category, index) in set.categories.data" :key="index">
              <div v-if="index > 0">
                •
              </div>
              <p class="category-name">
                {{ category.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { CauseDataType } from '@/src/types'

  @Component({})

  //type interface enabled
  export default class Card extends Vue {

    data() {
      return {
        orderedData: {} as CauseDataType,
        searchInput: '',
        pagination: '1',
        totalFound: '',

      }
    }

    @Prop({default: ' '}) set: CauseDataType
    //stage one = basicPassed === false =.?  hasPassedPreliminary
      //1/3 progress bar
    //stage two = publishedAt === false
      //2/3 proggress bar
    //starge three = basicPassed === true && publishedAt === not null
      //full progress bar

    // if in stage 2 or 3 
      // show gray box with text: 
    //       Membership pending
    // This organisation has no published profile

  }
</script>

<style>
  .card {
    min-height: 345px;
    min-width: 285px;
    max-width: 285px;
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
</style>