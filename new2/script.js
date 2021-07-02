Vue.createApp({
    // data() {
    //     return {

    //     }
    // }
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'Я есть Грут',
        person: {
            firstName: 'Vlad',
            lastName: 'Jontsev',
            age: 25
        },
        items: []
    }),
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    },
    methods: {
        addItem(event) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(event.key);
        },
        removeNote(i) {
            this.items.splice(i, 1)
        },
        log(item) {
            console.log('Remove item:', item)
        }
    }
    // methods: {
    //     stopPropagation(event) {
    //         event.stopPropagation()
    //     }
    // }

}).mount('#app')