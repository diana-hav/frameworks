<template>
  <div :class="cardClass" class="user-card">
    <img :src="user.photo" alt="User photo" class="user-photo" />
    <h2>{{ user.firstName }} {{ user.lastName }}</h2>
    
    <p v-if="user.age > 18"><strong>Age:</strong> {{ user.age }}</p>
    
    <p><strong>Gender:</strong> {{ user.gender }}</p>
    <p><strong>Position:</strong> {{ user.position }}</p>

    <p><strong>Hobbies:</strong></p>
    <ul>
      <li v-for="(hobby, index) in user.hobbies" :key="index">{{ hobby }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
});

const cardClass = computed(() => {
  return props.user.age > 18 ? 'adult-card' : 'minor-card';
});
</script>

<style scoped>
.user-card {
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #f9f9f9;
}

.user-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
  font-size: 24px;
  color: #333;
}

p, ul {
  font-size: 16px;
  color: #555;
  margin: 5px 0;
}

strong {
  color: #000;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

/* Умовні стилі картки для користувачів старше 18 та молодше */
.adult-card {
  background-color: #D8BFD8; /* бузковий */
}

.minor-card {
  background-color: #f4a4a4; /* світло-червоний для користувачів молодше 18 */
}
</style>
