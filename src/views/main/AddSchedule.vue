<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card-text">
                        <h6>Admin page</h6>
                        <h5>Add Schedule</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <section class="section-photo text-center">
                        <div class="img-airline">
                            <img src="../../assets/garuda-indonesia-logo.png" alt="logo-airline">
                        </div>
                        <input type="file" ref="file" id="file" @change="handleUpdate">
                        <label for="file">
                            <button type="submit">Select Photo</button>
                        </label>
                    </section>
                </div>
                <div class="col-lg-8">
                    <section class="section-form">
                        <div class="name-plane">
                            <label>Name Airline</label>
                            <b-form-select v-model.trim="$v.airline.$model" :class="{ 'is-invalid': validationStatus($v.airline) }" :options="airplaneOption" class="input-plane"></b-form-select>
                            <div class="invalid-feedback" v-if="!$v.airline.required">Field is required.</div>
                        </div>
                        <div class="airline-class">
                            <label>Airline Class</label>
                            <b-form-select v-model.trim="$v.airlineClass.$model" :class="{ 'is-invalid': validationStatus($v.airlineClass) }" :options="airlineClassOption" class="input-class"></b-form-select>
                            <div class="invalid-feedback" v-if="!$v.airlineClass.required">Field is required.</div>
                        </div>
                        <div class="code">
                            <label>Code</label>
                            <b-form-input type="text" v-model.trim="$v.code.$model" :class="{ 'is-invalid': validationStatus($v.code) }" class="input-code"></b-form-input>
                            <div class="invalid-feedback" v-if="!$v.code.required">Field is required.</div>
                        </div>
                        <div class="terminal-gate">
                            <div class="terminal">
                                <label>Terminal</label>
                                <b-form-select v-model.trim="$v.terminal.$model" :class="{ 'is-invalid': validationStatus($v.terminal) }" :options="terminalOption" class="input-terminal"></b-form-select>
                                <div class="invalid-feedback" v-if="!$v.terminal.required">Field is required.</div>
                            </div>
                            <div class="gate">
                                <label>Gate</label>
                                <b-form-select v-model.trim="$v.gate.$model" :class="{ 'is-invalid': validationStatus($v.gate) }" :options="gateOption" class="input-gate"></b-form-select>
                                <div class="invalid-feedback" v-if="!$v.gate.required">Field is required.</div>
                            </div>
                        </div>
                        <div class="from-to">
                            <div class="from">
                                <label>From</label>
                                <b-form-input v-model="from" class="from-input" disabled></b-form-input>
                            </div>
                            <div class="to">
                                <label>To</label>
                                <b-form-select v-model.trim="$v.to.$model" :class="{ 'is-invalid': validationStatus($v.to) }" :options="toOption" class="to-option"></b-form-select>
                                <div class="invalid-feedback" v-if="!$v.to.required">Field is required.</div>
                            </div>
                        </div>
                        <div class="departure-time">
                            <label>Departure Time</label>
                            <date-picker name="date" v-model.trim="$v.departureTime.$model" :class="{ 'is-invalid': validationStatus($v.departureTime) }" :config="departureTimeOption" class="depTime"></date-picker>
                            <div class="invalid-feedback" v-if="!$v.departureTime.required">Field is required.</div>
                        </div>
                        <div class="arrived-time">
                            <label>Arrived Time</label>
                            <date-picker name="date" v-model.trim="$v.arrivedTime.$model" :class="{ 'is-invalid': validationStatus($v.arrivedTime) }" :config="departureTimeOption" class="arrTime"></date-picker>
                            <div class="invalid-feedback" v-if="!$v.arrivedTime.required">Field is required.</div>
                        </div>
                        <div class="price">
                            <label>Price</label>
                            <b-form-input type="text" v-model.trim="$v.price.$model" :class="{ 'is-invalid': validationStatus($v.price) }" class="input-price"></b-form-input>
                            <div class="invalid-feedback" v-if="!$v.price.required">Field is required.</div>
                        </div>
                        <div class="transit">
                            <label>Transit</label>
                            <b-form-select v-model.trim="$v.transit.$model" :class="{ 'is-invalid': validationStatus($v.transit) }" :options="transitOption" class="transit-option"></b-form-select>
                            <div class="invalid-feedback" v-if="!$v.transit.required">Field is required.</div>
                        </div>
                        <div class="facilities">
                            <label>Facilities</label>
                            <b-form-checkbox-group
                                v-model="facilities"
                                :options="facilitiesOption"
                                value-field="item"
                                text-field="name"
                                class="facilitiesOption"
                            ></b-form-checkbox-group>
                        </div>

                        <button type="submit" @click.prevent="handleUpdate">Add Schedule</button>
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'AddSchedule',
  data () {
    return {
      airlineLogo: '',
      airline: null,
      airplaneOption: [
        { value: 'Lion Air', text: 'Lion Air' },
        { value: 'Air Asia', text: 'Air Asia' },
        { value: 'Garuda Indonesia', text: 'Garuda Indonesia' }
      ],
      airlineClass: null,
      airlineClassOption: [
        { value: 'Economy', text: 'Economy' },
        { value: 'Bussines', text: 'Bussines' }
      ],
      code: '',
      terminal: null,
      terminalOption: [
        { value: 'A', text: 'A' },
        { value: 'B', text: 'B' },
        { value: 'C', text: 'C' }
      ],
      gate: null,
      gateOption: [
        { value: '110', text: '110' },
        { value: '210', text: '210' },
        { value: '310', text: '310' }
      ],
      from: 'IDN',
      to: null,
      toOption: [
        { value: 'USA', text: 'USA' },
        { value: 'AUS', text: 'AUS' },
        { value: 'KOR', text: 'KOR' },
        { value: 'JPN', text: 'JPN' },
        { value: 'SGP', text: 'SGP' }
      ],
      departureTime: null,
      departureTimeOption: {
        format: 'YYYY-MM-DD hh:mm:ss',
        useCurrent: false,
        minDate: new Date()
      },
      arrivedTime: null,
      price: '',
      transit: null,
      transitOption: [
        { value: 'Direct', text: 'Direct' },
        { value: 'Transit', text: 'Transit' }
      ],
      facilities: [],
      facilitiesOption: [
        { item: 'In-Flight Meal', name: 'In-Flight Meal' },
        { item: 'Wi-Fi', name: 'Wi-Fi' },
        { item: 'Luggage', name: 'Luggage' }
      ]
    }
  },
  validations: {
    airline: { required },
    airlineClass: { required },
    code: { required },
    terminal: { required },
    gate: { required },
    to: { required },
    price: { required },
    transit: { required },
    departureTime: { required },
    arrivedTime: { required }
  },
  methods: {
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    handleUpdate () {
      this.$v.$touch()
      if (this.$v.$pendding || this.$v.$error) return
      console.log('coba')
    }
  }
}
</script>

