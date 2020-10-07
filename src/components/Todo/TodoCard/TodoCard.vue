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
        <span class="editable-field" contenteditable="true" ref="titleRef">{{
          todo.title
        }}</span>
      </div>
      <div class="todo-column">
        <span>description:</span>
        <span
          class="editable-field"
          contenteditable="true"
          ref="descriptionRef"
          >{{ todo.description }}</span
        >
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
    ...mapActions(['updateTodo', 'deleteTodo']),
    handleDelete(e) {
      const id = e.currentTarget.parentElement.parentElement.dataset.id;

      this.deleteTodo(id);
    },
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

      this.updateTodo(payload);
    },
  },
};
</script>

<style lang="scss">
@import '../../../shared/styles/mixins.scss';
.todo-list {
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  min-width: 400px;

  @include phones() {
    width: 100%;
    min-width: 260px;
  }
}
.todo-item {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
}
.todo-column {
  display: flex;
  flex-wrap: wrap;
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

.editable-field {
  background: antiquewhite;
  padding: 1%;
  min-width: 250px;
}
</style>
