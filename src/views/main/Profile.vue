<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="boxprofile">
                    <div class="boxuser">
                        <div class="boxphoto">
                            <img :src="userProfile.avatar" id="avatar" alt="image1">
                            <input type="file" id="uploadPhoto" @change="uploadPhoto($event)">
                        </div>
                        <label for="uploadPhoto" class="selectphoto">Select Photo</label>
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
                <p class="title1">Profile</p>
                <p class="title2">Profile</p>
                <div class="row">
                    <div class="col-lg-6">
                        <p class="title3">Contact</p>
                        <div class="boxemail">
                            <label for="email">Email</label><br>
                            <input id="email" type="email" v-model="email" placeholder="Input your email">
                        </div>
                        <div class="boxphonenumber">
                            <label for="phonenumber">Phone Number</label><br>
                            <input id="phonenumber" type="number" v-model="phoneNumber" placeholder="Input your phone number">
                        </div>
                        <a class="accountsetting" href="#">Account Settings ></a>
                    </div>
                    <div class="col-lg-6">
                        <p class="title4">Biodata</p>
                        <div class="boxusername">
                            <label for="username">Username</label><br>
                            <input id="username" type="text" v-model="fullName" placeholder="Input your username">
                        </div>
                        <div class="boxcity">
                            <label for="city">City</label><br>
                            <input id="city" type="text" v-model="city" placeholder="Input your city">
                        </div>
                        <div class="boxaddress">
                            <label for="address">Address</label><br>
                            <input id="address" type="text" v-model="address" placeholder="Input your address">
                        </div>
                        <div class="boxpostcode">
                            <label for="postcode">Post Code</label><br>
                            <input id="postcode" type="text" v-model="postCode" placeholder="Input your postcode">
                        </div>
                        <button class="save" @click="editProfile">edit</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Profile',
  data () {
    return {
      phoneNumber: '',
      city: '',
      address: '',
      email: '',
      fullName: '',
      postCode: '',
      phonenumberState: null,
      usernameState: null,
      cityState: null,
      addressState: null,
      postcodeState: null
    }
  },
  mounted () {
    this.getUserById()
      .then(() => {
        this.postCode = this.userProfile.postCode
        this.email = this.userProfile.email
        this.phoneNumber = this.userProfile.phoneNumber
        this.fullName = this.userProfile.fullName
        this.city = this.userProfile.city
        this.address = this.userProfile.address
      })
  },
  methods: {
    ...mapActions(['logout', 'getUserById', 'updateProfile', 'updateAvatar']),
    goLogout () {
      this.logout()
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Logout',
            showConfirmButton: false,
            timer: 2000
          })
          this.$router.push('/auth/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProfile () {
      const payload = {
        id: localStorage.getItem('id'),
        fullName: this.fullName,
        phoneNumber: this.phoneNumber,
        city: this.city,
        address: this.address,
        postCode: this.postCode
      }

      console.log(payload)

      this.updateProfile(payload)
      this.getUserById()
    },
    uploadPhoto (event) {
      const form = new FormData()
      const image = event.target.files[0]
      // console.log(image)
      form.append('avatar', image, image.name)
      form.append('id', localStorage.getItem('id'))
      this.updateAvatar(form)
    }
  },
  computed: {
    ...mapGetters(['userProfile'])
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
    height: 100%;
    border: 5px solid white;
    border-radius: 100px;
    display: block;
}

.boxphoto input {
    display: none;
}

.selectphoto {
    display: flex;
    justify-content: center;
    align-items: center;
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
    background: #FFFFFF;
    border-radius: 15px;
}

.title1 {
    margin: 15px 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;

    color: #2395FF;
}

.title2 {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;

    color: #000000;
}

.title3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    margin-top: 10px;

    color: #000000;
}

.col-lg-6 label {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    margin-top: 10px;
    padding-left: 5px;

    color: #9B96AB;
}

.col-lg-6 input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #d2c2ffad;
    padding: 0px 0px 10px 5px;
    margin-bottom: 15px;
    outline: none;
}

#phonenumber::-webkit-outer-spin-button,
#phonenumber::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.accountsetting {
    float: right;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;

    color: #2395FF;
}

.title4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    margin-top: 10px;

    color: #000000;
}

.save {
    width: 150px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
    border: none;
    border-radius: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    float: right;

    color: #2395FF;
}

.save:hover {
    background: #2395FF;
    color: #FFFFFF;
}

.save:focus {
    background: #2395FF;
    color: #FFFFFF;
}

@media (max-width: 768px) {
    .row {
        padding: 0;
    }
    .accountsetting {
        margin: 20px 0;
    }
    .col-lg-4 {
        padding: 20px 0 0 0;
    }
    .col-lg-8 {
        margin: 20px 0;
    }
    .save {
        margin-bottom: 20px;
    }
}
</style>
