let SplashComponent = {
    template: `<h1>Welcome to my Super Awesome App!</h1>`
}

let AppComponent = {
    template: `<h1>This is the app page</h1>`
}

let ErrorComponent = {
    template: `<h1>That page doesnt exist</h1>`
}


//these are the same as Express routes -> router.get('/', ....do something with the request)
const routes = [
    {path: '/', name: 'splash', component: SplashComponent },
    {path: '/app', name: 'app', component: AppComponent },
    {path: '*', name: 'error', component: ErrorComponent} 
    // the last one always has to be the one with the path '•' one
]

const router = new VueRouter({
    routes // short for routes: routes
})



const vm = new Vue({
    data: {


    },

    methods: {


    },

    router
}).$mount("#app");