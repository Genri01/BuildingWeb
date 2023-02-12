
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
  const { body } = req.body; 
  const {
    byer_initial_dead,
    byer_date_birthday,
    byer_date_dead,
    install,
    byer_file,
    byer_initial,
    byer_tel,
    coment,
    byer_email,
    addres_city,
    addres,
    addres_index,
    addres_region,
    delivery_method,
    pay_method,
    buy,
    width,
    material, 
  } = body

  let infobuy = 'Заказали памятники: '
  var attach = [];

  byer_file.map((item) => {
    (async () => {
      attach.push({
        path: item.img
      });
    })();
    return false;
  })

  buy.map((item) => {
    (async () => {
      attach.push({
        path: `data:image/png;base64,${item.img64}`
      });
      infobuy += `
      \n\n\n
      Название: ${item.title},
      Количество: ${item.count},
      ID памятника: ${item.id},
      Цена: ${item.price}
      \n\n\n
      `
    })();
    return false;
  })

  let method_delivery = ''

  switch (delivery_method) {
    case 'transit':
      method_delivery = 'Доставка транспортной кампанией (оплачивается заказчиком)'
      break;
    case 'transitandinstall':
      method_delivery = 'Доставка и установка'
      break;
    case 'maycop':
      method_delivery = 'Cамовывоз с производства г. Майкоп Промышленная 54а'
      break;
    case 'anapa':
      method_delivery = 'Cамовывоз с производства г. Анапа Чехова 50а'
      break;
    default:
      break;
  }
  
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
        Покупатель ${byer_initial.bold()} с номером телефона: ${byer_tel.bold()} и email(почтой): ${byer_email.bold()}
        заказал для умершего ${byer_initial_dead.bold()} ${install ? ' с Установкой' : ' без Установки'}.
        Дата рождения умершего: ${byer_date_birthday.bold()} , Дата смерти умершего: ${byer_date_dead.bold()},
        \n\n\n
        ${infobuy}
        \n\n\n
        Комментарии к заказу:  " ${coment.bold()} ".
        Регион доставки: ${addres_region.bold()}
        Город доставки: ${addres_city.bold()}
        Адрес доставки: ${addres.bold()}
        Индекс: ${addres_index.bold()}
        Способ оплаты: ${pay_method === "nal" ? ' Наличными' : ' Безналичным расчётом'}
        Способ доставки: ${method_delivery},
        Параметры ПЛИТ: ${width},
        Материал ПЛИТ: ${material},
        `,
        attachments: attach
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