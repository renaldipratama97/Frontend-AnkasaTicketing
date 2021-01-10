<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-md-9 col-sm-12 col-10 card-booking-detail">
                    <div class="col-lg-12 top-text">
                        <h2 class="ml-5">Booking Pass</h2>
                        <img class="option-menu mr-5" src="../../assets/iconOption.png" alt="">
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12 card-ticket mx-auto mt-3">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="flight">
                                    <img class="airplane" :src="detailTicket.schedule.airlineLogo" alt="airline">
                                    <h6 class="from-country">{{detailTicket.schedule.from}}</h6>
                                    <img class="icon-plane" src="../../assets/airplane-icon.png" alt="icon">
                                    <h6 class="to-country">{{detailTicket.schedule.to}}</h6>
                                </div>
                                <button type="submit">Eticket issued</button>
                                <hr class="horizontal">
                                <div class="side-detail-ticket">
                                    <div class="code-class">
                                        <div class="code">
                                            <h6>Code</h6>
                                            <h5>{{detailTicket.schedule.code}}</h5>
                                        </div>
                                        <div class="class">
                                            <h6>Class</h6>
                                            <h5>{{detailTicket.schedule.airlineClass}}</h5>
                                        </div>
                                    </div>
                                    <div class="terminal-gate">
                                        <div class="terminal">
                                            <h6>Terminal</h6>
                                            <h5>{{detailTicket.schedule.terminal}}</h5>
                                        </div>
                                        <div class="gate">
                                            <h6>Gate</h6>
                                            <h5>{{detailTicket.schedule.gate}}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="departure">
                                    <h6>Departure</h6>
                                    <h5>{{setDate(detailTicket.schedule.departureTime)}}</h5>
                                </div>
                            </div>
                            <div class="col-lg-5 barcode">
                                <div class="vertical"></div>
                                <div class="qr-code">
                                    <qrcode-vue :value="detailTicket.id" :size="size" level="H"></qrcode-vue>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
import QrcodeVue from 'qrcode.vue'
export default {
  name: 'BookingDetail',
  data () {
    return {
      size: 200
    }
  },
  components: {
    QrcodeVue
  },
  methods: {
    ...mapActions(['getDetailTicket']),
    myDetailTicket () {
      const id = this.$route.params.ticketId
      console.log('id ticket', id)
      this.getDetailTicket(id)
    },
    setDate (date) {
      return moment(date).format('MMMM Do YYYY, hh:mm a')
    }
  },
  computed: {
    ...mapGetters(['detailTicket'])
  },
  mounted () {
    this.myDetailTicket()
    console.log(this.detailTicket)
  }
}
</script>

<style scoped>
main {
    background: #2395FF;
    height: fit-content;
}

main .card-booking-detail {
    width: 800px;
    height: 550px;
    background: #FFFFFF;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
    border-radius: 20px;
    margin: 50px auto;
}

main .card-booking-detail .top-text {
    display: flex;
    margin-top: 50px;
}

main .card-booking-detail .top-text h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
}

main .card-booking-detail .top-text .option-menu {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin-right:0;
    margin-left: auto;
    display:block;
}

main .card-booking-detail .card-ticket {
    width: 800px;
    height: 400px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 7.5px;
}

main .card-booking-detail .card-ticket::before,
main .card-booking-detail .card-ticket::after {
    content: '';
    display: block;
    position: absolute;
    margin-right: 10px;
    margin-left: 440px;
    margin-top: -11px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    z-index: 2;
    background: #FFFFFF;
}

main .card-booking-detail .card-ticket::before {
    border: 1px solid #D7D7D7;
    transform: rotate(180deg);
    top: -28px;
    clip-path: circle(50% at 50% 0);
}

main .card-booking-detail .card-ticket::after {
    border: 1px solid #D7D7D7;
    border-top-color: transparent;
    border-left: transparent;
    bottom: -40px;
    transform: rotate(-180deg);
    clip-path: circle(50% at 50% 100%);
}

main .card-booking-detail .card-ticket button {
    width: 154px;
    height: 36px;
    background: #4FCF4D;
    border-radius: 6px;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    display: none;
}

main .card-booking-detail .card-ticket button:focus {
    outline: none;
}

main .card-booking-detail .card-ticket .horizontal {
    border: 1px dashed #D7D7D7;
    width: 390px;
    display: none;
}

main .card-booking-detail .card-ticket .flight {
    display: flex;
    margin-top: 40px;
    margin-left: 30px;
}

main .card-booking-detail .card-ticket .vertical {
    border: 1px dashed #D7D7D7;
    height: 390px;
}

