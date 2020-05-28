export default class FormHandler {
  constructor (field = []) {
    this.formField = field
  }

  // menghubungkan vue instance
  bind (vm) {
    this.vm = vm
  }

  // siapkan state "form"
  stateForm = () => {
    let data = {}
    this.formField.forEach((name) => {
      const addnew = { [name]: '' }
      data = { ...data, ...addnew }
    })
    return {
      success: '',
      loading: false,
      ...data
    }
  }

  // siapkan state "errors"
  stateErrors () {
    let data = {}
    this.formField.forEach((name) => {
      const addnew = {
        [name]: {
          state: false,
          message: ''
        }
      }

      data = { ...data, ...addnew }
    })

    return data
  }

  // hasilkan objek state untuk di masukan ke data
  state () {
    const { isEmail } = this
    this.validator = {
      isEmail
    }
    const state = {
      form: this.stateForm(),
      errors: this.stateErrors()
    }

    return state
  }

  // set state form
  setForm (name, value) {
    this.vm.form[name] = value
  }

  // mulai loading & clear semua error
  submit () {
    this.vm.form.loading = true

    Object.keys(this.vm.errors).forEach((key) => {
      this.vm.errors[key].state = false
    })
  }

  // set error state & message
  error (name, message) {
    this.vm.errors[name].state = true
    this.vm.errors[name].message = message
    // hentikan loading
    this.vm.form.loading = false
  }

  // jika tidak ada error
  noErrors () {
    let result = true
    Object.keys(this.vm.errors).forEach((key) => {
      if (this.vm.errors[key].state) {
        result = false
      }
    })

    return result
  }

  // reset state form
  success (message, withReset = true) {
    this.vm.form.loading = false
    this.vm.form.success = message

    if (withReset) {
      this.formField.forEach((name) => {
        this.vm.form[name] = ''
      })
    }
  }

  // validator - isEmail
  isEmail (email) {
    const regex = /^\w+([\\.-]\w+)*@\w+([\\.-]?\w+)*(\.\w{2,})+$/i
    const res = regex.test(email)
    if (res) return true
    else return false
  }
}