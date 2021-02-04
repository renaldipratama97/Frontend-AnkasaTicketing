<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="boxprofile">
                    <div class="boxuser">
                        <div class="boxphoto">
                            <img :src="userProfile.avatar" alt="image1">
                        </div>
                        <button class="selectphoto">Select Photo</button>
                        <p class="name">{{userProfile.fullName}}</p>
                        <p class="location">{{userProfile.address}}</p>
                    </div>
                    <div class="addcard">
                        <p>Cards</p>
                        <button>+ Add</button>
                    </div>
                    <div class="boxcards">
                        <p class="numbercard">4441 1235 5512 5551</p>
                        <div class="cardamount">
                            <p>X Card</p>
                            <p>$1,440.2</p>
                        </div>
                    </div>
                    <div class="boxmenu">
                        <button class="profile">Profile</button>
                        <button class="myreview">My Review</button>
                        <button class="settings">Settings</button>
                        <button class="logout" @click.prevent="goLogout">Logout</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="boxorderhistory">
                    <div class="boxtitlehistory">
                        <p class="title5">History</p>
                        <p class="title6">History</p>
                    </div>
                    <div class="line"></div>
                    <div class="boxhistory" v-for="dataHistory in history" :key="dataHistory.id">
                        <div class="box-schedule">
                        <p class="schedule">{{formatDay(dataHistory.schedule.departureTime)}}, {{formatDate(dataHistory.schedule.departureTime)}}  - {{formatJam(dataHistory.schedule.departureTime)}}</p>
                        <div class="historyticket">
                            <p class="departurefrom">{{dataHistory.schedule.from}}</p>
                            <img src="../../assets/airplane-icon.png" alt="image2">
                            <p class="arriveto">{{dataHistory.schedule.to}}</p>
                        </div>
                        <p class="nameairlinescode">{{dataHistory.schedule.airline}}, {{dataHistory.schedule.code}}</p>
                        <button class="viewdetails">View Details</button>
                        <!-- <div class="line"></div> -->
                        </div>
                        <div class="delete-icon" @click.prevent="deleteHistoryMethod(dataHistory.id)">
                            <img src="../../assets/trash.svg" alt="delete-icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Swal from 'sweetalert2'
import moment from 'moment'
moment.locale('id')

export default {
  name: 'History',
  data () {
    return {

    }
  },
  mounted () {
    this.getUserById()
    this.getHistory()
      .catch(() => {
        this.$router.push({ path: '/main/my-booking' })
      })
  },
  methods: {
    ...mapActions(['getUserById', 'getHistory', 'deleteHistory']),
    ...mapMutations(['REMOVE_HISTORY']),
    formatJam (date) {
      return moment(date).format('LT')
    },
    formatDay (date) {
      return moment(date).format('dddd')
    },
    formatDate (date) {
      return moment(date).format('LL')
    },
    deleteHistoryMethod (id) {
      this.deleteHistory(id)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'History deleted successfully',
            showConfirmButton: false,
            timer: 1500
          })
          this.REMOVE_HISTORY()
          this.getHistory()
        })
    }
  },
  computed: {
    ...mapGetters(['userProfile', 'history'])
  }
}
</script>

<style scoped>
.row {
    height: max-content;
    padding: 20px 0;
}

.boxprofile {
    display: flex;
    flex-direction: column;
    padding: 30px 30px 0px 30px;
    background: #FFFFFF;
    border-radius: 15px;
}

