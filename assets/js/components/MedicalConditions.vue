<template>
  <div>
    <input type="hidden" name="conditions" v-bind="data_conditions" />

    <medical-condition condition></medical-condition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_conditions: [],
    }
  },
  props: ['conditions'],
  methods: {},
  mounted() {
    console.log('Component ready.')
  },
}
</script>