<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3">
                <div class="boxdescribe">
                    <div class="boxlogo">
                        <img src="../../assets/logomain.png" alt="image1">
                        <h1 class="title1">Ankasa</h1>
                    </div>
                    <p class="text1">Find your Flight and explore the world with us. We will take care of the rest</p>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="boxfeatures">
                    <h1 class="title2">Features</h1>
                    <div class="feature">
                        <a href="#">Find Ticket</a>
                        <a href="#">My Booking</a>
                        <a href="#">Chat</a>
                        <a href="#">Notification</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="boxdownload">
                    <h1 class="title3">Download Angkasa app</h1>
                    <a href="#"><img src="../../assets/appstore.png" alt="image2"></a>
                    <a href="#"><img src="../../assets/playstore.png" alt="image3"></a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="boxsocialmedia">
                    <h1 class="title4">Follow Us</h1>
                    <div class="socialmedia">
                        <a href="#"><img src="../../assets/logofacebook.png" alt="image4"></a>
                        <a href="#"><img src="../../assets/logotwitter.png" alt="image5"></a>
                        <a href="#"><img src="../../assets/logoinstagram.png" alt="image6"></a>
                        <a href="#"><img src="../../assets/logoyoutube.png" alt="image7"></a>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p class="text2">&copy; Ankasa. All Rights Reserved</p>
                <div class="location">
                    <img src="../../assets/pinmap.png" alt="image8">
                    <p class="text3">Jakarta Indonesia</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.container-fluid {
    background: #FFFFFF !important;
}

.row {
    display: flex;
    padding: 100px 100px 0 100px;
    background: white;
}

.boxdescribe {
    display: flex;
    flex-direction: column;
}

.boxlogo {
    display: flex;
    align-items: right;
}

.logo {
    width: 40px;
    height: 25px;
}

.title1 {
    font-size: 25px;
    padding-left: 10px;
}

.text1 {
    margin: 30px 0px 0px 0px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    color: #6B6B6B;
}

.boxfeatures {
    display: flex;
    flex-direction: column;
    padding-left: 25%;
}

.title2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: #000000;
}

.feature {
    display: flex;
    flex-direction: column;
}

.feature a{
    margin-top: 20px;
    text-decoration: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    color: #6B6B6B;
}

.boxdownload {
    display: flex;
    flex-direction: column;
}

.boxdownload img {
    margin-top: 20px;
}

.title3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: #000000;
}

.boxsocialmedia {
    display: flex;
    flex-direction: column;
    padding-left: 5%;
}

.socialmedia img{
    margin-top: 20px;
    padding-right: 20px;
}

.title4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: #000000;
}

.footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 40px 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: #6B6B6B;
}

.location {
    display: flex;
    flex-direction: row;
    padding-right: 10%;
}

.location img {
    width: 25px;
    height: 25px;
}

.location p {
    margin: 0;
}

.text3 {
    padding-left: 10px;
}

@media (max-width: 1024px) {
    .row {
        padding: 50px 100px 0 50px;
    }

    .footer {
        flex-direction: column;
    }
}

@media (max-width: 991px) {
    .boxfeatures {
        padding-left: 0;
        margin: 20px 0;
    }

    .boxdownload {
        margin-bottom: 20px;
    }

    .boxsocialmedia {
        padding-left: 0;
    }
}

@media (max-width: 425px) {
    .row {
        padding: 50px 20px 0 20px;
    }
}
</style>
