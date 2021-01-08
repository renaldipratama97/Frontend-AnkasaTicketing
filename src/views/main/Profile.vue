<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="boxprofile">
                    <div class="boxuser">
                        <div class="boxphoto">
                            <img :src="userProfile.data.avatar" alt="image1">
                            <input type="file" id="uploadPhoto" accept="image/x-png/,image/gif,image/jpeg" @change = "uploadPhoto">
                        </div>
                        <label for="uploadPhoto" class="selectphoto">Select Photo</label>
                        <p class="name">{{userProfile.data.fullName}}</p>
                        <p class="location">{{userProfile.data.address}}</p>
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
                            <input id="email" type="email" v-model="userProfile.data.email" placeholder="Input your email">
                        </div>
                        <div class="boxphonenumber">
                            <label for="phonenumber">Phone Number</label><br>
                            <input id="phonenumber" type="number" v-model="userProfile.data.phoneNumber" placeholder="Input your phone number">
                        </div>
                        <a class="accountsetting" href="#">Account Settings ></a>
                    </div>
                    <div class="col-lg-6">
                        <p class="title4">Biodata</p>
                        <div class="boxusername">
                            <label for="username">Username</label><br>
                            <input id="username" type="text" v-model="userProfile.data.fullName" placeholder="Input your username">
                        </div>
                        <div class="boxcity">
                            <label for="city">City</label><br>
                            <input id="city" type="text" v-model="userProfile.data.city" placeholder="Input your city">
                        </div>
                        <div class="boxaddress">
                            <label for="address">Address</label><br>
                            <input id="address" type="text" v-model="userProfile.data.address" placeholder="Input your address">
                        </div>
                        <div class="boxpostcode">
                            <label for="postcode">Post Code</label><br>
                            <input id="postcode" type="text" v-model="userProfile.data.postCode" placeholder="Input your postcode">
                        </div>
                        <b-button v-b-modal.modal-prevent-closing class="save">Edit</b-button>
                        <!-- <button @click.prevent="editProfile" class="save">Edit</button> -->

                        <b-modal id="modal-prevent-closing" ref="modal" title="Form Edit Profile" @show="resetModal" @hidden="resetModal" @ok="handleOk" >
                          <form ref="form" @submit.stop.prevent="editProfile">
                            <b-form-group label="Username" label-for="username-input" invalid-feedback="Username is required" :state="usernameState">
                              <b-form-input id="username-input" v-model="username" :state="usernameState" required ></b-form-input>
                            </b-form-group>
                            <b-form-group label="Phonenumber" label-for="phonenumber-input" invalid-feedback="Phonenumber is required" :state="phonenumberState">
                              <b-form-input id="phonenumber-input" v-model="phonenumber" :state="phonenumberState" required ></b-form-input>
                            </b-form-group>
                            <b-form-group label="City" label-for="city-input" invalid-feedback="City is required" :state="cityState">
                              <b-form-input id="city-input" v-model="city" :state="cityState" required ></b-form-input>
                            </b-form-group>
                            <b-form-group label="Address" label-for="address-input" invalid-feedback="Address is required" :state="addressState">
                              <b-form-input id="address-input" v-model="address" :state="addressState" required ></b-form-input>
                            </b-form-group>
                            <b-form-group label="Post Code" label-for="postcode-input" invalid-feedback="Postcode is required" :state="postcodeState">
                              <b-form-input id="postcode-input" v-model="postcode" :state="postcodeState" required ></b-form-input>
                            </b-form-group>
                          </form>
                        </b-modal>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Profile',
  data () {
    return {
      phonenumber: '',
      username: '',
      city: '',
      address: '',
      postcode: '',
      phonenumberState: null,
      usernameState: null,
      cityState: null,
      addressState: null,
      postcodeState: null
    }
  },
  mounted () {
    this.getUserById()
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
    resetModal () {
      this.phonenumber = ''
      this.username = ''
      this.city = ''
      this.address = ''
      this.postcode = ''
      this.phonenumberState = null
      this.usernameState = null
      this.cityState = null
      this.addressState = null
      this.postcodeState = null
    },
    checkFormValidity () {
      const valid = this.$refs.form.checkValidity()
      this.usernameState = valid
      this.phonenumberState = valid
      this.cityState = valid
      this.addressState = valid
      this.postcodeState = valid
      return valid
    },
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.editProfile()
    },
    editProfile () {
      const payload = {
        id: localStorage.getItem('id'),
        fullName: this.username,
        phoneNumber: this.phonenumber,
        city: this.city,
        address: this.address,
        postCode: this.postcode
      }
      console.log('Data Payload: ', payload)
      this.updateProfile(payload)
      this.getUserById()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    uploadPhoto () {
      const imagename = (event.target.files[0].name)
      this.picture = imagename
      this.previewImg = URL.createObjectURL(event.target.files[0])
      const form = new FormData()
      const image = document.getElementById('uploadPhoto').files[0]
      form.append('avatar', image)
      const id = localStorage.getItem('id')
      const payload = {
        id,
        formData: form
      }
      this.updateAvatar(payload)
      this.getUserById()
    },
    onInputUploadChange () {
      const self = this
      $('#uploadPhoto').change(function () {
        self.readImgUrlAndPreview(this)
      })
    },
    readImgUrlAndPreview (input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = function (e) {
          $('#uploadPhoto').attr('src', e.target.result)
        }
        reader.readAsDataURL(input.files[0])
      }
    }
  },
  computed: {
    ...mapGetters(['userProfile'])
  }
}
</script>

<style scoped>
.col-lg-4 {
    padding-top: 40px;
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
    margin-top: 40px;
    margin-bottom: 130px;
    padding: 30px;
}

.title1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;

    color: #2395FF;
}

.title2 {
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
    .col-lg-4 {
        padding: 40px 0 0 0;
    }
    .col-lg-8 {
        margin-bottom: 40px;
    }
    .accountsetting {
        margin: 20px 0;
    }
}

@media (max-width: 425px) {
    .col-lg-4 {
        padding: 0;
    }
    .col-lg-8 {
        margin-bottom: 0;
    }
}
</style>
