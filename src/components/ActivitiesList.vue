<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-toolbar color="cyan">
        <v-toolbar-title>Todo List</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <AddActivityField ref="inputFeild" />
        <v-list subheader>
          <Activity v-for="(activity, index) in activities" :key="index" :activity="activity" />
        </v-list>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import Activity from './Activity'
import AddActivityField from './AddActivityField'

export default {
  name: 'ActivitiesList',
  components: {
    Activity,
    AddActivityField
  },
  data () {
    return {
    }
  },
  computed: {
    activities () {
      return this.$store.state.activities
    }
  },
  methods: {
    add () {
      this.$refs.inputFeild.add()
    }
  }
}
</script>

<style>
</style>
