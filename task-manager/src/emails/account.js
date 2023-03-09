const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'alan.glp514@gmail.com',
        subject: 'Thanks for joing in',
        text: `Welcome to the app, ${name}.`,
        html: '<strong>555</strong>'
    }

    sgMail.send(msg).then(() => {
        console.log('Email Sent')
    }).catch((error) => {
        console.error(error)
    })
}

const sendCancelationEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'alan.glp514@gmail.com',
        subject: 'Thanks for using the App',
        text: `See you later, ${name}.`,
        html: '<strong>See U></strong></br><p>Goodbye, Blue Sky</p>'
    }

    sgMail.send(msg).then(() => {
        console.log('Cancelation Email Sent')
    }).catch((error) => {
        console.error(error)
    })
}


module.exports = { sendWelcomeEmail, sendCancelationEmail }