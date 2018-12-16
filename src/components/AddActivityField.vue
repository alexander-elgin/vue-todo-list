<template>
  <v-form ref="form">
    <v-text-field v-model="newActivityTitle"
                  color="cyan"
                  label="What to do?"
                  @keydown.enter.prevent="add"
                  :rules="[rules.minLength, rules.unique]"
                  ref="field"
                  required
                  append-outer-icon="send"
                  @click:append-outer="add"
    />
  </v-form>
</template>

<script>
const MIN_LENGTH = 3

export default {
  name: 'AddActivityField',
  data () {
    return {
      newActivityTitle: '',
      isValid: {
        minLength: value => (value !== undefined) && (value.length >= MIN_LENGTH),
        unique: value => this.$store.state.activities.filter(activity => activity.title === value).length === 0
      },
      rules: {
        minLength: value => (
          this.isValid.minLength(value) || `The activity name should be at least ${MIN_LENGTH} characters long`
        ),
        unique: value => this.isValid.unique((value || '').trim()) || `The activity is already in the list`
      }
    }
  },
  methods: {
    add () {
      if (this.isValid.minLength(this.newActivityTitle) && this.isValid.unique(this.newActivityTitle)) {
        this.$store.dispatch('add', this.newActivityTitle.trim())
        this.newActivityTitle = ''
        this.$refs.field.blur()
        this.$refs.form.reset()
      }
    }
  }
}
</script>
