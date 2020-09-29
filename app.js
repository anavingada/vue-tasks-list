Vue.createApp({
    data() {
        return {
            tasks: [], // list of tasks / array
            enteredValue: '' // value introduced in the input
        };
    }, 
    methods: {
        addTask() { // function to add the tasks in the input to the list, as well as reset the input
            this.tasks.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app'); // add to the div app