.boxuser {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.boxphoto {
    width: 137px;
    height: 137px;
    border: 5px solid #2395FF;
    border-radius: 100px;
}

.boxphoto img {
    width: 100%;
    max-height: 100%;
    border: 5px solid white;
    border-radius: 100px;
    display: block;
}

.selectphoto {
    width: 150px;
    height: 50px;

    margin-top: 30px;
    margin-bottom: 30px;
    background: #FFFFFF;
    border: 1px solid #2395FF;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;

    color: #2395FF;
}

.selectphoto:hover {
    background: #2395FF;
    color: #FFFFFF;
}

.selectphoto:focus {
    background: #2395FF;
    color: #FFFFFF;
}

.name {
    margin-bottom: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;

    color: #000000;
}

.location {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    color: #6B6B6B;
}

.addcard {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.addcard p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    color: #000000;
}

.addcard button {
    border: none;
    background-color: transparent;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    outline: none;

    color: #2395FF;
}

.boxcards {
    width: 100%;
    height: 68px;
    padding: 15px;

    background: #2395FF;
    box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
    border-radius: 10px;
}

.numbercard {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    color: #FFFFFF;
}

.cardamount {
    display: flex;
    justify-content: space-between;
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: #AEFAFF;
}

.boxmenu {
    display: flex;
    flex-direction: column;
    padding: 0 0 30px 0px;
}

.profile {
    width: max-content;
    padding-left: 50px;
    margin-top: 30px;
    background-color: transparent;
    background-image: url('../../assets/user.png');
    background-repeat: no-repeat;
    border: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    outline: none;

    color: #000000;
}

.profile:focus {
    color: #2395FF;
}

.myreview {
    width: max-content;
    padding-left: 50px;
    margin-top: 30px;
    background-color: transparent;
    background-image: url('../../assets/iconstar.png');
    background-repeat: no-repeat;
    border: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    outline: none;

    color: #000000;
}

.myreview:focus {
    color: #2395FF;
}

.settings {
    width: max-content;
    padding-left: 50px;
    margin-top: 30px;
    background-color: transparent;
    background-image: url('../../assets/iconsetting.png');
    background-repeat: no-repeat;
    border: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    outline: none;

    color: #000000;
}

.settings:focus {
    color: #2395FF;
}

.logout {
    width: max-content;
    padding-left: 50px;
    margin-top: 30px;
    background-color: transparent;
    background-image: url('../../assets/iconlogout.png');
    background-repeat: no-repeat;
    border: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    outline: none;

    color: #000000;
}

.logout:focus {
    color: #F24545;
}

.col-lg-8 {
    height: max-content;
}

.boxorderhistory {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background: #FFFFFF;
    border-radius: 15px;
    padding: 20px;
}

.boxtitlehistory {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.title5 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    color: #2395FF;
}

.title6 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;

    color: #000000;
}

.boxhistory {
    display: flex;
}

.delete-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    border-bottom: 1px solid #E6E6E6;
    cursor: pointer;
}

.box-schedule {
    width: 100%;
    border-bottom: 1px solid #E6E6E6;
}

.schedule {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
}

.departurefrom, .arriveto, .departurefrom1, .arriveto1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;

    color: #000000;
}

.historyticket {
    display: flex;
    justify-content: space-between;
    width: 20%;
}

.historyticket img  {
    width: 20px;
    height: 20px;
    margin-top: 5px;
}

.nameairlinescode, .nameairlinescode1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    color: #979797;
}

.line {
    border: 1px solid #E6E6E6;
    margin-bottom: 16px;
}

.viewdetails {
    width: max-content;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    border: none;
    background: none;
    background-image: url('../../assets/arrowdown.png');
    background-repeat: no-repeat;
    background-position: right;
    padding-right: 30px;
    margin-bottom: 10px;
    outline: none;

    color: #2395FF;
}

@media (max-width: 991px) {
    .boxorderhistory {
        margin-top: 20px;
    }
}

@media (max-width: 768px) {
    .row {
        padding: 0;
    }
    .boxorderhistory {
        margin: 20px 0;
    }
    .boxprofile {
        display: none;
    }
    .historyticket {
        width: 30%;
    }
}

@media (max-width: 575px) {
    .row {
        margin: 0;
    }
}

@media (max-width: 425px) {
    .historyticket {
        width: 40%;
    }
}

@media (max-width: 375px) {
    .container {
        padding: 0;
    }
    .historyticket {
        width: 50%;
    }
    .title5 {
        margin: 0;
    }
    .title6 {
        margin: 0;
    }
}
</style>
