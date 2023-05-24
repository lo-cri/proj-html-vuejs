<script >
import { store } from '../store.js'
import SingleCardCourseComp from './SingleCardCourseComp.vue'

export default {
    name: "PopularCoursesComp",
    components: {
        SingleCardCourseComp
    },
    data() {
        return {
            store,
            currentIndex: 0
        }
    },
    computed: {
        filteredCourses() {
            const start = this.currentIndex;
            const end = start + 6;
            return this.store.courses.slice(start, end);
        }
    },
    methods: {
        next() {
            if (this.currentIndex < this.store.courses.length - 6) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        },
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.store.courses.length - 6;
            }
        }
    }

}

</script>

<template>
    <div class="w-100 d-flex justify-content-center">
        <div class="w-90 d-flex flex-column align-items-center">
            <h2 class="pt-5 pb-2" style="font-size: 50px; font-weight: 300;">Popular Courses</h2>
            <p style="font-weight: 300;">Discover our most popular courses for self learning</p>

            <div class="d-flex justify-content-between flex-wrap">
                <SingleCardCourseComp v-for="(elem, index) in filteredCourses" :key="index" :course="elem" />
            </div>
            <div class="mt-5">
                <span @click="prev"><font-awesome-icon :icon="['fas', 'angle-left']" /></span>
                <span @click="next"><font-awesome-icon :icon="['fas', 'angle-right']" /></span>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.w-100 {
    background-color: #f0f4fa;
    padding: 30px 0;
    // height: 600px;

    .w-90 {
        width: 90%;
    }

    span {
        display: inline-block;
        height: 40px;
        width: 40px;
        border: 1px solid lightgray;
        background-color: white;
        text-align: center;
        line-height: 44px;
        cursor: pointer;

        svg {
            color: lightgray;
            font-size: 20px;
        }

        &:hover {
            background-color: #46c197;
            border: 1px solid #46c197;

            svg {
                color: white;
            }
        }
    }
}
</style>