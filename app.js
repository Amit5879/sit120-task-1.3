const app = Vue.createApp({
    data() {
      return {
        newTask: '',
        tasks: [],
        showCompleted: false,
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() === '') return;
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
      toggleShowCompleted() {
        this.showCompleted = !this.showCompleted;
      },
    },
  });
  
  app.mount('#app');
  