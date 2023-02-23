import React, {Component} from 'react'

class AppForm extends Component {

    state = {
        name: '',
        dob: '',
        email: '',
        contact: '',
        about: '',
        error: {
          nameError: '',
          dobError: '',
          emailError: '',
          contactError: '',
          aboutError: '',
        },
        formValid: false,
    }

    handleChange = (e) => {
        if (e.target.id == 'name')
        {
          this.validateName(e.target.value)
        }
        if (e.target.id == 'dob')
        {
          this.validateDob(e.target.value)
        }
        if (e.target.id == 'email')
        {
          this.validateEmail(e.target.value)
        }
        if (e.target.id == 'contact')
        {
          this.validateContact(e.target.value)
        }
        if (e.target.id == 'about')
        {
          this.validateAbout(e.target.value)
        }

        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    validateName = (e) => {
        let formValid = this.state.formValid
        let nameError = this.state.error.nameError
        const pattern = /^[A-Za-z]+$/

        if (e.trim() === '')
        {
            nameError = 'This is required'
            formValid = false
        }
        else if (!pattern.test(e))
        {
            nameError = 'Alphabetical characters only'
            formValid = false
        }
        else
        {
            nameError = ''
            formValid = true
        }

        this.setState({
            e,
            formValid,
            error: { ...this.state.error, nameError },
        })
        return formValid
    }

    validateDob = (e) => {
        let formValid = this.state.formValid
        let dobError = this.state.error.dobError
        const d = new Date()
        
        if (e.trim() === '')
        {
            dobError = 'This is required'
            formValid = false
        }
        else if (new Date(e) > d)
        {
            dobError = 'Invalid date of birth'
            formValid = false
        }
        else
        {
            dobError = ''
            formValid = true
        }

        this.setState({
            e,
            formValid,
            error: { ...this.state.error, dobError },
        })
        return formValid
    }

    validateContact = (e) => {
        let formValid = this.state.formValid
        let contactError = this.state.error.contactError
        const pattern = /^[0-9]*$/

        if (e.trim() === '') 
        {
            contactError = 'This is required'
            formValid = false
        }
        else if (!pattern.test(e)) 
        {
            contactError = 'Numbers only'
            formValid = false
        }
        else if (e.trim().length != 10)
        {
            contactError = "Please enter valid Contact number"
            formValid = false
        }
        else 
        {
            contactError = ''
            formValid = true
        }

        this.setState({
            e,
            formValid,
            error: { ...this.state.error, contactError },
        })
        return formValid
    }

    validateEmail = (e) => {
        let formValid = this.state.formValid
        let emailError = this.state.error.emailError
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if (e.trim() === '')
        {
            emailError = 'This is required'
            formValid = false
        }
        else if (!pattern.test(e))
        {
            emailError = 'Invalid Email Address'
            formValid = false
        }
        else
        {
            emailError = ''
            formValid = true
        }

        this.setState({
            e,
            formValid,
            error: { ...this.state.error, emailError },
        })
        return formValid
    }

    validateAbout = (e) => {
        let formValid = this.state.formValid
        let aboutError = this.state.error.aboutError

        if (e.trim() === '')
        {
            aboutError = 'This is required'
            formValid = false
        }
        else
        {
            aboutError = ''
            formValid = true
        }

        this.setState({
            e,
            formValid,
            error: { ...this.state.error, aboutError },
        })
        return formValid
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (
            this.validateName(this.state.name) &&
            this.validateDob(this.state.dob) &&
            this.validateEmail(this.state.email) &&
            this.validateContact(this.state.contact)&&
            this.validateAbout(this.state.about)
        )
        {
            alert('Form is submitted')
            this.props.addInfo(this.state)
        
            this.setState({
                name: '',
                dob: '',
                email: '',
                contact: '',
                about: '',
                formValid: false,
            })
        }
    }

    render(){
        return(
            <div className="container ">
                <form className="border rounded p-3 mt-5 row" onSubmit={this.handleSubmit}>
                    <h4 className="mb-3">Info</h4>
                    <label className="mb-1">Name</label>
                    <input id="name" className="form-control" type="text" onChange={this.handleChange} value={this.state.name}/>
                    <label className="w-100 text-danger mb-2">{this.state.error.nameError}</label>
                    <label className="mb-1">Date of Birth</label>
                    <input id="dob" className="form-control" type="date" onChange={this.handleChange} value={this.state.dob}/>
                    <label className="w-100 text-danger mb-2">{this.state.error.dobError}</label>
                    <label className="mb-1">Email</label>
                    <input id="email" className="form-control" type="text" onChange={this.handleChange} value={this.state.email}/>
                    <label className="w-100 text-danger mb-2">{this.state.error.emailError}</label>
                    <label className="mb-1">Contact Number</label>
                    <input id="contact" className="form-control" type="text" onChange={this.handleChange} value={this.state.contact}/>
                    <label className="w-100 text-danger mb-2">{this.state.error.contactError}</label>
                    <label className="mb-1">Tell me about yourself</label>
                    <textarea id="about" className="form-control" cols="5" style={{resize:'none'}} onChange={this.handleChange} value={this.state.about}></textarea>
                    <label className="w-100 text-danger mb-2">{this.state.error.aboutError}</label>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AppForm