main .card-booking-detail .card-ticket .flight img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
}

main .card-booking-detail .card-ticket .flight .from-country {
    margin-left: 40px;
    font-weight: 600;
    font-size: 26px;
    line-height: 22px;
    color: #000000;
    margin-top: 20px;
}

main .card-booking-detail .card-ticket .flight .icon-plane {
    margin-left: 40px;
    margin-top: 5px;
}

main .card-booking-detail .card-ticket .flight .to-country {
    font-weight: 600;
    font-size: 26px;
    line-height: 22px;
    text-align: center;
    color: #000000;
    margin-top: 20px;
    margin-left: 40px;
}

main .card-booking-detail .card-ticket .code-class,
main .card-booking-detail .card-ticket .terminal-gate {
    display: flex;
    margin-top: 50px;
    margin-left: 30px;
}

main .card-booking-detail .card-ticket .code-class h6,
main .card-booking-detail .card-ticket .terminal-gate h6,
main .card-booking-detail .card-ticket .departure h6 {
    font-size: 12px;
    line-height: 22px;
    color: #A5A5A5;
    font-family: 'Lato', sans-serif;
}

main .card-booking-detail .card-ticket .code-class h5,
main .card-booking-detail .card-ticket .terminal-gate h5,
main .card-booking-detail .card-ticket .departure h5 {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #595959;
    font-family: 'Lato', sans-serif;
}

main .card-booking-detail .card-ticket .terminal-gate {
    margin-top: 20px;
}

main .card-booking-detail .card-ticket .departure {
    margin-top: 20px;
    margin-left: 30px;
}

main .card-booking-detail .card-ticket .code-class .class,
main .card-booking-detail .card-ticket .terminal-gate .gate {
    margin-left: 100px;
}

main .card-booking-detail .card-ticket .barcode {
    display: flex;
}

main .card-booking-detail .card-ticket .barcode .vertical {
    border: 1px dashed #D7D7D7;
    height: 390px;
}

main .card-booking-detail .card-ticket .barcode .qr-code {
    margin: 90px auto;
}

@media (max-width: 1192px) {
    main .card-booking-detail .card-ticket {
        width: 650px;
    }

    main .card-booking-detail .card-ticket::before,
    main .card-booking-detail .card-ticket::after {
        margin-left: 353px;
    }
}

@media (max-width: 991px) {
    main .card-booking-detail {
        height: 800px;
    }

    main .card-booking-detail .top-text .option-menu {
        display: none;
    }

    main .card-booking-detail .card-ticket {
        border: none;
    }

    main .card-booking-detail .card-ticket::before,
    main .card-booking-detail .card-ticket::after {
        display: none;
    }

    main .card-booking-detail .card-ticket button {
        display: block;
        margin: 40px auto;
    }

    main .card-booking-detail .card-ticket .horizontal {
        display: block;
        width: 100%;
        margin-top: 40px;
    }

    main .card-booking-detail .card-ticket .flight {
        margin-left: 70px;
    }

    main .card-booking-detail .card-ticket .vertical {
        display: none;
    }

    main .card-booking-detail .card-ticket .side-detail-ticket {
        display: flex;
    }

    main .card-booking-detail .card-ticket .barcode .qr-code {
        margin-top: 30px;
    }

    main .card-booking-detail .card-ticket .code-class,
    main .card-booking-detail .card-ticket .terminal-gate,
    main .card-booking-detail .card-ticket .departure {
        margin-left: 30px;
    }

    main .card-booking-detail .card-ticket .terminal-gate {
        margin-top: 50px;
    }
}

@media (max-width: 574px) {
    main .card-booking-detail {
        height: 750px;
    }

    main .card-booking-detail .top-text h2 {
        margin-top: -90px;
        margin-left: -10px !important;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #FFFFFF;
    }

    main .card-booking-detail .card-ticket {
        margin-top: -10px !important;
        width: 100%;
    }

    main .card-booking-detail .card-ticket .flight {
        margin-left: 40px;
        display: flex;
    }

    main .card-booking-detail .card-ticket button {
        margin-top: 20px;
    }

    main .card-booking-detail .card-ticket .code-class,
    main .card-booking-detail .card-ticket .terminal-gate,
    main .card-booking-detail .card-ticket .departure {
        margin-left: 40px;
        margin-top: 20px;
    }

    main .card-booking-detail .card-ticket .terminal-gate {
        margin-left: 30px;
    }

    main .card-booking-detail .card-ticket .code-class .class,
    main .card-booking-detail .card-ticket .terminal-gate .gate {
        margin-left: 60px;
    }
}

