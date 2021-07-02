const App = {
    data() {
        return {
            placeholderString: 'Введите заметку',
            title: 'Список заметок',
            inputValue: '',
            notes: [],
        }
    },
    methods: {
        /*inputChangeHandler(event) {
            this.inputValue = event.target.value
        },*/
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        revomeNote (idx) {
            this.notes.splice(idx, 1)
        }
        /*inputKeyPress(event) {
            if (event.key === 'Enter') {
                this.addNewNote()
            }
        }*/
    },
    computed: {
        doubleCount() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
            console.log(value)
        }
    }
}
/*const App = {
    data() {
        return {
            counter: 0,
            title: 'Счетчик'
        }
    }
}
document.querySelector('button').addEventListener()
*/
Vue.createApp(App).mount('#app')

