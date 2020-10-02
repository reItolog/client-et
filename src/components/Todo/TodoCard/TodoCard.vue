<template>
  <ul class="todo-list">
    <li
      class="todo-item"
      v-for="(todo, index) in todos"
      :data-id="todo.id"
      :key="todo.id"
    >
      <div class="todo-column">
        <span>title:</span>
        <span contenteditable="true" ref="titleRef">{{ todo.title }}</span>
      </div>
      <div class="todo-column">
        <span>description:</span>
        <span contenteditable="true" ref="descriptionRef">{{
          todo.description
        }}</span>
      </div>
      <div class="todo-column">
        <span>updated at:</span>
        <span>{{ todo.update_at }}</span>
      </div>
      <div class="todo-actions">
        <v-btn
          class="ma-2"
          outlined
          small
          fab
          color="indigo"
          @click="handleUpdate(index, $event)"
        >
          <v-icon>mdi-content-save</v-icon>
        </v-btn>

        <v-btn
          class="ma-2"
          outlined
          small
          fab
          color="indigo"
          @click="handleDelete($event)"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex';
import { getNewDate } from '../../../shared/utils/date';

export default {
  props: ['todos'],
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['updateTodoAsync']),
    handleDelete() {},
    handleUpdate(index, e) {
      const id = e.currentTarget.parentElement.parentElement.dataset.id;

      const title = this.$refs.titleRef[index].innerText;
      const description = this.$refs.descriptionRef[index].innerText;
      const payload = {
        title,
        description,
        id,
        update_at: getNewDate(),
      };

      this.updateTodoAsync(payload);
    },
  },
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
  /* border: 3px solid grey; */
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
}
.todo-column {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  border: 1px solid grey;
  padding: 1%;
  margin-bottom: 1%;
}

.todo-actions {
  display: flex;
  justify-content: space-around;
  margin: 4% 0;
}
</style>