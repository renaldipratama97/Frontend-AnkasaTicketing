<template>
    <div class="container-fluid">
        <div class="header">
            <div class="boxlogo">
                <img class="logo" src="../../assets/logomain.png" alt="image1">
                <h1>Ankasa</h1>
            </div>
            <div class="boxsearch">
                <input class="search" style="background: #F5F5F5;" type="text" v-model="keyword" placeholder="Where you want to go?" @keypress.enter="searchSchedule">
                <img class="iconsearch" src="../../assets/search.png" alt="image2">
            </div>
            <div class="boxlink">
                <router-link class="findticket" :to="{ path: '/main/search-result' }">Find Ticket</router-link>
                <router-link class="mybooking" to="/main/my-booking">My Booking</router-link>
                <router-link to="/main/admin/add-schedule" :class="userProfile.role === isAdmin ? 'mybooking' : 'admin'">Add Schedule</router-link>
            </div>
            <div class="button" v-if="!isLogin">
                <button type="submit" class="btn btn-signup" @click="goSignUp">Sign Up</button>
            </div>
            <div class="boxnotif" v-if="isLogin">
                <a href="#"><img class="message" src="../../assets/iconmessage.png" alt="image3"></a>
                <a href="#"><img class="bell" src="../../assets/bell.png" alt="image4"></a>
            </div>
            <div class="boxprofile" v-if="isLogin">
                <router-link to="/main/profile"><img class="photo" :src="userProfile.avatar" alt="image4"></router-link>
            </div>
            <div class="slide">
            <Slide right id="bm-burger-button">
                <router-link v-if="isLogin" id="profile" class="profile" to="/main/profile"><span>Profile</span></router-link>
                <router-link id="findtickets" class="findtickets" :to="{ path: '/main/search-result' }"><span>Find Ticket</span></router-link>
                <router-link id="mybookings" class="mybookings" to="/main/my-booking"><span>My Booking</span></router-link>
                <router-link to="/main/admin/add-schedule" id="mybookings" :class="userProfile.role === isAdmin ? 'user' : 'admin'"><span>Add Schedule</span></router-link>
                <a id="messages" v-if="isLogin" class="messages" href="#"><span>Message</span></a>
                <a id="notification" v-if="isLogin" class="notification" href="#"><span>Notification</span></a>
                <div class="button" v-if="!isLogin">
                    <button type="submit" class="btn btn-signup" @click="goSignUp">Sign Up</button>
                </div>
            </Slide>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Slide } from 'vue-burger-menu'
export default {
  name: 'Header',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    ...mapActions(['getUserById']),
    searchSchedule () {
      this.$router.push({ path: `/main/search-result?keyword=${this.keyword || ''}` })
        .catch(() => {

        })
      this.keyword = ''
    },
    goSignUp () {
      this.$router.push('/auth/register')
    }
  },
  components: {
    Slide
  },
  computed: {
    ...mapGetters(['userProfile', 'isAdmin', 'isLogin'])
  },
  mounted () {
    if (this.isLogin) {
      this.getUserById()
    }
  }
}
</script>

<style scoped>
.container-fluid {
    background: #FFFFFF;
    border-radius: 0px 0px 30px 30px;
}

.admin {
    display: none;
}

.user {
    display: block;
}

.slide {
    display: none;
}

.box-profile a img {
    border-radius: 100%;
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
    cursor: pointer;

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
    height: 100%;
    border: 2px solid #2395FF;
    border-radius: 100px;
}

button {
    background: #2395FF;
    box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    width: 150px;
    height: 50px;
}

button:hover {
    color: #FFFFFF;
}

button:focus {
    outline: none;
    box-shadow: none;
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
    .button {
        display: none;
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
