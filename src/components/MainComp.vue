<script >
import PopularDevCoursesComp from './PopolarDevCoursesComp.vue'
import LimitlessComp from './LimitlessComp.vue'
import RecentCoursesComp from './RecentCoursesComp.vue';
import SubscribeComp from './SubscribeComp.vue';
import PopularCoursesComp from './PopularCoursesComp.vue';
import JoinComp from './JoinComp.vue'
import TestimonialComp from './TestimonialComp.vue'

export default {
    name: "MainComp",
    components: {

        PopularDevCoursesComp,
        LimitlessComp,
        RecentCoursesComp,
        SubscribeComp,
        PopularCoursesComp,
        JoinComp,
        TestimonialComp

    }

}

</script>

<template>
    <PopularDevCoursesComp />
    <LimitlessComp />
    <RecentCoursesComp />
    <SubscribeComp />
    <PopularCoursesComp />
    <JoinComp />
    <TestimonialComp />
</template>

<style lang="scss" scoped>
</style>