<style scoped>
main {
    background: #F5F6FA;
    height: fit-content;
    width: 100%;
}

main .card-text {
    background: #FFFFFF;
    border-radius: 15px;
    height: 115px;
    margin: 30px 0;
}

main .card-text h6 {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.3em;
    color: #2395FF;
    padding: 20px 0 5px 30px;
}

main .card-text h5 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
    padding: 0 0 10px 30px;
}

main section.section-photo,
main section.section-form {
    background: #FFFFFF;
    border-radius: 15px;
    height: fit-content;
    margin-bottom: 30px;
}

main section.section-photo .img-airline img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin: 30px 0;
    border-radius: 50%;
    border: 2px solid #2395FF;
}

main section.section-photo input {
    display: none;
}

main section.section-photo button {
    background: #FFFFFF;
    border: 1px solid #2395FF;
    box-sizing: border-box;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #2395FF;
    width: 150px;
    height: 50px;
    outline: none;
    margin-top: 20px;
    margin-bottom: 30px;
}

main section.section-form .name-plane label,
main section.section-form .from-to .from label,
main section.section-form .from-to .to label,
main section.section-form .departure-time label,
main section.section-form .arrived-time label,
main section.section-form .price label,
main section.section-form .transit label,
main section.section-form .facilities label,
main section.section-form .airline-class label,
main section.section-form .code label,
main section.section-form .terminal label,
main section.section-form .gate label {
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    color: #000000;
    padding: 30px 0 0 20px;
}

main section.section-form .name-plane,
main section.section-form .departure-time,
main section.section-form .arrived-time,
main section.section-form .price,
main section.section-form .transit,
main section.section-form .facilities,
main section.section-form .airline-class,
main section.section-form .code {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
}

main section.section-form .name-plane .input-plane,
main section.section-form .departure-time .depTime,
main section.section-form .arrived-time .arrTime,
main section.section-form .price .input-price,
main section.section-form .transit .transit-option,
main section.section-form .airline-class .input-class,
main section.section-form .code .input-code {
    width: 90%;
    margin-left: 20px;
    border: none;
    border-bottom: 1px solid rgba(35, 149, 255, 0.3);
}

main section.section-form .name-plane .input-plane:focus,
main section.section-form .from-to .to .to-option:focus,
main section.section-form .departure-time .depTime:focus,
main section.section-form .arrived-time .arrTime:focus,
main section.section-form .price .input-price:focus,
main section.section-form .transit .transit-option:focus,
main section.section-form .airline-class .input-class:focus,
main section.section-form .code .input-code:focus,
main section.section-form .terminal-gate .terminal .input-terminal:focus,
main section.section-form .terminal-gate .gate .input-gate:focus {
    box-shadow: none;
    outline: none;
}

