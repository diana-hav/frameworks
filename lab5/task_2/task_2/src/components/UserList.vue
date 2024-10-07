<template>
  <div>
    <div class="toolbar">
      <button @click="filterGender('all')" :class="{ active: selectedGender === 'all' }">All</button>
      <button @click="filterGender('male')" :class="{ active: selectedGender === 'male' }">Male</button>
      <button @click="filterGender('female')" :class="{ active: selectedGender === 'female' }">Female</button>
    </div>

    <div v-if="filteredUsers.length > 0" class="user-list">
      <UserCard v-for="user in filteredUsers" :key="user.id" :user="user" />
    </div>
    <p v-else class="empty-list">Список юзерів пустий</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import UserCard from './UserCard.vue';

const users = ref([
  { id: 1, firstName: 'John', lastName: 'Doe', gender: 'male', age: 15, position: 'Developer', photo: 'https://via.placeholder.com/150', hobbies: ['Reading', 'Gaming'] },
  { id: 2, firstName: 'Jane', lastName: 'Doe', gender: 'female', age: 30, position: 'Designer', photo: 'https://via.placeholder.com/150', hobbies: ['Painting', 'Yoga'] },
  { id: 3, firstName: 'Mike', lastName: 'Smith', gender: 'male', age: 28, position: 'Manager', photo: 'https://via.placeholder.com/150', hobbies: ['Football', 'Travelling'] },
  { id: 4, firstName: 'Sara', lastName: 'Lee', gender: 'female', age: 22, position: 'Developer', photo: 'https://via.placeholder.com/150', hobbies: ['Cooking', 'Dancing'] },
  { id: 5, firstName: 'Alex', lastName: 'White', gender: 'male', age: 19, position: 'Intern', photo: 'https://via.placeholder.com/150', hobbies: ['Coding', 'Music'] },
  { id: 6, firstName: 'Anna', lastName: 'Taylor', gender: 'female', age: 27, position: 'HR', photo: 'https://via.placeholder.com/150', hobbies: ['Reading', 'Yoga'] },
  { id: 7, firstName: 'Tom', lastName: 'Brown', gender: 'male', age: 33, position: 'CEO', photo: 'https://via.placeholder.com/150', hobbies: ['Golf', 'Travelling'] },
  { id: 8, firstName: 'Emily', lastName: 'Davis', gender: 'female', age: 14, position: 'Marketing', photo: 'https://via.placeholder.com/150', hobbies: ['Writing', 'Photography'] },
  { id: 9, firstName: 'David', lastName: 'Wilson', gender: 'male', age: 29, position: 'CTO', photo: 'https://via.placeholder.com/150', hobbies: ['Running', 'Reading'] },
  { id: 10, firstName: 'Sophia', lastName: 'Anderson', gender: 'female', age: 16, position: 'QA', photo: 'https://via.placeholder.com/150', hobbies: ['Painting', 'Gaming'] }
]);

const selectedGender = ref('all');

const filterGender = (gender) => {
  selectedGender.value = gender;
};

const filteredUsers = computed(() => {
  if (selectedGender.value === 'all') {
    return users.value;
  }
  return users.value.filter(user => user.gender === selectedGender.value);
});
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

button.active {
  background-color: #cd97cd;
  color: white;
}

button:hover {
  background-color: #865786;
}

.empty-list {
  text-align: center;
  font-size: 18px;
  color: #555;
}

.user-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}
</style>
