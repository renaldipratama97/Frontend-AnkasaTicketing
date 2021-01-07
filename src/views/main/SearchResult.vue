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
                                <input id="direct" type="radio" name="transit" value="direct">
                            </div>
                            <div class="transit">
                                <label for="transit">Transit</label>
                                <input id="transit" type="radio" name="transit" value="transit">
                            </div>
                            <div class="transit2">
                                <label for="transit2+">Transit 2+</label>
                                <input id="transit2+" type="radio" name="transit" value="transit2">
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
                                <input id="luggage" type="radio" name="facilities" value="luggage">
                            </div>
                            <div class="inflightmeal">
                                <label for="inflightmeal">In-Flight Meal</label>
                                <input id="inflightmeal" type="radio" name="facilities" value="inflightmeal">
                            </div>
                            <div class="wifi">
                                <label for="wifi">Wi-fi</label>
                                <input id="wifi" type="radio" name="facilities" value="wifi">
                            </div>
                            <div class="line"></div>
                        </div>
                        <div class="filter">
                            <div class="title2">
                                <p class="text1">Departure Time</p>
                                <img class="buttonup" src="../../assets/buttonup.png" alt="image5">
                            </div>
                            <div class="time">
                                <label for="time1">00:00 - 06:00</label>
                                <input id="time1" type="radio" name="departuretime" value="time1">
                            </div>
                            <div class="time">
                                <label for="time2">06:00 - 12:00</label>
                                <input id="time2" type="radio" name="departuretime" value="time2">
                            </div>
                            <div class="time">
                                <label for="time3">12:00 - 18:00</label>
                                <input id="time3" type="radio" name="departuretime" value="time3">
                            </div>
                            <div class="timelast">
                                <label for="time4">18:00 - 24:00</label>
                                <input id="time4" type="radio" name="departuretime" value="time4">
                            </div>
                            <div class="line"></div>
                        </div>
                        <div class="filter">
                            <div class="title2">
                                <p class="text1">Time Arrived</p>
                                <img class="buttonup" src="../../assets/buttonup.png" alt="image6">
                            </div>
                            <div class="time">
                                <label for="time5">00:00 - 06:00</label>
                                <input id="time5" type="radio" name="timearrived" value="time5">
                            </div>
                            <div class="time">
                                <label for="time6">06:00 - 12:00</label>
                                <input id="time6" type="radio" name="timearrived" value="time6">
                            </div>
                            <div class="time">
                                <label for="time7">12:00 - 18:00</label>
                                <input id="time7" type="radio" name="timearrived" value="time7">
                            </div>
                            <div class="timelast">
                                <label for="time8">18:00 - 24:00</label>
                                <input id="time8" type="radio" name="timearrived" value="time8">
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
                                <input id="garudaindonesia" type="radio" name="airlines" value="garudaindonesia">
                            </div>
                            <div class="airasia">
                                <label for="airasia">Air Asia</label>
                                <input id="airasia" type="radio" name="airlines" value="airasia">
                            </div>
                            <div class="lionair">
                                <label for="lionair">Lion Air</label>
                                <input id="lionair" type="radio" name="airlines" value="lionair">
                            </div>
                            <div class="line"></div>
                        </div>
                        <div class="filter">
                            <div class="title2">
                                <p class="text1">Ticket Price</p>
                                <img class="buttonup" src="../../assets/buttonup.png" alt="image7">
                            </div>
                            <div class="slidecontainer">
                                <div class="range">
                                    <p>Lowest</p>
                                    <p>Highest</p>
                                </div>
                                <input type="range" min="1" max="100" v-model="value" class="slider" id="myRange">
                                <p class="price">{{handleValue}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="selectticket">
                        <div class="title3">
                            <p class="text2">Select Ticket</p>
                            <p class="foundticket">(6 flight found)</p>
                        </div>
                        <button class="sort">Sort by</button>
                    </div>
                    <div class="boxticket">
                        <div class="boxairlines">
                            <img class="logoairlines" src="../../assets/garuda-indonesia-logo.png" alt="image8">
                            <p class="nameairlines">Garuda Indonesia</p>
                        </div>
                        <div class="destinationtime">
                            <div class="boxdeparture">
                                <div class="from">
                                    <p class="departurefrom">IDN</p>
                                    <p class="departuretime">12:23</p>
                                </div>
                                <img class="iconplane" src="../../assets/iconplane.png" alt="image9">
                                <div class="to">
                                    <p class="arriveto">JPN</p>
                                    <p class="timearrive">15:21</p>
                                </div>
                            </div>
                            <div class="boxtimearrived">
                                <p class="timearrived">3 hours 11 minutes</p>
                                <p class="transit">(1 transit)</p>
                            </div>
                            <div class="boxfacilities">
                                <button class="suitcase"></button>
                                <button class="meal"></button>
                                <button class="wi-fi"></button>
                            </div>
                            <div>
                                <p class="amount">Rp.2.000.000</p>
                            </div>
                            <div class="boxselect">
                                <button class="selectedticket">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SearchResult',
  data () {
    return {
      value: 50
    }
  },
  computed: {
    handleValue () {
      const price = 'Rp.' + this.value * 100000
      return price
    }
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
    background-color: silver;
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
    background: silver;
    padding: 30px;
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

.boxfacilities {
    width: max-content;
    height: max-content;
    margin-top: 10px;
}

.suitcase {
    width: 15px;
    height: 21px;
    margin-right: 10px;
    border: none;
    background: none;
    background-image: url('../../assets/iconsuitcase.png');
    background-repeat: no-repeat;
    background-position: center;
    outline: none;
}

.meal {
    width: 22px;
    height: 20px;
    margin-right: 10px;
    border: none;
    background: none;
    background-image: url('../../assets/iconfood.png');
    background-repeat: no-repeat;
    outline: none;
}

.wi-fi {
    width: 22px;
    height: 20px;
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
    .boxfacilities {
        margin-top: 15px;
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
