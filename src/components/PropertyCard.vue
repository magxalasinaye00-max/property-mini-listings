<template>
  <div class="card">
    <img :src="property.image" class="image" />

    <div class="info">
      <h3>{{ property.title }}</h3>
      <p>{{ property.location }}</p>
      <p class="price">R{{ property.price }}</p>
      <p>{{ property.type }}</p>

      <span v-if="!property.available" class="badge">Not Available</span>

      <button @click="toggleBookmark">
        {{ isBookmarked ? "★ Bookmarked" : "☆ Bookmark" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["property"],
  data() {
    return {
      isBookmarked: false
    };
  },
  methods: {
    toggleBookmark() {
      this.isBookmarked = !this.isBookmarked;
      this.$emit("bookmark", this.property);
    }
  }
};
</script>

<style>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  margin: 1rem;
  background: white;
}
.image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.badge {
  background: red;
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  display: inline-block;
  margin-top: 5px;
}
.price {
  font-weight: bold;
  color: #2a9d8f;
}
button {
  margin-top: 10px;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
