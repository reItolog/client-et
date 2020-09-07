<template>
  <ul class="todo-list">
    <li class="todo-item" v-for="todo in todos" :key="todo.id">
      <div class="todo-column">
        <span>title:</span>
        <span>{{todo.title}}</span>
      </div>
      <div class="todo-column">
        <span>description:</span>
        <span>{{todo.description}}</span>
      </div>
      <div class="todo-column">
        <span>owner_id:</span>
        <span>{{todo.owner_id}}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['todos'],
};
</script>

<style>
.todo-list {
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  min-width: 400px;
}
.todo-item {
  display: flex;
  flex-direction: column;
  border: 3px solid grey;
  padding: 5px;
}
.todo-column {
  display: flex;
  justify-content: space-between;
}
</style>