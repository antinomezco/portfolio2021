<template>
  <div class="mystery">
    <div class="card">
      <div class="date">
        {{ currentDate() }}
      </div>
      <form class="task-input">
        <input
          type="text"
          v-model="new_todo"
          placeholder="input task"
          autofocus
          
        /><div @click="addItem" class="butt" v-bind:class="{ active: new_todo }">+</div>
      </form>
      <div class="items">
        <p>You have {{ pending.length }} pending items</p>
        <transition-group name="todo-item" tag="ul" class="todo-list">
          <!-- <ul v-for="item in items" :key="item.title"> -->
          <li v-for="item in pending" :key="item.title">
            <input
              class="todo-checkbox"
              v-bind:id="'item_' + item.id"
              v-model="item.done"
              type="checkbox"
            />
            <label></label>
            <span>{{ item.title }}</span>
            <span @click="deleteItem(item)" class="trash"></span>
          </li>
        </transition-group>
      </div>
      <div class="completed-items" v-if="showCompleted">
        <p v-if="completed.length > 0">
          {{ completed.length }} items have been completed
        </p>
        <transition-group name="todo-item" tag="ul" class="todo-list">
          <li v-for="item in completed" :key="item.title">
            <input
              class="todo-checkbox"
              v-bind:id="'item_' + item.id"
              v-model="item.done"
              type="checkbox"
            />
            <label></label>
            <span class="strike">{{ item.title }}</span>
            <span @click="deleteItem(item)" class="trash"></span>
          </li>
        </transition-group>
      </div>
      <div class="bottom">
        <div class="bottom-text btn-secondary" @click="showComplete">
          <span v-if="!showCompleted">Show</span><span v-else>Hide</span> Complete
        </div>
        <div class="bottom-text btn-secondary" @click="clearAll">
          Clear All
        </div>
      </div>
    </div>
    <!-- <FormField label="textbox" v-model="test"></FormField>
    <p>{{ test }}</p>
    <FormField label="textbox 2" v-model="test2"></FormField>
    <p>{{ test2 }}</p> -->
  </div>
</template>

<script>
// import FormField from "@/components/FormField.vue";

export default {
  components: {
    // FormField,
  },
  data() {
    return {
      test: undefined,
      test2: undefined,
      items: [
        { id: 0, title: "Go to codepen and get inspired", done: false },
        { id: 1, title: "Pick a project", done: false },
        { id: 2, title: "Create a new pen", done: true },
      ],
      checkedItems: [],
      new_todo: "",
      showCompleted: false
    };
  },
  computed: {
    pending: function() {
      return this.items.filter(function(item) {
        return !item.done;
      });
    },
    completed: function() {
      return this.items.filter(function(item) {
        return item.done;
      });
    },
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date =
        current.getDate() +
        "-" +
        current.getMonth() +
        "-" +
        current.getFullYear();
      return date;
    },
    addItem() {
      if (!this.new_todo.trim()) {
        return;
      }
      this.items.push({
        id: this.items.length,
        title: this.new_todo,
        done: false,
      });
      this.new_todo = "";
    },
    deleteItem(item) {
      console.log("index: ", item);
      this.items.splice(this.items.indexOf(item), 1);
    },
    justCompleted(item) {
      // console.log(item.done)
      item.done = true;
    },
    UnCompleted(item) {
      // console.log(item.done)
      item.done = false;
    },
    clearAll() {
      this.items = []
    },
    showComplete() {
      this.showCompleted = !this.showCompleted
    }
  },
};
</script>

<style scoped>
/* .mystery {
  height: 100%;
  display: grid;
  place-items: center;
} */

.card {
  border-radius: 10px;
  min-height: 700px;
  width: 500px;
  background-color: #f4f7fc;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

input::placeholder{
  color: rgba(0,0,0,0.3);
  font-style: italic;
}

.todo-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 25px;
  width: 25px;
}

label {
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  margin-left: .5rem;
  margin-right: .5rem;
  background-color: #eee;
}

.todo-checkbox:checked + label:after{
  position: relative;
  content: '';
  top: 30%;
  left: 50%;
  height: 3px;
  width: 6px;
  border: solid #fc6c48;
  border-width: 0 0 2px 2px;
  transform-origin: center center;
  transform: rotate(-45deg) translate(-50%, -50%);
}

.todo-checkbox:checked + label:after{
  display: block;
}

.todo-item-enter-active, .todo-item-leave-active {
  transition: opacity ease 0.25s, transform ease-in-out 0.3s;
  transform-origin: left center;
}

.todo-item-enter, .todo-item-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.date {
  padding-top: 3rem;
  color: red;
  font-size: 2.5vh;
  text-align: left;
}

.trash {
  position: relative;
  background-image: url('https://cdn1.iconfinder.com/data/icons/office-and-business-14/48/32-512.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 16px;
  height: 16px;
  margin-left: auto;
  margin-right: 1rem;
  cursor: pointer;
  /* transform: translate(-50%, -50%); */
  opacity: 0;
  transition: all ease-in 0.25s;
}

li:hover .trash {
  opacity: 1;
}

.task-input {
  padding: 1rem 0;
  display: grid;
  grid-column-gap: 5%;
  grid-template-columns: 75% 20%;
}

.items,
.completed-items {
  text-align: left;
}

li {
  border-radius: 5px;
  list-style-type: none;
  margin-left: -2rem;
  height: 2.5rem;
  background-color: #e0e8f5;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.butt {
  background-color: gray;
  border: none;
  color: white;
  font-size: 25px;
  padding: 5px 32px;
  border-radius: 4px;
  transition: all ease-in 0.25s;
  float: right;
}

.butt.active {
  background-color: purple;
}

.butt:active {
  transform: scale(0.9);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}

.pending {
  padding-bottom: 1rem;
}

.strike {
  text-decoration: line-through;
}

input {
  border-radius: 4px;
  border: none;
  padding-left: 1rem;
  border: 1px solid #ddd;
}

.bottom {
  margin: 2rem 4rem;
  display:flex;
  justify-content: space-evenly;
  margin-top: auto;
}

.bottom-text {
  cursor: pointer;
  font-weight: bold;
}

.btn-secondary{
  /* display: inline-block; */
  position: relative;
  /* border: 0; */
  padding-bottom: 8px;
  /* margin: 0 10px; */
}

.btn-secondary:after{
  position: absolute;
  content: '';
  width: 0;
  height: 3px;
  background-color: #f4586e;
  bottom: 0px;
  left: 0;
  transition: all ease-in 0.25s;
}

.btn-secondary:hover:after{
  width: 100%;
}

.trash {
  text-align: right !important;
  font-size: 120%;
  font-weight: bold;
}
</style>
