import React, { useState } from "react";
import Notif from "./Notif";
import Message from "./Message";
import ImageNotif from "./ImageNotif";
import mark from "/src/assets/tescopizzaorange.jpeg";

import club from "/src/assets/tescopizzalogo.jpeg";


import nathan from "/src/assets/avatar-nathan-peterson.webp";

import "./notification.css";

const Notification = () => {
  const [read, setRead] = useState("unread");
  const [circle, setCircle] = useState("●");
  const [zero, setZero] = useState("3");

  const handleNotifs = () => {
    setRead("read");
    setZero("0");
    setCircle("");
  };

  return (
    <div className="notification-container">
      <div className="notification-header">
        <h1 className="notification-title">Notifications</h1>
        <div className="notification-count">{zero}</div>
        <div className="mark-read links" onClick={handleNotifs}>
          Mark all as read
        </div>
      </div>
      <div className={read}>
        <Notif
          img={mark}
          name={"TesCo Pizza"}
          action={"siparişiniz ile ilgili güncelleme: "}
          post={"Siparişiniz Teslim Edilmiştir. Afiyet olsun!"}
          time={"1m"}
          circle={circle}
        />
      </div>
      <Message
        img={nathan}
        name={"Kurye Ali"}
        action={"tarafınıza bir mesaj gönderdi."}
        post={""}
        time={"5 days"}
      />
      <div className={read}>
        <Notif
          img={mark}
          name={"TesCo Pizza"}
          action={"siparişiniz ile ilgili güncelleme:"}
          post={"Siparişiniz Kuryeye Teslim Edilmiştir"}
          time={"5m"}
          circle={circle}
        />
      </div>
      <div className={read}>
        <Notif
          img={mark}
          name={"TesCo Pizza"}
          action={"siparişiniz oluşturuldu."}
          post={"31.05.2024 13.25 tarihinde oluşturduğunuz 'Tek Kişilik TesCo Mix' adlı siparişiniz tarafımıza ulaşmıştır. En kısa süre içerisinde pizzanız hazırlanmış olup kuryeye teslim edilecektir. Bizi tercih ettiğiniz için teşekkür ederiz."}
          time={"1 day"}
          circle={circle}
        />
      </div>

      <Notif
          img={club}
          name={"TesCo Club"}
          action={"HAFTASONU AKILALMAZ İNDİRİM !!!."}
          post={"27 Mayıs- 29 Mayıs tarihleri arasında yapacağınız ilk alışverişe %10, ikinci alışverişe %15, üç ve daha fazlasına ise %25 indirim siz TesCo Club üyelerine tanımlanacaktır. TesCo Pizza ile kalın :)"}
          time={"1 day"}
          circle={circle}
        />
      <Notif
          img={club}
          name={"TesCo Club"}
          action={"Müşterilerimizin dikkatine."}
          post={"Kendini TesCo Pizza yönetiminden diye tanıtıp sizlerin kredi kartı bilgilerine ulaşmak isteyen kötü niyetli kişilere lütfen itibar etmeyiniz. TesCo Pizza sağlıklı günler diler.)"}
          time={"1 day"}
          circle={circle}
        />
      <Notif
          img={mark}
          name={"TesCo Pizza"}
          action={"siparişiniz ile ilgili güncelleme: "}
          post={"Siparişiniz Teslim Edilmiştir. Afiyet olsun!"}
          time={"1m"}
          circle={circle}
        />
      <Notif
        img={club}
        name={"TesCo Club"}
        action={"Arkadaşını davet et, kazan!"}
        post={"Daha önce Yemeksepeti'nden hiç sipariş vermemiş bir arkadaşını davet ederek hem sen hem de arkadaşın kazançlı çıkabilirsiniz.Arkadaşının Yemeksepeti'nden verdiği ilk siparişi teslim edildiğinde senin hesabına 120 TL'lik kupon kodu tanımlanır!  Davet linki mailine ulaştırıldı. Daha çok arkadaşını davet et, daha çok kazan. "}
        
        time={"2 weeks"}
      />
    </div>
  );
};

export default Notification;
