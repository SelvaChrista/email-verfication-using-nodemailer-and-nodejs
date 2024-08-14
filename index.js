const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'selvapani555@gmail.com', // Replace this with your Email Id.
        pass: 'crfc gzxb qchn odlv' // Replace this with your Password.
    }
});

let mailOptions = {
    from: 'selvapani555@gmail.com', // Replace this with your Email Id.
    to: 'selvachrista@gmail.com', // Replace this with Recipient Email Id.
    subject: 'Testing Nodemailer',
    html: '<h1>Welcome to MyTask</h1>  For Learning Full Stack Web development! '

};

transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log('Error Occured' + error)
    }
    else {
        console.log('Successfully Email Sent To:' + mailOptions.to, info.response)
    }
})