<template>
  <div class="container">

    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Dashboard</div>
          <div class="card-body">
            <div class="alert alert-success" v-if="user.loggedIn" role="alert">You are logged in!</div>
            
          </div>
        </div>
      </div>
      <div v class="col-md-6">
      
<form @submit="onSubmit">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" placeholder="Enter Title" id="title" >
        </div>
        <div class="form-group">
          <label for="Category">Category</label>
          <select
                    id="category"
                    name="category"
                    class="form-control"
                  >
                    <option v-for="item in categoryfields" :key="item._id" :value="item._id">{{item.name}}</option>
                  </select>
        </div>
        <div class="form-group">
          <label for="picture">Picture</label>
              <input type="file" id="image" name="image"  class="form-control-file"  @change="onFileChange" >
        </div>
        <div class="form-group">
          <label for="textarea" >Description</label>
          <textarea class="form-control" rows="4" id="description"></textarea>
        </div>
          <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
    </div>
    
  </div>
</template>
<script>
/* eslint-disable */
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "CreateProducts",
  data() {
    return {
      products: {},
      categoryfields:{}
    
    };
  },created () {
    axios.get(`http://localhost:4000/category`)
    .then(response => {
      this.categoryfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      
      console.log(file);
    },
    onSubmit(evt) {
      evt.preventDefault();
      
      
        
          var bodyFormData = new FormData();
          let image = document.getElementById("image");

          bodyFormData.set("title", document.getElementById("title").value);
          bodyFormData.set("category", document.getElementById("category").value);
          bodyFormData.set("description", document.getElementById("description").value);
           bodyFormData.append("image", image.files[0]);

          axios.post(`http://localhost:4000/products`, bodyFormData)
      .then(response => {
        //console.log(response);
        this.$router.push({
          name: 'home',
          //params: { id: response.data._id }
        })
        })
        
    }
  }
};
</script>