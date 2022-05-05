class engineer {
    constructor(name, ID, email, GitHub) {
        this.job =    '<p>Engineer</p>';
        this.name =   `<p>${name}</p>`
        this.ID =     `<p>${ID}</p>`
        this.email =  `<a href="mailto:${email}">${email}</a>`
        this.GitHub = `<a href="https://github.com/${GitHub}">${GitHub}</a>`;
    }
}

module.exports = engineer;