@media (max-width: 530px) {
    main .card-booking-detail .card-ticket .flight {
        margin-left: 20px;
    }

    main .card-booking-detail .card-ticket .code-class,
    main .card-booking-detail .card-ticket .terminal-gate,
    main .card-booking-detail .card-ticket .departure {
        margin-left: 20px;
    }
}

@media (max-width: 496px) {
    main .card-booking-detail .card-ticket .flight {
        margin-left: 40px;
        display: flex;
        flex-direction: column;
    }

    main .card-booking-detail .card-ticket .flight .airplane {
        margin-top: -30px;
        margin-left: -20px;
    }

    main .card-booking-detail .card-ticket .flight .from-country {
        margin-left: 20px;
    }

    main .card-booking-detail .card-ticket .flight .icon-plane {
        margin-left: -20px;
        margin-top: -25px;
    }

    main .card-booking-detail .card-ticket .flight .to-country {
        margin-top: -22px;
        margin-left: 160px;
    }

    main .card-booking-detail .card-ticket .code-class,
    main .card-booking-detail .card-ticket .terminal-gate,
    main .card-booking-detail .card-ticket .departure {
        margin-left: 10px;
    }

    main .card-booking-detail .card-ticket .barcode .qr-code {
        margin-top: 20px;
    }
}

@media (max-width: 454px) {
    main .card-booking-detail .card-ticket .code-class,
    main .card-booking-detail .card-ticket .terminal-gate,
    main .card-booking-detail .card-ticket .departure {
        margin-left: 5px;
    }

    main .card-booking-detail .card-ticket .flight .from-country {
        margin-left: 10px;
    }
}

@media (max-width: 442px) {
    main .card-booking-detail .card-ticket .flight .from-country {
        margin-left: -10px;
    }

    main .card-booking-detail .card-ticket .terminal-gate {
        margin-left: 30px;
    }

    main .card-booking-detail .card-ticket .code-class .class,
    main .card-booking-detail .card-ticket .terminal-gate .gate {
        margin-left: 40px;
    }
}

@media (max-width: 422px) {
    main .card-booking-detail .card-ticket .terminal-gate {
        margin-left: 30px;
    }

    main .card-booking-detail .card-ticket .code-class .class,
    main .card-booking-detail .card-ticket .terminal-gate .gate {
        margin-left: 30px;
    }
}

@media (max-width: 398px) {
    main .card-booking-detail .card-ticket .terminal-gate {
        margin-left: 30px;
    }

    main .card-booking-detail .card-ticket .code-class .class,
    main .card-booking-detail .card-ticket .terminal-gate .gate {
        margin-left: 20px;
    }
}

@media (max-width: 373px) {
    main .card-booking-detail .card-ticket .code-class .class,
    main .card-booking-detail .card-ticket .terminal-gate .gate {
        margin-left: 10px;
    }
}

@media (max-width: 348px) {
    main .card-booking-detail .card-ticket .flight .from-country {
        margin-left: -20px;
    }

    main .card-booking-detail .card-ticket .flight .to-country {
        margin-left: 100px;
    }

    main .card-booking-detail .card-ticket .terminal-gate {
        margin-left: 15px;
    }

    main .card-booking-detail .card-ticket .terminal-gate .gate {
        margin-left: 15px;
    }
}

@media (max-width: 336px) {
    main .card-booking-detail .card-ticket .terminal-gate {
        margin-right: -12px;
    }

    main .card-booking-detail .card-ticket .terminal-gate .gate {
        margin-left: 17px;
    }
}

@media (max-width: 320px) {
    main .card-booking-detail .card-ticket {
        height: 520px;
    }

    main .card-booking-detail .card-ticket .flight .from-country {
        margin-left: -20px;
    }

    main .card-booking-detail .card-ticket .flight .to-country {
        margin-left: 100px;
    }

    main .card-booking-detail .card-ticket .side-detail-ticket {
        display: flex;
        flex-direction: column;
    }

    main .card-booking-detail .card-ticket .code-class,
    main .card-booking-detail .card-ticket .terminal-gate,
    main .card-booking-detail .card-ticket .departure {
        margin-left: 20px;
    }

    main .card-booking-detail .card-ticket .code-class .class,
    main .card-booking-detail .card-ticket .terminal-gate .gate {
        margin-left: 60px;
    }

    main .card-booking-detail .card-ticket .barcode .qr-code {
        margin-left: 5px;
    }
}
</style>
