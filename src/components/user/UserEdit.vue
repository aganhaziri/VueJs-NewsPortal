<template>
<div class="container features">
     <h3>Edit the User</h3>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
    <form @submit="onSubmit">
    <div class="form-group">
    <input type="text" class="form-control" placeholder="Name" v-model="contacts.name">
    </div>
    <div class="form-group">
    <input type="email" class="form-control" placeholder="Email" v-model="contacts.email">
    </div>
    <div class="form-group">
    <textarea class="form-control" rows="4" placeholder="Enter your comments about site" v-model="contacts.description"></textarea>
    </div>
    <input type="submit" class="btn btn-secondary btn-block" value="Send">
    </form>
    </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'EditContacts',
  data () {
    return {
      contacts: {}
    }
  },
  created () {
    axios.get(`http://localhost:4000/contacts/` + this.$route.params.id)
    .then(response => {
      this.contacts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit () {
      axios.put(`http://localhost:4000/contacts/` + this.$route.params.id, this.contacts)
      .then(response => {
        this.$router.push({
          name: 'user',
          //params: { id: this.$route.params.id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>