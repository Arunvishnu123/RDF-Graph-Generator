
function email ( reciverEmail,message){
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'arunvishnu40@gmail.com',
        pass: 'arunpeyad',
      },
    });
    
    var mailOptions = {
      from: 'arunvishnu40@gmail.com',
      to: reciverEmail,
      subject: 'RDFCollaborative RDF Graph Generator',
      text: message + "\n" + " http://192.168.146.202:8084/"
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

exports.email = email;