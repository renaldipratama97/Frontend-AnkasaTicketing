<template>
    <div>
        <div class="container-fluid">
            <div class="header">
                <div class="searchdestination">
                    <div class="boxdestination">
                        <img class="logomainwhite" src="../../assets/logomainwhite.png" alt="image1">
                        <div class="boxschedule">
                            <div class="title">
                                <p class="title1">From</p>
                                <p class="title2">To</p>
                            </div>
                            <div class="destination">
                                <p class="from">Medan(IDN)</p>
                                <img src="../../assets/leftright.png" alt="image2">
                                <p class="to">Tokyo(JPN)</p>
                            </div>
                            <div class="schedule">
                                <p>Monday, 20 July 20</p>
                                <span></span>
                                <p>6 Pessanger</p>
                                <span></span>
                                <p>Economy</p>
                            </div>
                        </div>
                    </div>
                    <button class="changesearch">Change Search</button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="title1">
                        <p class="text">Filter</p>
                        <button class="reset">Reset</button>
                    </div>
                    <div class="boxfilter">
                        <div class="filter">
                            <div class="title2">
                                <p class="text1">Transit</p>
                                <img class="buttonup" src="../../assets/buttonup.png" alt="image3">
                            </div>
                            <div class="direct">
                                <label for="direct">Direct</label>
                                <input id="direct" type="radio" name="transit" v-model="transit" value="Direct" @change="handleClick">
                            </div>
                            <div class="transit">
                                <label for="transit">Transit</label>
                                <input id="transit" type="radio" name="transit" v-model="transit" value="Transit" @change="handleClick">
                            </div>
                        <div class="line"></div>
                        </div>
                        <div class="filter">
                            <div class="title2">
                                <p class="text1">Facilities</p>
                                <img class="buttonup" src="../../assets/buttonup.png" alt="image4">
                            </div>
                            <div class="luggage">
                                <label for="luggage">Luggage</label>
                                <input id="luggage" type="radio" name="facility" v-model="facility" value="Luggage" @change="handleClick">
                            </div>
                            <div class="inflightmeal">
                                <label for="inflightmeal">In-Flight Meal</label>
                                <input id="inflightmeal" type="radio" name="facility" v-model="facility" value="In-Flight Meal" @change="handleClick">
                            </div>
                            <div class="wifi">
                                <label for="wifi">Wi-fi</label>
                                <input id="wifi" type="radio" name="facility" v-model="facility" value="Wi-Fi" @change="handleClick">
                            </div>
                            <div class="line"></div>
                        </div>
                        <div class="filter">
                            <div class="title2">
                                <p class="text1">Airlines</p>
                                <img class="buttonup" src="../../assets/buttonup.png" alt="image7">
                            </div>
                            <div class="garudaindonesia">
                                <label for="garudaindonesia">Garuda Indonesia</label>
                                <input id="garudaindonesia" type="radio" name="airline" v-model="airline" value="Garuda Indonesia" @change="handleClick">
                            </div>
                            <div class="airasia">
                                <label for="airasia">Air Asia</label>
                                <input id="airasia" type="radio" name="airline" v-model="airline" value="Air Asia" @change="handleClick">
                            </div>
                            <div class="lionair">
                                <label for="lionair">Lion Air</label>
                                <input id="lionair" type="radio" name="airline" v-model="airline" value="Lion Air" @change="handleClick">
                            </div>
                            <div class="line"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="selectticket">
                        <div class="title3">
                            <p class="text2">Select Ticket</p>
                            <p class="foundticket">({{schedules.length}} flight found)</p>
                        </div>
                        <button class="sort">Sort by</button>
                    </div>
                    <div class="boxticket" v-for="schedule in schedules" :key="schedule.id">
                        <div class="box">
                            <div class="boxairlines">
                                <img class="logoairlines" :src="schedule.airlineLogo" alt="image8">
                                <p class="nameairlines">{{schedule.airline}}</p>
                            </div>
                            <div class="destinationtime">
                                <div class="boxdeparture">
                                    <div class="from">
                                        <p class="departurefrom">{{schedule.from}}</p>
                                        <p class="departuretime">{{moment(schedule.departureTime).format('hh:mm')}}</p>
                                    </div>
                                    <img class="iconplane" src="../../assets/iconplane.png" alt="image9">
                                    <div class="to">
                                        <p class="arriveto">{{schedule.to}}</p>
                                        <p class="timearrive">{{moment(schedule.arrivedTime).format('hh:mm')}}</p>
                                    </div>
                                </div>
                                <div class="boxtimearrived">
                                    <p class="timearrived">{{moment.utc(moment(schedule.arrivedTime).diff(moment(schedule.departureTime))).format("H") + ' hours ' + moment.utc(moment(schedule.arrivedTime).diff(moment(schedule.departureTime))).format("mm") + ' minutes'}}</p>
                                    <p class="transit">({{schedule.transit}})</p>
                                </div>
                                <div class="boxfacility">
                                    <div class="boxfacilities" v-for="(facility, index) in schedule.facilities" :key="index">
                                        <p :class="facility.facility === luggage ? 'suitcase' : null" :value="luggage"></p>
                                        <p :class="facility.facility === meal ? 'meal' : null" :value="meal"></p>
                                        <p :class="facility.facility === wifi ? 'wi-fi' : null" :value="wifi"></p>
                                    </div>
                                </div>
                                <div>
                                    <p class="amount">Rp.{{schedule.price}}</p>
                                </div>
                                <div class="boxselect">
                                    <button @click="$router.push({ path: `/main/flight-detail/${schedule.id}` })" class="selectedticket">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item" :class="{disabled: !pagination.previousPage}">
                            <router-link class="page-link" :to="{ path: `/main/search-result?transit=${this.$route.query.transit || ''}&facility=${this.$route.query.facility || ''}&airline=${this.$route.query.airline || ''}&page=${pagination.previousPage}` }" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </router-link>
                            </li>
                            <li class="page-item"><a class="page-link">{{ pagination.currentPage }}</a></li>
                            <li class="page-item" :class="{disabled: !pagination.nextPage}">
                            <router-link class="page-link" :to="{ path: `/main/search-result?transit=${this.$route.query.transit || ''}&facility=${this.$route.query.facility || ''}&airline=${this.$route.query.airline || ''}&page=${pagination.nextPage}` }" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
