<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="boxprofile">
                    <div class="boxuser">
                        <div class="boxphoto">
                            <img src="../../assets/profile.png" alt="image1">
                        </div>
                        <button class="selectphoto">Select Photo</button>
                        <p class="name">Mike Kowalski</p>
                        <p class="location">Medan, Indonesia</p>
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
                        <button class="logout">Logout</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="boxorderhistory">
                            <p class="title5">My Booking</p>
                            <div class="boxorderhistory1">
                                <p class="title6">My Booking</p>
                                <a class="orderhistory" href="#">Order History</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="boxstatusbooking">
                            <p class="schedule">Monday, 20 July '20 - 12:33</p>
                            <div class="bookingticket">
                                <p class="departurefrom">IDN</p>
                                <img src="../../assets/airplane-icon.png" alt="image2">
                                <p class="arriveto">JPN</p>
                            </div>
                            <p class="nameairlinescode">Garuda Indonesia, AB-221</p>
                            <div class="line"></div>
                            <div class="boxstatusticket">
                                <div class="statusticket">
                                    <p class="title7">Status</p>
                                    <p class="status">Waiting for payment</p>
                                </div>
                                <button class="viewdetails">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="boxstatusbooking1">
                            <p class="schedule1">Monday, 20 July '20 - 12:33</p>
                            <div class="bookingticket1">
                                <p class="departurefrom1">IDN</p>
                                <img src="../../assets/airplane-icon.png" alt="image3">
                                <p class="arriveto1">JPN</p>
                            </div>
                            <p class="nameairlinescode1">Garuda Indonesia, AB-221</p>
                            <div class="line"></div>
                            <div class="boxstatusticket1">
                                <div class="statusticket1">
                                    <p class="title8">Status</p>
                                    <p class="status1">Eticket issued</p>
                                </div>
                                <button class="viewdetails1">View Details</button>
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
  name: 'MyBooking'
}
</script>

<style scoped>
.col-lg-4 {
    padding: 20px 15px;
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
    padding: 20px 0;
}

.boxorderhistory {
    width: 100%;
    height: 115px;
    background: #FFFFFF;
    border-radius: 15px;
    padding: 20px;
}

.boxorderhistory1 {
    display: flex;
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

.orderhistory {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;

    color: #2395FF;
}

.boxstatusbooking {
    width: 100%;
    height: 223px;
    background: #FFFFFF;
    border-radius: 15px;
    padding: 20px;
    margin: 20px 0;
}

.boxstatusbooking1 {
    width: 100%;
    height: 223px;
    background: #FFFFFF;
    border-radius: 15px;
    padding: 20px;
}

.schedule, .schedule1 {
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

.bookingticket, .bookingticket1 {
    display: flex;
    justify-content: space-between;
    width: 20%;
}

.bookingticket img, .bookingticket1 img  {
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

.statusticket, .statusticket1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px
}

.boxstatusticket, .boxstatusticket1 {
    display: flex;
    justify-content: space-between;
}

.title7, .title8 {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    color: #7A7A7A;
}

.status {
    width: 184px;
    height: 36px;
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    border: 1px solid none;
    background: #FF7F23;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #FFFFFF;
}

.status1 {
    width: 184px;
    height: 36px;
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    border: 1px solid none;
    background: #4FCF4D;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #FFFFFF;
}

.viewdetails, .viewdetails1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border: none;
    background: none;
    background-image: url('../../assets/arrowdown.png');
    background-repeat: no-repeat;
    background-position: right;
    padding-right: 30px;
    outline: none;

    color: #2395FF;
}

@media (max-width: 768px) {
    .boxprofile {
        display: none;
    }
    .col-lg-4 {
        padding: 0;
    }
    .boxstatusbooking {
        margin: 10px 0;
    }
    .bookingticket, .bookingticket1 {
        width: 30%;
    }
}

@media (max-width: 575px) {
    .row {
        margin: 0;
    }
    .viewdetails, .viewdetails1 {
        display: none;
    }
    .boxstatusticket {
        justify-content: space-around;
    }
}

@media (max-width: 425px) {
    .bookingticket, .bookingticket1 {
        width: 40%;
    }
}

@media (max-width: 375px) {
    .container {
        padding: 0;
    }
    .bookingticket, .bookingticket1 {
        width: 50%;
    }
    .boxorderhistory1 {
        flex-direction: column;
    }
    .title5 {
        margin: 0;
    }
    .title6 {
        margin: 0;
    }
}
</style>
