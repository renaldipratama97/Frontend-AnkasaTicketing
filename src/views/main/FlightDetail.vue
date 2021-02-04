<template>
    <div>
    <div class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-xl-8">
                <div class="passenger-detail">
                <div class="title-passenger-detail">
                    <span>Contact Person Details</span>
                </div>
                <div class="card">
                    <div class="box">
                        <div class="text-input">
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" v-model="userProfile.fullName" name="fullname" readonly>
                        </div>

                        <div class="text-input">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="userProfile.email" name="email" readonly>
                        </div>

                        <div class="text-input">
                            <label for="phonenumber">Phone Number</label>
                            <input type="text" id="phonenumber" v-model="userProfile.phoneNumber" name="phonenumber" readonly>
                        </div>

                        <div class="box-notification-red">
                            <div class="notification">
                                <img src="../../assets/warning-filled.svg" alt="warning-icon">
                                <span>Make sure the customer data is correct.</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-xl-4">
                <div class="flight-detail">
                <div class="title-flight-detail">
                    <span>Flight Details</span>
                    <span>View Details</span>
                </div>
                <div class="card">
                    <div class="box-payment">
                        <div class="airlines">
                            <img :src="scheduleById.airlineLogo" alt="airlines-logo">
                            <span>{{scheduleById.airline}}</span>
                        </div>
                        <div class="from-to">
                            <span>{{scheduleById.from}}</span>
                            <img src="../../assets/icon-airlines.svg" alt="icon-airlines">
                            <span>{{scheduleById.to}}</span>
                        </div>
                        <div class="date">
                            <span>{{formatDay(scheduleById.departureTime)}}, {{formatDate(scheduleById.departureTime)}}</span>
                            <span>{{formatJam(scheduleById.departureTime)}} - {{formatJam(scheduleById.arrivedTime)}}</span>
                        </div>
                        <div class="refund-reschedule">
                            <div class="refund">
                                <img src="../../assets/ceklis.svg" alt="icon-ceklis">
                                <span>Refundable</span>
                            </div>
                            <div class="reschedule">
                                <img src="../../assets/ceklis.svg" alt="icon-ceklis">
                                <span>Reschedule</span>
                            </div>
                        </div>
                        <div class="payment">
                            <span>Total Payment</span>
                            <span>Rp. {{scheduleById.price}}</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-8">
                <div class="passenger-detail">
                <div class="title-passenger-detail">
                    <span>Passenger Details</span>
                </div>
                <div class="card">
                    <div class="box">
                        <div class="box-notification-green">
                            <div class="notification-green">
                                <span>Passenger : 1 Adult</span>
                                <span>Same as contact person</span>
                                <input type="checkbox" id="checked" name="checked" @click="handleChecked">
                            </div>
                        </div>
                        <div class="text-input">
                            <label for="title">Title</label>
                            <select name="title" v-model="title" id="title">
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                            </select>
                        </div>

                        <div class="text-input">
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" v-model="fullName" name="fullname">
                        </div>

                        <div class="text-input">
                            <label for="nationality">Nationality</label>
                            <input type="text" id="nationality" v-model="nationality" name="nationality">
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-8">
                <div class="passenger-detail">
                <div class="title-passenger-detail">
                    <span>Passenger Details</span>
                </div>
                <div class="last-card">
                    <div class="box-top">
                        <div class="travel-insurance">
                            <input type="checkbox" id="insurance" @click="handleInsurance">
                            <span> Travel Insurance </span>
                            <span>10000/pax</span>
                        </div>
                    </div>
                    <div class="box-bottom">
                        <div class="bottom">
                            <span>Get travel compensation up to $ 10.000,00</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-8">
                <div class="button-payment">
                    <button @click.prevent="processTicket" class="btn btn-primary">Process to Payment</button>
                </div>
            </div>
        </div>

    </div>
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
moment.locale('id')

