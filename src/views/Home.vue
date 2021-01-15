<template>
  <div class="home">
    <Header />
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 mb-5">
            <div class="text-main col-md-8 offset-md-2">
              <h1>Find your <span class="flight">Flight</span> <span class="explore">and explore the world with us</span></h1>
            </div>
            <div class="half-image mt-5">
              <img src="../assets/half-image.png" alt="">
              <img src="../assets/vector-6.png" class="oval" alt="">
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 text-right">
            <img src="../assets/half-the-picture.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-5 box-search">
            <div class="question">
              <h6>Hey,</h6>
              <h6>Where you want to go?</h6>
            </div>
            <div class="recently-search">
              <h6>Recently Searched</h6>
              <img src="../assets/btnback.png" alt="">
            </div>
            <div class="destination-country">
              <div class="from">
                <h6>From</h6>
                <h3 class="city">Medan</h3>
                <h6 class="country">Indonesia</h6>
              </div>
              <img src="../assets/transfer.png" alt="">
              <div class="to">
                <h6>To</h6>
                <h3 class="city">Tokyo</h3>
                <h6 class="country">Japan</h6>
              </div>
            </div>
            <div class="button-function">
              <button type="submit" class="btn-one-way"><img src="../assets/icon-airline.png" alt="icon airline"> One way</button>
              <button type="submit" class="btn-round-trip"><img src="../assets/round-trip.png" alt="round trip"> Round trip</button>
            </div>
            <div class="departure">
              <h6>Departure</h6>
              <div class="box-date">
                <h6>Monday, 20 July 2020</h6>
                <img src="../assets/btnback.png" alt="">
              </div>
            </div>
            <div class="how-many">
              <h6>How Many Person</h6>
              <div class="box-person">
                <div class="child">
                  <h6>2 Child</h6>
                  <img src="../assets/btnback.png" alt="">
                </div>
                <div class="adult">
                  <h6>4 Adult</h6>
                  <img src="../assets/btnback.png" alt="">
                </div>
              </div>
            </div>
            <div class="class-airline">
              <h6>Which class do you want?</h6>
              <form>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="inlineRadio1">
                  <label class="form-check-label" for="inlineRadio1">Economy</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="inlineRadio2">
                  <label class="form-check-label" for="inlineRadio2">Business</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="inlineRadio3">
                  <label class="form-check-label" for="inlineRadio3">First Class</label>
                </div>
              </form>
            </div>
            <button type="submit" class="search">SEARCH FLIGHT <img src="../assets/arrow-right.png" alt=""></button>
          </div>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <h6>Treding</h6>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="trending-destination">
                <h4>Trending Destination</h4>
                <h5>View all</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-md-3">
              <div class="box-photo">
                <div class="number-plane">
                  <h6 class="airlines"><span>15</span> Airlines</h6>
                </div>
                <div class="country">
                  <h6>Tokyo,</h6>
                  <div class="click-more">
                    <h4>Japan</h4>
                    <img src="../assets/more.png" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 box-card">
              <div class="box-photo-barcelona">
                <div class="number-plane">
                  <h6 class="airlines"><span>22</span> Airlines</h6>
                </div>
                <div class="country">
                  <h6>Barcelona,</h6>
                  <div class="click-more">
                    <h4>Spain</h4>
                    <img src="../assets/more.png" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 box-card">
              <div class="box-photo">
                <div class="number-plane">
                  <h6 class="airlines"><span>15</span> Airlines</h6>
                </div>
                <div class="country">
                  <h6>Tokyo,</h6>
                  <div class="click-more">
                    <h4>Japan</h4>
                    <img src="../assets/more.png" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 box-card">
              <div class="box-photo-barcelona">
                <div class="number-plane">
                  <h6 class="airlines"><span>22</span> Airlines</h6>
                </div>
                <div class="country">
                  <h6>Barcelona,</h6>
                  <div class="click-more">
                    <h4>Spain</h4>
                    <img src="../assets/more.png" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 box-card">
              <div class="box-photo">
                <div class="number-plane">
                  <h6 class="airlines"><span>15</span> Airlines</h6>
                </div>
                <div class="country">
                  <h6>Tokyo,</h6>
                  <div class="click-more">
                    <h4>Japan</h4>
                    <img src="../assets/more.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <section class="top-destination">
                <h6 class="top-ten">Top 10</h6>
                <p>Top 10 destinations</p>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-2 col-md-3">
                      <div class="box-top-destination">
                        <img src="../assets/paris.png" alt="paris">
                        <h3>Paris</h3>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-3">
                      <div class="box-top-destination">
                        <img src="../assets/bali.png" alt="Bali">
                        <h3>Bali</h3>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-3">
                      <div class="box-top-destination">
                        <img src="../assets/singapore.png" alt="Singapore">
                        <h3>Singapore</h3>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-3">
                      <div class="box-top-destination">
                        <img src="../assets/agra.png" alt="Agra">
                        <h3>Agra</h3>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-3">
                      <div class="box-top-destination">
                        <img src="../assets/sydney.png" alt="Sydney">
                        <h3>Sydney</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="button">
                  <button class="btn btn-previous"><img src="../assets/previous.png" alt="previous"></button>
                  <button class="btn btn-next"><img src="../assets/btnback.png" alt=""></button>
                </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/module/Footer'
