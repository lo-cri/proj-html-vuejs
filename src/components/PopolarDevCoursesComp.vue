<script>
import { store } from '../store.js'
import SingleCardCourseComp from './SingleCardCourseComp.vue'

export default{
    components: {
        SingleCardCourseComp
    },
    data(){
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
}
</script>

<template>
    <div class="w-100 d-flex justify-content-center">
        <div class="w-90 d-flex flex-column align-items-start">
            <p>Popular Development Courses</p>

            <div class="d-flex justify-content-between flex-wrap">
                <SingleCardCourseComp v-for="(elem, index) in filteredCourses" :key="index" :course="elem" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.w-100 {
    padding: 30px 0;
    // height: 600px;

    .w-90 {
        width: 90%;
    }

    p{
        font-weight: 00; 
        font-size: 20px;
        margin-top: 10px;
        margin-left: 10px;
        margin-bottom: 0;
    }

}
</style>