export default {
  name: 'FlighDetail',
  data () {
    return {
      title: '',
      fullName: '',
      nationality: '',
      travelInsurance: ''
    }
  },
  methods: {
    ...mapActions(['getUserById', 'createTicket', 'getSchedulesById']),
    formatJam (date) {
      return moment(date).format('LT')
    },
    formatDay (date) {
      return moment(date).format('dddd')
    },
    formatDate (date) {
      return moment(date).format('LL')
    },
    handleChecked () {
      if (document.getElementById('checked').checked) {
        this.fullName = this.userProfile.fullName
      } else {
        this.fullName = ''
      }
    },
    handleInsurance () {
      if (document.getElementById('insurance').checked) {
        this.travelInsurance = 'Yes'
      } else {
        this.travelInsurance = 'No'
      }
    },
    getParamsSchedule () {
      const payload = {
        id: this.$route.params.idschedule
      }
      this.getSchedulesById(payload)
    },
    processTicket () {
      const payload = {
        scheduleId: this.$route.params.idschedule,
        userId: localStorage.getItem('id'),
        title: this.title,
        fullName: this.fullName,
        nationality: this.nationality,
        travelInsurance: this.travelInsurance,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      this.createTicket(payload)
      this.$router.push('/main/my-booking')
    }
  },
  mounted () {
    this.getUserById()
    this.getParamsSchedule()
    console.log(this.scheduleById)
  },
  computed: {
    ...mapGetters(['userProfile', 'scheduleById'])
  }
}
</script>

<style scoped>
html, body {
    padding: 0;
    margin: 0;
    font-family: 'Lato';
}

.passenger-detail {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
}

.passenger-detail .title-passenger-detail {
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
}

.passenger-detail .title-passenger-detail span {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
}

.flight-detail {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
}

.flight-detail .title-flight-detail {
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
}

.flight-detail .title-flight-detail span {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
}

.flight-detail .title-flight-detail span:nth-child(2) {
    font-family: Poppins;
    margin-left: auto;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
}

.card {
    height: 380px;
    background: #ffffff;
    border-radius: 15px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.last-card {
    display: flex;
    flex-direction: column;
    height: 150px;
    background: #ffffff;
    border-radius: 15px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
}

.text-input {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    margin-top: 15px;
}

.text-input:nth-child(2) {
    margin-top: 30px;
}

.text-input:nth-child(3) {
    margin-top: 30px;
}

.text-input label {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #9B96AB;
}

.text-input input {
    height: 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(210, 194, 255, 0.68);
}

.text-input input:focus {
    outline: none;
}

.text-input select {
    height: 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(210, 194, 255, 0.68);
}

.text-input select:focus {
    outline: none;
}

.box-notification-red {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background: rgba(242, 69, 69, 0.1);
    border-radius: 10px;
    margin-top: 30px;
}

.box-notification-red .notification {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    height: 100%;
}

.box-notification-red .notification span{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #595959;
    margin-left: 3%;
}

.box-notification-green {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    background: rgba(35, 149, 255, 0.1);
    border-radius: 10px;
    margin-top: 10px;
}

.box-notification-green .notification-green {
    display: flex;
    align-items: center;
    width: 90%;
    height: 100%;
}

.box-notification-green .notification-green span{
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #595959;
}

.box-notification-green .notification-green span:nth-child(2){
    margin-left: auto;
    margin-right: 3%;
}

.box-notification-green .notification-green input{
    background: transparent;
}

.box-top {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    height: 50%;
    border-bottom: 1px solid  #E6E6E6;
}

.box-top .travel-insurance {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}

.box-top .travel-insurance input {
    width: 17px;
    height: 17px;
    border: 2px solid #2395FF;
    box-sizing: border-box;
    border-radius: 3px;
}

.box-top .travel-insurance span {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin-left: 2%;
}

.box-top .travel-insurance span:nth-child(3) {
    margin-left: auto;
    color:  #2395FF;
}

.box-bottom {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    height: 50%;
    border-top: 1px solid  #E6E6E6;
}

.box-bottom .bottom {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}

.box-bottom .bottom span{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
}

.box-payment {
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 90%;
}

.box-payment .airlines {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: max-content;
}

.box-payment .airlines img {
    display: flex;
    flex-direction: row;
    width: 100px;
    height: 57px;
}

.box-payment .airlines span {
    display: flex;
    flex-direction: row;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #595959;
    margin-left: 5%;
}

.box-payment .from-to {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10%;
    width: 100%;
}

.box-payment .from-to span {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
}

.box-payment .date {
    display: flex;
    flex-direction: row;
    margin-top: 10%;
}

.box-payment .date span{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    color: #6B6B6B;
}

.box-payment .date span:nth-child(2){
    margin-left: auto;
}

.box-payment .refund-reschedule{
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #2395FF;
}

.box-payment .refund-reschedule .refund span{
    margin-left: 5%;
}

.box-payment .refund-reschedule .reschedule span{
    margin-left: 5%;
}

.box-payment .refund-reschedule .reschedule{
    margin-top: 3%;
}

.box-payment .payment {
    display: flex;
    align-items: center;
    margin-top: 5%;
    width: 100%;
    height: 100px;
    border-top: 1px solid #E6E6E6;;
}

.box-payment .payment span{
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
}

.box-payment .payment span:nth-child(2){
    margin-left: auto;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #2395FF;
}

.button-payment {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
}

.button-payment .btn {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    width: 319px;
    height: 57px;
    box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
    border-radius: 10px;
}
</style>
