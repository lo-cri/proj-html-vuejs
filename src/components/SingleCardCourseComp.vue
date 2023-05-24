<script >
import { store } from '../store.js'

export default {
    name: "SingleCardCourseComp",
    props: ['course'],
    data() {
        return {
            store,
        }
    },

}




</script>

<template>
    <div class="card position-relative">
        <div class="card-img-top">
            <img :src="course.img" class="card-img-top" alt="">
        </div>
        <div class="description" :class="{ feature: course.featured }">
            <div class="card-body p-0 m-3">
                <p class="card-text mb-2" style="color: #77777a; font-size: 12px;">{{ course.subcategory }} ></p>
                <h5 class="card-title fw-bolder" style="font-size: 14px;">{{ course.name }}</h5>

            </div>

            <div class="d-flex justify-content-between p-0 mx-3 align-items-center">
                <div>
                    <span class="m-0">
                        <font-awesome-icon v-for="n in parseInt(course.rating)" :key="n" :icon="['fas', 'star']"
                            style="color: #efb467;" />
                        <font-awesome-icon v-for="n in (5-parseInt(course.rating))" :key="n" :icon="['far', 'star']" 
                            style="color: #efb467;" />
                    </span>
                </div>


                <div>
                    <p style="color: #77777a; font-size: 13px;" class="m-0"><del>{{ course.discount }}</del></p>
                    <p class="fw-bolder m-0 " style="font-size: 16px;">{{ course.price }}</p>
                </div>

            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.card {
    border-radius: 0;
    border: 0;
    height: 310px !important;
    overflow: hidden;
    padding: 0;
    margin-left: 10px;
    margin-right: 10px;
    width: calc(100% / 6 - 20px);
    margin-top: 40px;

    .card-img-top {
        border-radius: 0;
        width: 100%;
        max-height: 150px;

    }

    .description {
        border: 1px solid lightgrey;
        height: 100%;

        .card-body {
            border-bottom: 1px solid lightgrey;
        }

        &.feature {
            border: 1px solid #f09b23;
            border-top: 0;
        }
    }

}
</style>