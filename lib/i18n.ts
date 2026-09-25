export type Lang = "ge" | "ru" | "en";

export const translations = {
  ge: {
    nav: {
      home: "მთავარი",
      about: "ჩვენ შესახებ",
      atmosphere: "ატმოსფერო",
      menu: "მენიუ",
      services: "მომსახურება",
      wineShop: "ღვინის მაღაზია",
      reservation: "რეზერვაცია",
      contact: "კონტაქტი",
    },
    hero: {
      slides: [
        { line1: "რესტორანი ასკანელი ტერასა", line2: "ბათუმის ზღვისპირას" },
        { line1: "ღვინის რესტორანი ცოცხალი", line2: "მუსიკის საღამოებით" },
        { line1: "დაუვიწყარი გემოები და", line2: "უნიკალური ღვინის არჩევანი" },
      ],
      cta: "მაგიდის დაჯავშნა",
    },
    about: {
      title: "ჩვენ შესახებ",
      subtitle: "რესტორანი ასკანელი ტერასა",
      text1: "2016 წლიდან ბათუმის ბულვარის პირას, Hilton-ის ხუთვარსკვლავიანი სასტუმროს შენობაში. ქალაქის სტუმართა და გურმანების შეფასებით, ჩვენი რესტორანი ბათუმის ღირსშესანიშნაობად და სარესტორნო ცხოვრებაში გამორჩეულ მოვლენად იქცა.",
      text2: "ბულვარი ერთი მხარეს, ზღვა და \"სარაკინე\" (ბათუმის სიმბოლო) — მეორე. სწორედ ამ ადგილიდან იდება განსაკუთრებული ესთეტიკა: ქართული და ევროპული სამზარეულოს სინთეზი, ავტორობრივი ინტერიერი.",
      menuBtn: "მენიუს ნახვა",
    },
    atmosphere: {
      title: "ატმოსფერო",
      subtitle: "ჩვენი სივრცეები",
      tabs: ["1 სართული", "ანტრესოლი", "2 სართული", "ტერასა"],
    },
    chef: {
      title: "ბრენდ შეფი",
      subtitle: "გაიცანით ჩვენი ბრენდ შეფი",
      name: "შეფ-მზარეული შალვა პაპაშვილი",
      text: "შეფ-მზარეული შალვა პაპაშვილი ხელმძღვანელობს ჩვენს სამზარეულოს. მისი ხელოვნება — ქართული ტრადიციები და თანამედროვე ტექნიკების შეხამება.",
    },
    services: {
      title: "მომსახურება",
      subtitle: "ჩვენი სპეციალური სერვისები",
      items: [
        {
          title: "საბავშვო ოთახი",
          text: "საბავშვო ოთახი სათამაშოებით 1-ელ სართულზე. ძიძა ზრუნავს ბავშვებზე, მშობლებს კი შეუძლიათ \"ვიდეოძიძით\" დააკვირდნენ მათ.",
          schedule: "ივნ–სექტ: ყოველდღე 11:00–23:00 | ოქტ–მაი: პარ, შაბ, კვ 12:00–22:00",
        },
        {
          title: "ღვინის დეგუსტაცია",
          text: "ასკანელის ღვინის დეგუსტაცია-სემინარები ექსპერტებისა და ცნობილი მეღვინეების ხელმძღვანელობით. ზაფხულში — სტუმრების სურვილით — იახტაზეც.",
          schedule: "",
        },
        {
          title: "მასტერკლასები",
          text: "საბავშვო მასტერკლასები — ისწავლეთ ადგილობრივი კვლის ხელოვნება. ბოლოს გადაეცემა სერტიფიკატი.",
          schedule: "მოზრდილი 45 GEL | ბავშვი 30 GEL",
        },
        {
          title: "დეკორაცია",
          text: "დღეობების გაფორმება: ნათლობა, დაბადების დღე, ნიშნობა, სასიძოს/სასიძოს სუფრის მორთვა.",
          schedule: "",
        },
      ],
    },
    wineShop: {
      title: "ღვინის მაღაზია",
      subtitle: "ასკანელი — ღვინის მაღაზია",
      text1: "ფირმის ღვინის მაღაზია \"ასკანელი\" 2016 წლიდან მდებარეობს Hilton-ის შენობაში, რესტორანთან ახლოს. კომპანია 60-ზე მეტ სახელის ღვინოს, ბრენდი, ცქრიალა ღვინოსა და ჭაჭას გამოუშვებს. ქარხნები სამ რეგიონში: კახეთი, გურია, თბილისი.",
      text2: "ბრენდის ისტორია სათავეს იღებს სოფ. ასკანაში, ცნობილ კოშკ \"ასკანიანთან\". მეღვინეობის ტრადიცია XIX საუკუნის ბოლოდან.",
      hours: "ორს–პარ: 11:00–23:00 | შაბ–კვ: 12:00–22:00",
    },
    reservation: {
      title: "რეზერვაციის ფორმა",
      subtitle: "დაჯავშნეთ მაგიდა",
      fields: {
        name: "სახელი *",
        email: "ელ-ფოსტა",
        phone: "ტელეფონი *",
        persons: "ადამიანების რაოდენობა",
        date: "თარიღი",
        time: "საათი",
        comment: "შენიშვნა",
      },
      submit: "დაჯავშნეთ მაგიდა",
      success: "დიდი მადლობა! თქვენი განაცხადი მიღებულია.",
    },
    contact: {
      title: "კონტაქტი",
      address: "რუსთაველის ქ. #40, ბათუმი (6000), საქართველო",
      addressNote: "Hilton Batumi",
      phone: "+995 557 07 55 55",
      email: "ter.askaneli@gmail.com",
      hours: {
        title: "სამუშაო საათები",
        restaurant: "რესტორანი: 11:00 – 00:00 (ყოველდღე)",
        kitchen: "სამზარეულო: 11:00 – 23:00 (ყოველდღე)",
        music: "ცოცხალი მუსიკა: 21:00 – 23:00 (ყოველდღე)",
        shopWeekday: "ღვინის მაღაზია (ორს–პარ): 11:00 – 23:00",
        shopWeekend: "ღვინის მაღაზია (შაბ–კვ): 12:00 – 22:00",
      },
    },
    footer: {
      rights: "ყველა უფლება დაცულია",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      atmosphere: "Атмосфера",
      menu: "Меню",
      services: "Услуги",
      wineShop: "Винный магазин",
      reservation: "Бронирование",
      contact: "Контакты",
    },
    hero: {
      slides: [
        { line1: "Ресторан Асканели Терраса", line2: "на набережной Батуми" },
        { line1: "Винный ресторан с живой", line2: "музыкой каждый вечер" },
        { line1: "Незабываемые вкусы и", line2: "уникальный выбор вин" },
      ],
      cta: "Забронировать стол",
    },
    about: {
      title: "О нас",
      subtitle: "Ресторан Асканели Терраса",
      text1: "С 2016 года на набережной Батуми, в здании пятизвёздочного отеля Hilton. По отзывам жителей, гостей города и гурманов, ресторан стал достопримечательностью Батуми и заметным явлением в его ресторанной жизни.",
      text2: "С одной стороны — бульвар, с другой — море и «Осьминог», символ Батуми. Отсюда особая эстетика: авторский интерьер и синтез грузинской и европейской кухни.",
      menuBtn: "Смотреть меню",
    },
    atmosphere: {
      title: "Атмосфера",
      subtitle: "Наши пространства",
      tabs: ["1 этаж", "Антресоль", "2 этаж", "Терраса"],
    },
    chef: {
      title: "Бренд-шеф",
      subtitle: "Познакомьтесь с нашим бренд-шефом",
      name: "Шеф-повар Шалва Папашвили",
      text: "Шеф-повар Шалва Папашвили возглавляет нашу кухню. Его искусство — сочетание грузинских традиций с современными техниками.",
    },
    services: {
      title: "Услуги",
      subtitle: "Наши специальные сервисы",
      items: [
        {
          title: "Детская комната",
          text: "Детская комната с игрушками на 1-м этаже. Няня присматривает за детьми, родители могут наблюдать через «видеоняню».",
          schedule: "Июн–Сен: ежедневно 11:00–23:00 | Окт–Май: пт, сб, вс 12:00–22:00",
        },
        {
          title: "Дегустация вин",
          text: "Дегустации-семинары вин «Асканели» под руководством экспертов и известных виноделов. Летом по желанию гостей — на яхте.",
          schedule: "",
        },
        {
          title: "Мастер-классы",
          text: "Детские мастер-классы по аджарскому хачапури и хинкали. По окончании выдаются сертификаты.",
          schedule: "Взрослый 45 GEL | Детский 30 GEL",
        },
        {
          title: "Декорация",
          text: "Оформление праздников: крестины, день рождения, помолвка, оформление стола невесты.",
          schedule: "",
        },
      ],
    },
    wineShop: {
      title: "Винный магазин",
      subtitle: "Асканели — Винный магазин",
      text1: "Фирменный магазин «Асканели» работает с 2016 года в здании Hilton, рядом с рестораном. Компания выпускает более 60 наименований вина, а также бренди, игристое и чачу. Заводы в трёх регионах: Кахети, Гурия, Тбилиси.",
      text2: "История бренда восходит к древней крепости «Асканиани» в селе Аскана. Традицию виноделия заложил Антимоз Чхаидзе в конце XIX века.",
      hours: "Пн–Пт: 11:00–23:00 | Сб–Вс: 12:00–22:00",
    },
    reservation: {
      title: "Форма бронирования",
      subtitle: "Забронировать стол",
      fields: {
        name: "Имя *",
        email: "Email",
        phone: "Телефон *",
        persons: "Количество гостей",
        date: "Дата",
        time: "Время",
        comment: "Комментарий",
      },
      submit: "Забронировать стол",
      success: "Спасибо! Ваша заявка принята.",
    },
    contact: {
      title: "Контакты",
      address: "ул. Руставели, 40, Батуми (6000), Грузия",
      addressNote: "Здание отеля Hilton Batumi",
      phone: "+995 557 07 55 55",
      email: "ter.askaneli@gmail.com",
      hours: {
        title: "Часы работы",
        restaurant: "Ресторан: 11:00 – 00:00 (ежедневно)",
        kitchen: "Кухня: 11:00 – 23:00 (ежедневно)",
        music: "Живая музыка: 21:00 – 23:00 (ежедневно)",
        shopWeekday: "Винный магазин (Пн–Пт): 11:00 – 23:00",
        shopWeekend: "Винный магазин (Сб–Вс): 12:00 – 22:00",
      },
    },
    footer: {
      rights: "Все права защищены",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      atmosphere: "Atmosphere",
      menu: "Menu",
      services: "Services",
      wineShop: "Wine Shop",
      reservation: "Reservation",
      contact: "Contact",
    },
    hero: {
      slides: [
        { line1: "Restaurant Askaneli Terrassa", line2: "on the Batumi Seafront" },
        { line1: "A wine restaurant with live", line2: "music every evening" },
        { line1: "Unforgettable flavours and", line2: "a unique wine selection" },
      ],
      cta: "Book a Table",
    },
    about: {
      title: "About Us",
      subtitle: "Restaurant Askaneli Terrassa",
      text1: "Operating since 2016 on the Batumi Boulevard, inside the five-star Hilton hotel. Locals, visitors and food lovers alike consider the restaurant a landmark of Batumi and a defining presence in the city's dining scene.",
      text2: "The boulevard on one side, the sea and the 'Octopus' — Batumi's symbol — on the other. This setting called for something extraordinary: a distinctive aesthetic and a synthesis of Georgian and European cuisine.",
      menuBtn: "View Menu",
    },
    atmosphere: {
      title: "Atmosphere",
      subtitle: "Our Spaces",
      tabs: ["1st Floor", "Mezzanine", "2nd Floor", "Terrace"],
    },
    chef: {
      title: "Brand Chef",
      subtitle: "Meet Our Brand Chef",
      name: "Chef Shalva Papashvili",
      text: "Chef Shalva Papashvili leads our kitchen, bringing together Georgian culinary traditions and contemporary techniques.",
    },
    services: {
      title: "Services",
      subtitle: "Our Special Services",
      items: [
        {
          title: "Children's Room",
          text: "A children's room with toys on the 1st floor. A nanny watches over the children while parents can keep an eye on them via a video monitor.",
          schedule: "Jun–Sep: daily 11:00–23:00 | Oct–May: Fri, Sat, Sun 12:00–22:00",
        },
        {
          title: "Wine Tasting",
          text: "Askaneli wine tasting seminars led by experts and renowned winemakers. In summer, tastings can also be arranged on a yacht.",
          schedule: "",
        },
        {
          title: "Master Classes",
          text: "Children's cooking master classes — learn to make Adjarian khachapuri and khinkali. Certificates are awarded on completion.",
          schedule: "Adult 45 GEL | Child 30 GEL",
        },
        {
          title: "Decoration",
          text: "Event decoration for christenings, birthdays, engagements and bridal table setups.",
          schedule: "",
        },
      ],
    },
    wineShop: {
      title: "Wine Shop",
      subtitle: "Askaneli — Wine Shop",
      text1: "The Askaneli flagship wine shop has been operating since 2016 inside the Hilton building, adjacent to the restaurant. The company produces over 60 wine labels, as well as brandy, sparkling wine and chacha. Wineries across three regions: Kakheti, Guria and Tbilisi.",
      text2: "The brand's history traces back to the ancient Askaniani fortress in the village of Askana. The winemaking tradition was established by Antimoz Chkhaidze in the late 19th century.",
      hours: "Mon–Fri: 11:00–23:00 | Sat–Sun: 12:00–22:00",
    },
    reservation: {
      title: "Reservation Form",
      subtitle: "Book a Table",
      fields: {
        name: "Name *",
        email: "Email",
        phone: "Phone *",
        persons: "Number of guests",
        date: "Date",
        time: "Time",
        comment: "Comment",
      },
      submit: "Book a Table",
      success: "Thank you! Your request has been received.",
    },
    contact: {
      title: "Contact",
      address: "40 Rustaveli St., Batumi (6000), Georgia",
      addressNote: "Hilton Batumi building",
      phone: "+995 557 07 55 55",
      email: "ter.askaneli@gmail.com",
      hours: {
        title: "Opening Hours",
        restaurant: "Restaurant: 11:00 – 00:00 (daily)",
        kitchen: "Kitchen: 11:00 – 23:00 (daily)",
        music: "Live music: 21:00 – 23:00 (daily)",
        shopWeekday: "Wine Shop (Mon–Fri): 11:00 – 23:00",
        shopWeekend: "Wine Shop (Sat–Sun): 12:00 – 22:00",
      },
    },
    footer: {
      rights: "All rights reserved",
    },
  },
};

export type Translations = typeof translations.en;
