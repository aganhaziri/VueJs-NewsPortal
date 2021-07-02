<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary login">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.push({name: 'home',})
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
<style scoped>
.card-header{
    text-align:center;
    font-size: 25px;
    font-weight: 400;
    font-family: Oswald;
    padding-top: 15px;
    margin-bottom: 30px;
    color: #E2127A;
}
.form-group {
    font-family: Oswald;
    color: black;
    
}
.btn {
    border: 2px solid black;
    background-color: black;
    color: white;
    font-family: Oswald;
    height: 30px;
    width: 190px;
    margin-bottom: 5px;
    
}
.btn:hover{
  border: 2px solid green;
    background-color: green;
    color:black;

}
.form-control{
    width: 190px;
    border-radius: 50px;
}
.card{
    width: 450px;
}
.login{
  padding-bottom:30px;
}
</style>