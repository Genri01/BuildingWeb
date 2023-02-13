
const nodemailer = require('nodemailer'); 

const UserController = {
  sendMini:(req,res) => {
    const { body } = req.body
    const { 
      name, email, phone, coment
     } = body;

    if(name !== '') { 
      (async () => {

      let transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 25,
        secure: false,
        auth: {
          user: 'infoimperial01@yandex.ru',
          pass: '9186120232dfy',
        },
      })

      let result = await transporter.sendMail({
        from: `infoimperial01@yandex.ru`,
        to: `webdev170291@yandex.ru`,
        // to: `infoimperial01@gmail.com`,
        subject: `!! Запрос на обратную связь !!`,
        html: `Пользователь ${name.bold()} запрашивает обратную связь по номеру телефона: ${phone.bold()}. Email для обратной связи ${email.bold()} Дитали проекта: " ${coment.bold()} "`,
      })

      transporter.verify(function (error, success) {
        try {
          res.status(200).send({msg: "Ожидайте в ближайшее время с вами свяжутся наши специалисты"})
        } catch (error) {
          res.status(200).send({msg: `Произошла ошибка: ${error}`})
        }
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
        }); 
      })(); 
    } else {
      res.status(200).send({msg: "Проверьте правильность заполненых данных :("})
    }
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
        host: 'smtp.yandex.ru',
        port: 25,
        secure: false,
        auth: {
        user: 'infoimperial01@yandex.ru',
        pass: '9186120232dfy',
        }
      }) 
      
      let result = await transporter.sendMail({
        from: `infoimperial01@yandex.ru`,
        // to: `infoimperial01@gmail.com`,
        to: `webdev170291@yandex.ru`,
        subject: `!! Информация о заказе !!`,
        html: `
        Покупатель: ${byer_first_name.bold()} ${byer_last_name.bold()} с номером телефона: ${byer_tel.bold()} и email(почтой): ${byer_email.bold()}
        Просит помочь с: ${type_project.map((item => item.bold()))}. 
        Наличие материалов: ${materials.bold()}
        Являеться ли хозяином: ${owner.bold()}
        Нужен ли кредит: ${financing.bold()},
        Статус проекта: ${status.bold()},
        Нужно перезвонить в: ${callback.timeString.bold()},
        Комментарии к проекту: " ${coment.bold()} ".
        Способ связи: " ${getcontact.map((item => item.bold()))} ".
        Город доставки: ${addres_city.bold()}
        Адрес доставки: ${addres_street.bold()}
        Индекс: ${addres_index} 
        ` 
      })

      transporter.verify(function (error, success) {
      try {
        res.status(200).send({msg: "Заказ успешно принят. Ожидайте в ближайшее время с вами свяжутся наши специалисты"})
      } catch (error) {
        res.status(200).send({msg: `Произошла ошибка: ${error}`})
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
        host: 'smtp.yandex.ru',
        port: 25,
        secure: false,
        auth: {
        user: 'infoimperial01@yandex.ru',
        pass: '9186120232dfy',
        }
      }) 

      let result = await transporter.sendMail({
        from: `infoimperial01@yandex.ru`,
        to: `infoimperial01@gmail.com`,
        // to: `webdev170291@yandex.ru`,
        subject: `!! Информация о заказе !!`,
        html: `
        Покупатель ${byer_first_name.bold()} с номером телефона: ${byer_tel.bold()} и email(почтой): ${byer_email.bold()}
        ,проживайщий по адрессу: ${addres_street.bold()}
        Отправляет данные по рефералу:
        Имя реферала - ${referal_first_name}.
        Почта реферала - ${referal_email}.
        Телефон реферала - ${referal_tel}.
        Адрес реферала - ${referal_addres_city}. 
        Узнал о реферальной программе:  ${referal_coment}.
        Тип проекта: ${type_project.map((item => item.bold()))} ".
        `
      })

      transporter.verify(function (error, success) {
      try {
        res.status(200).send({msg: "Заказ успешно принят. Ожидайте в ближайшее время с вами свяжутся наши специалисты"})
      } catch (error) {
        res.status(200).send({msg: `Произошла ошибка: ${error}`})
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