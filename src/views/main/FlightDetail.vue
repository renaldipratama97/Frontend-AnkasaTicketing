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
                            <input type="text" id="fullname" name="fullname">
                        </div>

                        <div class="text-input">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email">
                        </div>

                        <div class="text-input">
                            <label for="phonenumber">Phone Number</label>
                            <input type="text" id="phonenumber" name="phonenumber">
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
                            <img src="../../assets/garuda-indonesia.svg" alt="airlines-logo">
                            <span>Garuda Indonesia</span>
                        </div>
                        <div class="from-to">
                            <span>Medan (IDN)</span>
                            <img src="../../assets/icon-airlines.svg" alt="icon-airlines">
                            <span>Tokyo (JPN)</span>
                        </div>
                        <div class="date">
                            <span>Sunday, 10 Agustus 2020</span>
                            <span>20.00 - 22.00</span>
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
                                <input type="checkbox">
                            </div>
                        </div>
                        <div class="text-input">
                            <label for="title">Title</label>
                            <input type="text" id="title" name="title">
                        </div>

                        <div class="text-input">
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" name="fullname">
                        </div>

                        <div class="text-input">
                            <label for="nationality">Nationality</label>
                            <input type="text" id="nationality" name="nationality">
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
                            <input type="checkbox" id="checkbox" >
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
                    <button class="btn btn-primary">Process to Payment</button>
                </div>
            </div>
        </div>

    </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'FlighDetail',
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style scoped>
html, body {
    padding: 0;
    margin: 0;
    font-family: 'Lato';
}

.container-fluid {
    background: #F5F6FA;
}

/* .row {
} */

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
    margin-top: 5%;
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
