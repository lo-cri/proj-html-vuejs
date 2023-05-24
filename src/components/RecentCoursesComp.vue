<script >
import SingleCardCourseComp from './SingleCardCourseComp.vue'
import { store } from '../store'

export default {
    name: "RecentCoursesComp",
    components: {
        SingleCardCourseComp
    },
    data() {
        return {
            activeCategory: "All Categories",
            store
        }
    },
    computed: {
        categories() {
            const categories = new Set();
            this.store.courses.forEach(course => categories.add(course.category));
            return Array.from(categories).sort();
        },
        filteredCourses() {
            if (this.activeCategory === "All Categories") {
                return this.store.courses;
            }else{
                return this.store.courses.filter(
                    (course) => course.category === this.activeCategory
                );
            }
        },
    },
    methods: {
        setActiveCategory(category) {
            this.activeCategory = category;
        },
    },


}

</script>

<template>
    <div class="w-100 position-relative">
        <div class="w-90 my-5 ">
            <h2 class="text-center py-3" style="font-size: 50px; font-weight: 300;">Recent Courses</h2>

            <div class="d-flex justify-content-center">
                <ul class="d-flex ps-0">
                    <li :class="{ active: activeCategory === 'All Categories' }"
                        @click="setActiveCategory('All Categories')">
                        All Categories
                    </li>
                    <li v-for="category in categories" :key="category" :class="{ active: activeCategory === category }"
                        @click="setActiveCategory(category)">
                        {{ category }}
                    </li>

                </ul>

            </div>

            <div class="d-flex justify-content-center flex-wrap">
                <SingleCardCourseComp v-for="(elem, index) in filteredCourses" :key="index" :course="elem" />
            </div>

            <div class="d-flex justify-content-center">
                <button type="button" class="btn" @click="setActiveCategory('All Categories')">SHOW ALL</button>
            </div>

        </div>

        <div class="d-flex flex-column position-absolute" id="aside">
            <font-awesome-icon :icon="['fas', 'display']" />
            <font-awesome-icon :icon="['fas', 'life-ring']" />
            <font-awesome-icon :icon="['fas', 'wrench']" />
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            <font-awesome-icon :icon="['fas', 'mobile-screen-button']" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.w-90 {
    width: 90%;
    margin: 0 auto;
}

ul {
    cursor: pointer;

    li {
        list-style-type: none;
        margin-left: 20px;
        color: #195ec8;
        padding: 10px 12px;

        &.active {
            color: #77777a;
            background-color: #f2f6fb;
            border-radius: 20px;

        }
    }

}

.btn {
    background-color: #46c197;
    color: white;
    font-weight: bolder;
    border-radius: 25px;
    padding: 10px 30px;
    margin: 50px 0;

    &:hover {
        background-color: #ff4450;
        color: white;
    }
}

#aside {
    box-shadow: -2px 3px 5px 3px lightgray;
    width: 50px;
    bottom: 0;
    right: 0;

    svg {
        padding: 15px;
        font-size: 30px;
    }
}
</style>