import Header from '../components/module/Header'

export default {
  name: 'LandingPage',
  components: {
    Footer,
    Header
  }
}
</script>

<style scoped>
.col-lg-6 {
  padding: 0;
}

.container {
  position: relative;
}

main {
  background: #FFFFFF;
  height: fit-content;
}

main .text-main {
  margin-top: 130px;
}

main .text-main h1 {
  font-weight: 600;
  font-size: 54px;
  color: #414141;
}

main .text-main .flight {
  color: #2395FF;
}

main .text-main .explore {
  font-weight: 400;
  font-size: 18px;
}

main .half-image {
  display: flex;
}

main .half-image img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-top: 40px;
}

main .half-image .oval {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-top: 280px;
  margin-left: 200px;
}

main img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

main .box-search {
  background: #FFFFFF;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  width: 400px;
  height: 750px;
  position: absolute;
  top: 200px;
  left: 600px;
}

main .box-search .question {
  margin-top: 30px;
  margin-left: 20px
}

main .box-search .recently-search {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 20px
}

main .box-search .recently-search h6 {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395FF;
}

main .box-search .recently-search img {
  margin-left: 180px
}

main .box-search .destination-country {
  background: #FFFFFF;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  width: 319px;
  height: 97px;
  margin: 30px auto;
  display: flex;
}

main .box-search .destination-country img {
  margin-left: 80px
}

main .box-search .destination-country .from,
main .box-search .destination-country .to {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px
}

main .box-search .destination-country .from h6,
main .box-search .destination-country .to h6 {
  font-size: 12px;
  line-height: 14px;
  color: #979797;
  font-family: 'Lato', sans-serif;
}

main .box-search .destination-country .from h3,
main .box-search .destination-country .to h3 {
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
}

main .box-search .destination-country .to {
  margin-left: 80px
}

main .box-search .button-function,
main .box-search .departure {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 20px;
}

main .box-search .button-function .btn-one-way img {
  margin-left: -10px;
}

main .box-search .button-function .btn-round-trip img {
  margin-left: -10px;
}

main .box-search .button-function .btn-one-way,
main .box-search .button-function .btn-round-trip {
  background: #2395FF;
  border-radius: 6px;
  width: 143.82px;
  height: 44px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
  border: none;
  margin-left: 10px;
}

main .box-search .button-function .btn-round-trip {
  background: #F0F0F0;
  color: #595959;
  margin-left: 20px;
}

main .box-search .departure,
main .box-search .how-many {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 20px;
}

main .box-search .departure h6,
main .box-search .how-many h6,
main .box-search .class-airline h6 {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #6B6B6B;
}

main .box-search .departure .box-date {
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 6px;
  width: 319px;
  height: 55px;
  display: flex;
  flex-direction: row;
}

main .box-search .departure .box-date h6,
main .box-search .how-many .box-person .child h6,
main .box-search .how-many .box-person .adult h6 {
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  font-family: 'Lato', sans-serif;
  margin-top: 15px;
  margin-left: 20px;
}

main .box-search .departure .box-date img {
  margin-left: 120px;
}

main .box-search .how-many .box-person {
  display: flex;
  flex-direction: row;
}

main .box-search .how-many .box-person .child,
main .box-search .how-many .box-person .adult {
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 6px;
  width: 149px;
  height: 55px;
  display: flex;
}

main .box-search .how-many .box-person .adult {
  margin-left: 20px;
}

