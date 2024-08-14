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
    to: ['selvapani555@gmail.com','selvachrista@gmail.com'], // Replace this recipient Email address.
    cc: 'selvapani555@gmail.com',
    subject: 'Email With Attachments Testing',
    html: `<h1 style="color: Aqua">Welcome To My GmailTask</h1> 
    `,
    attachments:[
        {
            filename: 'image.png',
            path: './Files/thumbnail.png' //replace files path according to your files
        },
        {
            filename: 'Document.doc',
            path: './Files/htmlDoc.docx' //replace files path according to your files
        },
        {
            filename: 'HtmlPDF.pdf',
            path: './Files/htmlAllTag.pdf' //replace files path according to your files
        },
        {
            filename: 'nodejs.png',
            path: './Files/nodejs.png' //replace files path according to your files
        }
    ]
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log('Erroe Occured ' + error);
    }else {
        console.log("Email Sent Successfully to " + mailOptions.to);
    }
});