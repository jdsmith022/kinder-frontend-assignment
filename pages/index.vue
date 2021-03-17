<template>
  <section>
    <SearchBar />
  </section>
</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator'
  import SearchBar from '@/components/SearchBar'

  @Component({
    components: {
      SearchBar
    }
  })
export default class index extends Vue {
}

</script>