import Swal from 'sweetalert2'

export default {
  name: 'SearchResult',
  data () {
    return {
      transit: '',
      airline: '',
      facility: '',
      moment: moment,
      luggage: 'Luggage',
      meal: 'In-Flight Meal',
      wifi: 'Wi-Fi'
    }
  },
  methods: {
    ...mapActions(['getSchedules']),
    handleClick () {
      this.$router.push({ path: `/main/search-result?transit=${this.transit || ''}&facility=${this.facility || ''}&airline=${this.airline || ''}` })
        .catch(() => {

        })
    }
  },
  computed: {
    ...mapGetters(['schedules', 'pagination'])
  },
  watch: {
    $route () {
      this.getSchedules({
        transit: this.$route.query.transit || '',
        facility: this.$route.query.facility || '',
        airline: this.$route.query.airline || '',
        keyword: this.$route.query.keyword || '',
        page: this.$route.query.page || 1
      })
        .catch((err) => {
          Swal.fire(
            err.status,
            err.message,
            'error'
          )
          this.$router.push({ path: '/main/search-result' })
        })
    }
  },
  mounted () {
    this.getSchedules({
      keyword: this.$route.query.keyword || ''
    })
    console.log(this.pagination)
  }
}
</script>

<style scoped>
.container-fluid {
    background: #2395FF;
    border-radius: 0px 0px 30px 30px;
}

.col-lg-4 {
    padding: 20px;
}

.col-lg-4 input{
    width: 20px;
}

.searchdestination {
    display: flex;
    justify-content: space-between;
    padding: 25px 100px;
    background-image: url('../../assets/bgmain.png');
    background-repeat: no-repeat;
}

.boxdestination {
    display: flex;
}

.logomainwhite {
    width: 50px;
    height: 35px;
    margin: 25px;

}

.boxschedule {
    display: flex;
    flex-direction: column;
}

.title {
    width: 120%;
    display: flex;
    justify-content: space-between;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: #FFFFFF;
}

.destination {
    width: 120%;
    display: flex;
    justify-content: space-between;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: #FFFFFF;
}

.destination img {
    width: 17px;
    height: 17px;
}

.schedule {
    width: 120%;
    display: flex;
    justify-content: space-between;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;

    color: #FFFFFF;
}

.schedule p {
    margin: 0;
}

.schedule span {
    width: 5px;
    height: 5px;
    border: 5px solid white;
    border-radius: 20px;
    margin-top: 5px;
}

.changesearch {
    width: max-content;
    height: max-content;
    border: none;
    background: none;
    display: flex;
    align-self: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: #FFFFFF;
}

.text {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;

    color: #000000;
}

.text1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: #000000;
}

