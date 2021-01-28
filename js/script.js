var app = new Vue({
  el: '#app',
  data: {
    newTask: '',
    todos: [
      'Andare a correre',
      'Preparare la valigia',
      'Prendere i documenti',
      'Fare benzina'
    ],
    deleted: [
      'Task completato'
    ]
  },
  methods: {
    done(index){
      this.deleted.unshift(this.todos[index]);
      this.todos.splice(index,1);
    },
    restore(index){
      this.todos.push(this.deleted[index]);
      this.deleted.splice(index,1);
    },
    clear(index){
      let x = confirm('Sei sicuro di eliminare questo task?');
      if (x == true) {
        this.deleted.splice(index,1);
      }
    },
    clearAll(){
      let x = confirm('Sei sicuro di eliminare tutti i task?');
      if (x == true) {
        this.deleted = [];
      }
    },
    add(){
      if (this.newTask.length < 4) {
        alert('La lunghezza del task deve essere di almeno quattro caratteri!');
      }
      else {
        this.todos.push(this.newTask);
        this.newTask = '';
      }
    },
    mod(index){
      this.todos.splice(index,1,prompt('Inserisci la task modificata:'));
    }
  }
});
