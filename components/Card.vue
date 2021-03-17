<template>
  <div class="container">
    <div class="column">
      <div class="card organization-card">
        <div class="card-content">
          <div class="card-org-content">

            <div class="sub-header">
              <p>
                Organization
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

    @Prop({default: ' '}) cardData: CauseDataType

  }
</script>

<style>
  .card {
    min-height: 500px;
  }
  .organization-card {
    box-shadow: gray;
  }
  .sub-header {
    color: #E63E60;
    font-size: 12px;
  }
</style>