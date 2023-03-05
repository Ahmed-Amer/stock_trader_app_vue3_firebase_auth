<template>
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <form class="form-signin">
                <h2 class="form-signin-heading">sign in</h2>
                <div class="for-group custom">
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address"
                        required autofocus>
                </div>
                <div class="form-group custom">
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password"
                        required>
                </div>

                <button @click.prevent="login" class="btn btn-lg btn-primary btn-block">Sign in</button>
                Don't Have Account
                <router-link to="/register" tag="button" class="btn btn-lg btn-info btn-block">Sign up</router-link>

            </form>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login() {
            console.log(this.email);
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    alert('Welcome ' + auth.currentUser.email);
                    this.$router.push('/');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
    },
    computed: {

    }
};
</script>
<style scoped>
body {
    background-color: #eee !important;
}

.form-signin {
    padding: 15px;
    border-radius: 5px;
}

.custom {
    margin-bottom: 5px !important;
}
</style>