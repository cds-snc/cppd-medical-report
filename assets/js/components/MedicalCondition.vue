<template></template>

<script>
export default {
  data() {
    return {
      name: '',
      symptom_onset: '',
      clinical_impairment: '',
      condition_outlook: '',
      condition_outlook_unknown: '',
      condition_duration: '',
      symptom_frequency: '',
      documents: [],
    }
  },
  props: ['conditions'],
  methods: {},
  mounted() {
    console.log('Component ready.')
  },
}
</script>