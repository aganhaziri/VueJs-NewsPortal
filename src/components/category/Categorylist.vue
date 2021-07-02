<template>

<div class="container features">
    <div class="row">
  <h3>Category Listing and Creating</h3>
</div>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
         <table class="table" >
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="categories in categoryfields" :key="categories._id">
                                <td>{{ categories.name }}</td>
                                <td>{{ categories.description }}</td>
                                <button type="button" class="btn btn-danger"  @click.stop="deletecategory(categories._id)">Delete </button>
                            </tr>
            </tbody>
        </table>
    </div>

    <div class="col-lg-6 col-md-6 col-sm-12">
    <form @submit="onSubmit">
    <div class="form-group">
    <input type="text" class="form-control" placeholder="Name" v-model="categorypost.name">
    </div>
    <div class="form-group">
    <textarea class="form-control" rows="2" placeholder="Category Descriptions" v-model="categorypost.description"></textarea>
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
  name: 'CreateCategory',
  data () {
    return {
      categorypost:{},
      categoryfields:{}
    }
  },created () {
    axios.get(`http://localhost:4000/category`)
    .then(response => {
      this.categoryfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit () {
      
      axios.post(`http://localhost:4000/category`, this.categorypost)
      .then(response => {
        console.log(response);
        this.$router.go({
          //params: { id: response.data._id }
       })
        })
      
    },deletecategory (categoryid){
            axios.delete('http://localhost:4000/category/' + categoryid)
            .then((result) => {
              //refresh on same page
              this.$router.go({
               
              })
            })
            .catch(e => {
              this.errors.push(e)
            })
        }
  }
}
</script>