.buttonup {
    width: 20px;
    height: 15px;
    margin-top: 5px;
}

.reset {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    border: none;
    background: none;

    color: #2395FF;
}

.boxfilter {
    background-color: white;
    border-radius: 15px;
}

.line {
    width: 100%;
    border: 1px solid #E5E5E5;
}

.filter {
    padding: 20px;
}

.filter label{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    color: #000000;
}

.title1 {
    display: flex;
    justify-content: space-between;
}

.title2, .direct, .transit, .transit2,
.luggage, .inflightmeal, .wifi,
.time, .timelast,
.garudaindonesia, .airasia, .lionair  {
    display: flex;
    justify-content: space-between;
}

.transit2, .wifi, .timelast, .lionair {
    padding-bottom: 25px;
}

.line {
    height: 0px;
    border: 1px solid #E5E5E5;
}

.range {
    display: flex;
    justify-content: space-between;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;

    color: #6B6B6B;
}

input[type="range" i] {
    width: 100%;
    border: 1px solid black;
}

.price {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: #2395FF;
}

.col-lg-8 {
    padding: 20px;
}

.selectticket {
    display: flex;
    justify-content: space-between;
}

.title3 {
    display: flex;
    align-items: center;
}

.text2 {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;

    color: #000000;
}

.sort {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    padding-right: 25px;
    border: none;
    background: none;
    background-image: url('../../assets/arrowupdown.png');
    background-repeat: no-repeat;
    background-position: right;

    color: #000000;
}

.foundticket {
    margin: 0 0 0 10px;
    height: max-content;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: #595959;
}

.boxticket {
    background: white;
    padding: 25px;
    margin-bottom: 10px;
    border-radius: 15px;
}

.boxairlines {
    display: flex;
    align-items: center;
}

.nameairlines {
    margin-left: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    color: #595959;
}

.destinationtime {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}

.boxdeparture {
    height: max-content;
    display: flex;
    flex-direction: row;
}

.departurefrom {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;

    color: #000000;
}

.departuretime {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: #6B6B6B;
}

.iconplane {
    height: 25px;
    margin: 10px 10px 0 10px;
}

.arriveto {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;

    color: #000000;
}

.timearrive {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: #6B6B6B;
}

.boxtimearrived {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
    height: max-content;
    margin-top: 5px;
}

.timearrived {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: #6B6B6B;
}

.transit {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: #6B6B6B;
}

.boxfacility {
    display: flex;
}

.boxfacilities {
    width: max-content;
    height: max-content;
}

.suitcase {
    width: 15px;
    height: 21px;
    margin: 15px 5px;
    border: none;
    background: none;
    background-image: url('../../assets/iconsuitcase.png');
    background-repeat: no-repeat;
    outline: none;
}

.meal {
    width: 22px;
    height: 20px;
    margin: 5px;
    border: none;
    background: none;
    background-image: url('../../assets/iconfood.png');
    background-repeat: no-repeat;
    outline: none;
}

.wi-fi {
    width: 22px;
    height: 20px;
    margin: 5px;
    border: none;
    background: none;
    background-image: url('../../assets/iconwifi.png');
    background-repeat: no-repeat;
    outline: none;
}

.amount {
    margin-top: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    color: #2395FF;
}

.selectedticket {
    width: 150px;
    height: 50px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    background: #FFFFFF;
    box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
    border: none;
    border-radius: 10px;
    outline: none;

    color: #2395FF;
}

.selectedticket:hover {
    background: #2395FF;
    color: #FFFFFF;
}

.selectedticket:focus {
    background: #2395FF;
    color: #FFFFFF;
}

@media (max-width: 1200px) {
    .timearrived {
        margin-top: 5px;
        font-size: 12px;
    }
    .selectedticket {
        width: 100px;
    }
}

@media (max-width: 768px) {
    .logomainwhite {
        display: none;
    }
    .boxdeparture {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 50%;
    }
    .destinationtime {
        flex-direction: column;
    }
}

@media (max-width: 660px) {
    .searchdestination {
        flex-direction: column;
    }
    .changesearch {
        align-self: flex-start;
        padding: 20px 0 0 0;
    }
}

@media (max-width: 510px) {
    .searchdestination {
        padding: 25px 30px;
    }
}

@media (max-width: 420px) {
    .text2 {
        display: none;
    }
}

@media (max-width: 375px) {
    .searchdestination {
        padding: 25px 20px;
    }
}

@media (max-width: 340px) {
    .searchdestination {
        padding: 25px 10px;
    }
}
</style>
