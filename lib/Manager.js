class manager {
    constructor(name, ID, email, office){
        this.job =    '<p>Manager</p>'
        this.name =   `<p>${name}</p>`
        this.ID =     `<p>${ID}</p>`
        this.email =  `<a href="mailto:${email}">${email}</a>`
        this.office = `<p>${office}</p>`
    }
}

module.exports = manager;