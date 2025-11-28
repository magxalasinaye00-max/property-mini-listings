<template>
    <header class="header">
        <div class="logo-section">
            <img :src="logo" class="logo" alt="Home & Beyond logo" />
            <h1>Home & Beyond</h1>
        </div>
      
        <p>Total Listings: {{ filteredProperties.length }}</p>

        <input
            v-model="search"
            placeholder="Search by title or location"
            class="search"
        />

        <button @click="toggleSort">
            Sort: {{ sortOrder === 'asc' ? 'Low → High' : 'High → Low' }}
        </button>
    </header>

    <div class="grid">
        <PropertyCard
            v-for="p in sortedProperties"
            :key="p.id"
            :property="p"
            @bookmark="addBookmark"
        />
    </div>
</template>

<script>
import properties from "./data/properties";
import PropertyCard from "./components/PropertyCard.vue";
import logo from "./assets/logo/logo.jpg";

export default {
    components: { PropertyCard },
    data() {
        return {
            properties,
            search: "",
            sortOrder: "asc",
            bookmarks: [],
            logo
        };
    },
    computed: {
        filteredProperties() {
            return this.properties.filter(p =>
                p.title.toLowerCase().includes(this.search.toLowerCase()) ||
                p.location.toLowerCase().includes(this.search.toLowerCase())
            );
        },
        sortedProperties() {
            return [...this.filteredProperties].sort((a, b) => {
                return this.sortOrder === "asc"
                    ? a.price - b.price
                    : b.price - a.price;
            });
        }
    },
     methods: {
    toggleSort() {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    },
    addBookmark(property) {
      if (!this.bookmarks.includes(property)) {
        this.bookmarks.push(property);
      }
    }
  }
};
</script>

<style>
    .header {
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #264653, #2a9d8f);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: fadeIn 1.2s ease-in-out;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: fadeIn 1.8s ease-in-out;
}

.logo {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
  padding: 6px;
  background: white;
}

.logo-section h1 {
  margin: 0;
  padding-bottom: 6px;
  border-bottom: 2px solid #e9c46a;
  display: inline-block;
  font-size: 2rem;
}

.search {
  padding: 8px;
  width: 260px;
  border-radius: 8px;
  border: none;
  outline: none;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>