<template>
    <div class="container-fluid">
        <div class="header">
            <div class="boxlogo">
                <img class="logo" src="../../assets/logomain.png" alt="image1">
                <h1>Ankasa</h1>
            </div>
            <div class="boxsearch">
                <input class="search" style="background: #F5F5F5;" type="text" placeholder="Where you want to go?">
                <img class="iconsearch" src="../../assets/search.png" alt="image2">
            </div>
            <div class="boxlink">
                <a class="findticket" href="#">Find Ticket</a>
                <a class="mybooking" href="#">My Booking</a>
            </div>
            <div class="boxnotif">
                <a href="#"><img class="message" src="../../assets/iconmessage.png" alt="image3"></a>
                <a href="#"><img class="bell" src="../../assets/bell.png" alt="image4"></a>
            </div>
            <div class="boxprofile">
                <router-link to="/main/profile"><img class="photo" src="../../assets/profile.png" alt="image4"></router-link>
            </div>
            <div class="slide">
            <Slide right id="bm-burger-button">
                <a id="profile" class="profile" href="#"><span>Profile</span></a>
                <a id="findtickets" class="findtickets" href="#"><span>Find Ticket</span></a>
                <a id="mybookings" class="mybookings" href="#"><span>My Booking</span></a>
                <a id="messages" class="messages" href="#"><span>Message</span></a>
                <a id="notification" class="notification" href="#"><span>Notification</span></a>
            </Slide>
            </div>
        </div>
    </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'Header',
  components: {
    Slide
  }
}
</script>

<style scoped>
.slide {
    display: none;
}

#bm-burger-button {
    position: absolute;
    top: 10px;
    right: 0px;
}

.header {
    display: flex;
    justify-content: space-around;
    position: relative;
    align-items: center;
    padding: 30px;
}

.boxlogo {
    display: flex;
    align-items: center;
}

.logo {
    width: 40px;
    height: 25px;
}

.boxlogo h1 {
    font-size: 25px;
    padding-left: 10px;
}

.boxsearch {
    position: relative;
    padding-left: 20px;
}

.search {
    width: 250px;
    height: 50px;
    padding-left: 55px;
    border-radius: 10px;
    border: none;
    outline: none;
}

.iconsearch {
    position: absolute;
    left: 40px;
    top: 15px;
}

.boxlink {
    display: flex;
}

.findticket {
    text-decoration: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    padding: 20px;

    color: #414141;
}

.findticket:focus {
    font-weight: bold;
    background-image: url('../../assets/list.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-position-x: center;
}

.mybooking {
    text-decoration: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    padding: 20px;

    color: #414141;
}

.mybooking:focus {
    font-weight: bold;
    background-image: url('../../assets/list.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-position-x: center;
}

.message {
    padding: 20px;
}

.bell {
    padding: 20px;
}

.boxprofile {
    width: 50px;
    height: 50px;
}

.photo {
    width: 100%;
    height: auto;
    border: 2px solid #2395FF;
    border-radius: 30px;
}

@media (max-width: 1074px) {
    .boxlink {
        display: none;
    }
    .boxprofile {
        display: none;
    }
    .slide {
        display: flex;
    }
}

@media (max-width: 815px) {
    .header {
        padding: 30px 10px;
    }
    .boxnotif {
        display: none;
    }
    .boxsearch {
        position: relative;
        padding-left: 0px;
    }
    .iconsearch {
        left: 20px;
    }
    #bm-burger-button {
        position: absolute;
        top: 5px;
        right: 0px;
    }
}

@media (max-width: 750px) {
    .boxsearch {
        display: none;
    }
    #bm-burger-button {
        position: absolute;
        top: 0px;
        right: 0px;
    }
}
</style>
