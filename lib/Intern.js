class intern {
    constructor(name, ID, email, school) {
        this.job =    '<p>Intern</p>';
        this.name =   `<p>${name}</p>`
        this.ID =     `<p>${ID}</p>`
        this.email =  `<a href="mailto:${email}">${email}</a>`
        this.school = `<p>${school}</p>`
    }
}

module.exports = intern;