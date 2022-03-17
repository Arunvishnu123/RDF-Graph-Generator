
function email ( reciverEmail,message){
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'arunvishnu40@gmail.com',
        pass: 'password',
      },
    });
    
    var mailOptions = {
      from: 'arunvishnu40@gmail.com',
      to: 'arunvishnu40@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