main .box-search .how-many .box-person .child img,
main .box-search .how-many .box-person .adult img {
  margin-left: 50px;
}

main .box-search .class-airline {
  margin-top: 30px;
  margin-left: 20px;
}

main .box-search .class-airline form {
  margin-top: 10px;
  margin-left: 0px;
}

main .box-search button {
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  width: 100%;
  height: 57px;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
  border: none;
  margin-top: 10px;
}

main .box-search img {
  margin-left: 50px;
}

main section {
  background: #FFFFFF;
  height: fit-content;
}

main section h6 {
  font-weight: 500;
  font-size: 14px;
  color: #2395FF;
  margin-top: 50px;
  letter-spacing: 0.3em;
}

main section .trending-destination {
  display: flex;
  margin-bottom: 50px;
}

main section .trending-destination h4 {
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}

main section .trending-destination h5 {
  font-weight: 600;
  font-size: 16px;
  color: #2395FF;
  margin-left: 70%;
}

main section .box-card {
  margin-left: 30px;
}

main section .box-photo {
  background: url('../assets/japan.png');
  border-radius: 20px;
  width: 206px;
  height: 262px;
  object-fit: contain;
  padding-top: 20px;
  margin-bottom: 70px;
}

main section .box-photo-barcelona {
  background: url('../assets/barcelona.png');
  border-radius: 20px;
  width: 206px;
  height: 262px;
  object-fit: contain;
  padding-top: 20px;
}

main section .number-plane {
  background: rgba(255, 255, 255, 0.41);
  border-radius: 33px;
  width: 88px;
  height: 28px;
  margin-left: 20px;
}

main section .number-plane span {
  font-weight: bold;
}

main section .number-plane h6.airlines {
  font-size: 12px;
  color: #FFFFFF;
  margin: 10px 10px;
  padding-top: 5px;
  letter-spacing: 0;
}

main section .country {
  margin-left: 20px;
  margin-top: 140px;
}

main section .country h6 {
  font-weight: 600;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 0;
  letter-spacing: 0;
}

main section .country .click-more {
  display: flex;
}

main section .country .click-more h4 {
  font-weight: 600;
  font-size: 24px;
  color: #FFFFFF;
}

main section .country .click-more img {
  margin-left: 70px;
}

main section.top-destination {
  background: url('../assets/bg-top-destination.png');
  background-repeat: no-repeat;
  object-fit: contain;
  height: 550px;
  max-width: 100%;
}

main section.top-destination .top-ten {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: #FFFFFF;
  text-align: center;
  padding-top: 50px;
}

main section.top-destination p {
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #FFFFFF;
  text-align: center;
}

main section.top-destination .box-top-destination {
  width: 150px;
  height: 150px;
  border: 5px solid #FFFFFF;
  border-radius: 100%;
  margin-top: 80px;
  margin-left: 80px;
}

main section.top-destination .box-top-destination img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  margin: 5px 5px;
}

main section.top-destination .box-top-destination h3 {
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  color: #FFFFFF;
  text-align: center;
  margin-top: 20px;
}

main section.top-destination .button {
  display: flex;
  margin: 8% 0 8% 42%;
}

main section.top-destination .button .btn-previous,
main section.top-destination .button .btn-next {
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;
  width: 68px;
  height: 50px;
}

main section.top-destination .button .btn-next {
  background: #FFFFFF;
  box-shadow: 0px 8px 10px rgba(255, 255, 255, 0.2);
  border: none;
  margin-left: 30px;
}

@media(max-width: 1192px) {
  main .box-search {
    left: 500px;
    height: 800px;
  }
}

@media(max-width: 1196px) {
  main section .box-card {
    margin-left: 80px;
  }
}

@media(max-width: 1096px) {
  main .box-search .button-function {
    margin-left: 10px;
  }

  main .box-search .departure,
  main .box-search .how-many {
    margin-left: 10px;
  }
}

@media(max-width: 1070px) {
  main .box-search {
    left: 400px;
  }
}

@media(max-width: 988px) {
  main .box-search {
    width: 500px;
  }

  main section.top-destination {
    width: 100%;
  }

  main section.top-destination .box-top-destination {
    margin-left: 10px;
  }
}

@media(max-width: 978px) {
  main section.top-destination .box-top-destination {
    margin-top: 20px;
    margin-left: 0;
  }

  main section.top-destination .button {
    margin-top: 0%;
  }
}

</style>