main section.section-form .name-plane .is-invalid,
main section.section-form .airline-class .is-invalid,
main section.section-form .departure-time .is-invalid,
main section.section-form .arrived-time .is-invalid,
main section.section-form .price .is-invalid,
main section.section-form .transit .is-invalid,
main section.section-form .facilities .is-invalid,
main section.section-form .code .is-invalid {
    border-bottom: 1px solid red;
}

main section.section-form .terminal-gate .terminal .is-invalid,
main section.section-form .terminal-gate .gate .is-invalid,
main section.section-form .from-to .to .is-invalid {
    border-bottom: 1px solid red !important;
}

main section.section-form .name-plane .is-invalid:focus,
main section.section-form .airline-class .is-invalid:focus,
main section.section-form .departure-time .is-invalid:focus,
main section.section-form .arrived-time .is-invalid:focus,
main section.section-form .price .is-invalid:focus,
main section.section-form .transit .is-invalid:focus,
main section.section-form .facilities .is-invalid:focus,
main section.section-form .code .is-invalid:focus,
main section.section-form .terminal-gate .terminal .is-invalid:focus,
main section.section-form .terminal-gate .gate .is-invalid:focus {
    border-bottom: 1px solid red;
    box-shadow: none;
}

main section.section-form .invalid-feedback {
    padding-left: 20px;
}

main section.section-form .terminal-gate .gate .invalid-feedback {
    padding-left: 90px;
}

main section.section-form .from-to .to .invalid-feedback {
    padding-left: 50px;
}

main section.section-form .facilities .facilitiesOption {
    margin-left: 20px;
    margin-bottom: 40px;
}

main section.section-form .from-to,
main section.section-form .terminal-gate {
    display: flex;
    margin-left: 20px;
}

main section.section-form .from-to .from .from-input,
main section.section-form .terminal-gate .terminal .input-terminal {
    border: none;
    border-bottom: 1px solid rgba(35, 149, 255, 0.3);
    margin-left: 20px;
}

main section.section-form .from-to .to,
main section.section-form .terminal-gate .gate {
    margin-left: 80px;
}

main section.section-form .from-to .to label {
    padding-left: 50px;
}

main section.section-form .terminal-gate .gate label {
    padding-left: 90px;
}

main section.section-form .from-to .to .to-option,
main section.section-form .terminal-gate .gate .input-gate {
    margin-left: 50px;
    border: none;
    border-bottom: 1px solid rgba(35, 149, 255, 0.3);
}

main section.section-form .terminal-gate .gate .input-gate {
    margin-left: 90px;
    width: 70%;
}

main section.section-form button {
    margin-left: 30px;
    margin-bottom: 30px;
    background: #2395FF;
    box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    width: 150px;
    height: 50px;
    border: none;
}

main section.section-form button:focus {
    outline: none;
}

@media (max-width: 766px) {
    main section.section-form .terminal-gate .gate label {
        padding-left: 50px;
    }

    main section.section-form .terminal-gate .gate .input-gate {
        margin-left: 50px;
        width: 52%;
    }

    main section.section-form .from-to .to label {
        padding-left: 0px;
    }

    main section.section-form .from-to .to .to-option {
        margin-left: 0px;
        width: 120%;
    }
}

@media (max-width: 510px) {
    main section.section-form .terminal-gate,
    main section.section-form .from-to {
        display: flex;
        flex-direction: column;
    }

    main section.section-form .terminal-gate .terminal .input-terminal,
    main section.section-form .from-to .from .from-input {
        width: 90%;
    }

    main section.section-form .terminal-gate .gate,
    main section.section-form .from-to .to {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
    }

    main section.section-form .terminal-gate .gate label,
    main section.section-form .from-to .to label {
        padding-left: 0px;
    }

    main section.section-form .terminal-gate .gate .input-gate,
    main section.section-form .from-to .to .to-option {
        margin-left: 0px;
        width: 90%;
    }
}

@media (max-width: 440px) {
    main section.section-form .name-plane,
    main section.section-form .departure-time,
    main section.section-form .arrived-time,
    main section.section-form .price,
    main section.section-form .transit,
    main section.section-form .facilities,
    main section.section-form .airline-class,
    main section.section-form .code,
    main section.section-form .terminal-gate,
    main section.section-form .from-to {
        margin-left: 5px;
    }
}

@media (max-width: 320px) {
    main section.section-form .name-plane,
    main section.section-form .departure-time,
    main section.section-form .arrived-time,
    main section.section-form .price,
    main section.section-form .transit,
    main section.section-form .facilities,
    main section.section-form .airline-class,
    main section.section-form .code,
    main section.section-form .terminal-gate,
    main section.section-form .from-to {
        margin-left: 0px;
    }
}

</style>
