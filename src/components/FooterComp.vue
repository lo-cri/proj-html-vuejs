<script >
export default {
    name: "FooterComp",

}

</script>

<template>
    <div class="w-100 d-flex" style="background-color: #334453">
        <div class="w-75 d-flex">

            <div class="w-25" id="about">
                <h5>About</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptates iure aspernatur aliquid voluptatibus quis quas modi odit ducimus vero! Dignissimos voluptas veritatis vero ipsa, dolore perferendis est ex alias.</p>
            </div>

            <div class="w-25" id="contact">
                <h5>Contact</h5>
                <p>Usa, California 20, First Avenue,<br>California</p>
                <p>Tel.: +1 212 458 300 32 <br>Fax: +1 212 375 24 14</p>
                <a href="#">info@masterstudy.com</a>
            </div>

            <div class="w-25" id="icons">
                <h5>Social Network</h5>
                <div class="d-flex flex-column align-items-space-between">
                    <div>
                        <span style="background-color: #3b5998"><a href="#"><font-awesome-icon :icon="['fab', 'facebook']" style="color: white;"/></a></span>
                        <span style="background-color: #c22aa2"><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" style="color: white;"/></a></span>
                        <span style="background-color: #0077b5"><a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" style="color: white;"/></a></span>
                        <span style="background-color: #bc081c"><a href="#"><font-awesome-icon :icon="['fab', 'pinterest']" style="color: white;"/></a></span>
                    </div>

                    <div>
                        <span style="background-color: #1da0f1"><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" style="color: white;"/></a></span>
                        <span style="background-color: #e94b88"><a href="#"><font-awesome-icon :icon="['fas', 'basketball']" style="color: white;"/></a></span>
                        <span style="background-color: #db4437"><a href="#"><font-awesome-icon :icon="['fab', 'google-plus']" style="color: white;"/></a></span>
                        <span style="background-color: #42c3f3"><a href="#"><font-awesome-icon :icon="['fab', 'skype']" style="color: white;"/></a></span>
                    </div>
                </div>
            </div>

            <div class="w-25" id="img">            
                <img src="../../public/Top-udemy-courses-90-percent-off.jpg" alt="Discount">
            </div>

        </div>

    </div>

    <div class="w-100 d-flex flex-column" style="background-color: #334453">
        <hr>
        <div style="width: 66%; margin: 0 auto;">
            <div class="d-flex flex-row">

                <img src="../../public/footer-logo2x-50x56.png" alt="Logo">
                <p>Copyright 2020. <u>MasterStudy</u> Theme by <u>StylemixThemes</u></p>
            </div>
        </div>            
    </div>

</template>

<style lang="scss" scoped>

.w-75 {
    margin: 0 auto;
    padding: 40px 0;
    color: white;
    width: 65%!important;;

    .w-25 {
        padding: 0px 10px;
    }

    h5 {
        font-weight: bolder;
        padding: 10px 0;
    }

    #about {
        p {
            font-size: 13px;
        }
    }

    #contact {
        p {
            font-size: 13px;
        }

        a {
            text-decoration: none;
            color: #aaaaaa;
            font-size: 13px;
        }
    }

    #icons {
        span{
            display: inline-block;
            border-radius: 60px;
            padding: 0.3em 0.6em;
            margin: 5px;
        }
    }

    #img{
        img{
            width: 250px;
        }
    }
}

.flex-column{    

    hr{
        width: 100%;
        color: white;
    }

    img{
        width: 25px;
        height: 25px;
        margin-left: 20px;
    }

    p{
        color: white;
        padding-left: 20px;
    }

}

</style>