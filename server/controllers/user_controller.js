
const nodemailer = require('nodemailer');  
 
const UserController = {
  sendMini:(req,res) => {
    const { body } = req.body
    const { name, email, phone, coment } = body; 

   (async () => {

     let transporter = nodemailer.createTransport({
        host: 'smtp.timeweb.ru',
        port: 25,
        secure: false,
        auth: {
          user: 'info@butkovconstruction.com',
          pass: 'Sj1071411998.',
        },
      })

      let result = await transporter.sendMail({
        from: `info@butkovconstruction.com`,
        //to: `webdev170291@yandex.ru`,
         to: `info@butkovconstruction.com`,
        subject: `Client information`,
        html: `Name: ${name.bold()} <br/>
        Email: ${email.bold()} <br/> 
        Phone Number: ${phone.bold()} <br/>
        Comments: ${coment.bold()}`,
      })

      transporter.verify(function (error, success) {
        try {
          res.status(200).send({msg: "Expect our specialists to contact you soon"})
        } catch (error) {
          res.status(200).send({msg: `An error has occurred: ${error}`})
        }
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
        }); 
      })(); 
  },
  sendFull:(req,res) => {
  const {   
    byer_first_name,
    byer_tel,
    byer_email,
    byer_last_name,
    addres_city,  
    addres_index,
    addres_street,
    owner,
    financing,
    status,
    callback,  
    coment, 
    getcontact,  
    type_project,    
    materials,  
  } = req.body.body; 
   (async () => {
      let transporter = nodemailer.createTransport({
        host: 'smtp.timeweb.ru',
        port: 25,
        secure: false,
        auth: {
          user: 'info@butkovconstruction.com',
          pass: 'Sj1071411998.',
        },
      })

      let result = await transporter.sendMail({
        from: `info@butkovconstruction.com`,
        //to: `webdev170291@yandex.ru`,
        to: `info@butkovconstruction.com`,
        subject: `!! Запрос на обратную связь !!`,
	html: `
        Name: ${byer_first_name.bold()} ${byer_last_name.bold()} <br/> 
        Phone Number: ${byer_tel.bold()} <br/>  
        Email: ${byer_email.bold()} <br/> 
        Project: ${type_project.map((item => item.bold()))} <br/>  
        Material Purchased: ${materials.bold()} <br/> 
        Owner: ${owner.bold()} <br/> 
        Interested in Financing: ${financing.bold()} <br/> 
        Project Status: ${status.bold()} <br/> 
        Sheduled Call: ${callback.timeString.bold()} <br/> 
        Comments: ${coment.bold()} <br/> 
        How to Contact: ${getcontact.map((item => item.bold()))} <br/> 
        City: ${addres_city.bold()} <br/> 
        Street: ${addres_street.bold()} <br/> 
        ZIP: ${addres_index} <br/>  
        ` 
      })

      transporter.verify(function (error, success) {
      try {
        res.status(200).send({msg: "Expect our specialists to contact you soon"})
      } catch (error) {
        res.status(200).send({msg: `An error has occurred: ${error}`})
      }
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
      });
    })();
  },
  sendReferal:(req,res) => {
  const { 
    referal_first_name,  
    referal_email,
    referal_tel, 
    referal_addres_city,
    byer_first_name,
    byer_email,
    byer_tel,
    addres_street,  
    referal_coment,
    type_project,
   } = req.body.body;  
 
    (async () => { 
      let transporter = nodemailer.createTransport({
        host: 'smtp.timeweb.ru',
        port: 25,
        secure: false,
        auth: {
          user: 'info@butkovconstruction.com',
          pass: 'Sj1071411998.',
        },
      })
 
      let result = await transporter.sendMail({
        from: `info@butkovconstruction.com`,
        //to: `webdev170291@yandex.ru`,
        to: `info@butkovconstruction.com`,
        subject: `Client information`,
        html: `
        Name: ${byer_first_name.bold()} } <br/> 
        Phone Number: ${byer_tel.bold()} <br/>  
        Email: ${byer_email.bold()} <br/>  
        Address: ${addres_street.bold()} <br/> 
        Referals info: <br/> 
        Referals Name: ${referal_first_name} <br/> 
        Referals Email: ${referal_email} <br/> 
        Referals Phone Number: ${referal_tel} <br/> 
        Referals Address: ${referal_addres_city} <br/>  
        Referals Comments: ${referal_coment} <br/> 
        Referals Project: ${type_project.map((item => item.bold()))} <br/> 
        `
      })

      transporter.verify(function (error, success) {
      try {
        res.status(200).send({msg: "Expect our specialists to contact you soon"})
      } catch (error) {
        res.status(200).send({msg: `An error has occurred: ${error}`})
      }
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
      });
    })(); 
  }
}

module.exports = UserController;
