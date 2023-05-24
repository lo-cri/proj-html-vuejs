<script >
export default {
    name: "TestimonialComp",


}

</script>

<template>
    <div class="w-100 d-flex align-items-center">
        <div class="w-75 ">
            <div class="square">
                <h3 style="font-size: 35px;">Investing in Your Future</h3>
                <p style="font-weight: 300; font-size: 18px; line-height: 30px;" class="py-4">
                    It is no exaggeration to say this MasterStudy experience was transformative - both professionally and personally. This workshop will long remain a high point of my life . Thanks again... I am feeling energized and eager to start teaching my own class next week. I can't wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!
                </p>
                <p class="fw-bolder m-0">Linda Green</p>
                <p>Product Manager, Apple Inc.</p>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.w-100 {
    background-image: url(../../public/testimonial-1-1917x640-1-1914x639.jpg);
    height: 639px;

    .w-75 {
        margin: 0 auto;

        .square {
            position: relative;
            background-color: white;
            padding: 70px;
            width: 53%;
            margin-left: 100px;
            
        }

        .square:after {
            content: "";
            position: absolute;
            top: 50%;
            right: -25px;
            transform: translateY(-50%);
            border-style: solid;
            border-width: 20px 0 20px 25px;
            border-color: transparent transparent transparent white;
        }
    }
}
</style>