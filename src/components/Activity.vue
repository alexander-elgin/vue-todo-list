<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <v-checkbox color="cyan" v-model="activity.done">
      </v-checkbox>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title v-html="activity.title" v-bind:class = "[activity.done ? 'done' : '']"></v-list-tile-title>
    </v-list-tile-content>

    <v-list-tile-action>
      <v-icon color="cyan" @click="remove(activity)">delete</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Activity',
  props: ['activity'],
  data () {
    return {
    }
  },
  computed: {
    title () {
      return this.activity.title
    }
  },
  methods: {
    ...mapActions([
      'toggle',
      'remove'
    ])
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
