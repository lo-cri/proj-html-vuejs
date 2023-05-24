<script >
export default {
    name: "JoinComp",
}

</script>

<template>
    <div class="w-90 d-flex justify-content-between">
        <div class="join d-flex align-items-center">
            <img src="../../public/image_box_1-221x231.png" alt="teach">
            <div class="d-flex flex-column p-3 w-50">
                <h3 style="font-size: 35px;">Become an Instructor</h3>
                <p class="py-3">Teach what you love. Masterstudy gives you the tools to create a course.</p>
                <button type="button" class="btn">START TEACHING</button>
            </div>

        </div>
        <div class="join d-flex align-items-center">
            <img src="../../public/image_box_2-234x231.png" alt="business">
            <div class="d-flex flex-column p-3 w-50">
                <h3 style="font-size: 35px;">Setup For Business</h3>
                <p class="py-3">Get unlimited access to 2,500 of Udemy's top courses for your team.</p>
                <button type="button" class="btn">DOING BUSINESS</button>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.w-90 {
    width: 90%;
    margin: 50px auto;

    .join {
        border: 1px solid lightgray;
        width: calc(100% / 2 - 20px);
        height: 350px;

        img {
            width: 33%;
            height: 66%;
            padding: 10px 20px;
        }

        .btn {
            background-color: #46c197;
            color: white;
            font-weight: bolder;
            border-radius: 25px;
            padding: 10px 30px;
            width: 210px;

            &:hover {
                background-color: #ff4450;
                color: white;
            }
        }
    }
}
</style>