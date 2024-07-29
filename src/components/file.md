


 const [pageData, setPageData] = useState(null);
 const [componentData, setComponentData ] = useState(null)  */

/* {
    swiper: {
      slides: [
        {
          title: 'PURE GOLD DELICACY',
          description: 'Discover & Personalize your drinking experience'
        },
        {
          title: '#KISSPLASTICGOODBYE',
          description: 'lorem ipsum'
        },
        {
          title: 'A WATER, WHICH REMAINS WATER,BUT STILL SO DIFFERENT',
          description: 'NEVAS Water combines the water of two natural springs and thus the best mineralization and taste.'
        },
        {
          title: 'PURE GOLD DELICACY',
          description: 'no preservatives, no coloring, no flavor enhancement - only 2 most basic and'
        },
        {
          title: 'EARTH’S FINEST WATER',
          description: 'Purified by trade winds, and filtered by volcanic rock, it collects in an underground Aquifer, where we bottle it at the source.'
        }
      ]
    },
testimonials: [
    {title: 'Amazing product. The results are so transformative in texture and my face feels plump and healthy.', aurther: 'KATHLEEN LEE'},
    {title: 'Ipsum magna Lorem in ea ut enim occaecat cupidatat tempor officia.', aurther: 'KAREN LEE'},
    {title: 'Fugiat qui labore consectetur ea dolore duis quis.Occaecat occaecat quis culpa labore proident in ipsum ad occaecat commodo ex proident eu.', aurther: 'JAMMY NEUTRON'},
    {title: 'Tempor ullamco proident deserunt elit ex id nostrud aute sint sint eiusmod anim.', aurther:'MOUTIN DEW'},
]
  };
  UPDATE pages_eng
SET page_content = '{
    "swiper": {
        "slides": [
            {
                "title": "PURE GOLD DELICACY",
                "description": "Discover & Personalize your drinking experience",
                "bg": "https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/f5ee510b-bb2d-4ab3-3286-261747333300/public",
                "color": "white"
            },
            {
                "title": "#KISSPLASTICGOODBYE",
                "description": "lorem ipsum",
                "bg": "https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/33874b1d-7b39-498b-16f6-48d7bd0d7300/public",
                "color": "black"
            },
            {
                "title": "A WATER, WHICH REMAINS WATER, BUT STILL SO DIFFERENT",
                "description": "NEVAS Water combines the water of two natural springs and thus the best mineralization and taste.",
                "bg": "https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/24be2c83-8d23-4c57-6498-ad575173ce00/public",
                "color": "black"
            },
            {
                "title": "PURE GOLD DELICACY",
                "description": "no preservatives, no coloring, no flavor enhancement - only 2 most basic and",
                "bg": "https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/ba202ae9-21ca-45c8-8226-779198696500/public",
                "color": "white"
            },
            {
                "title": "EARTH'S FINEST WATER",
                "description": "Purified by trade winds, and filtered by volcanic rock, it collects in an underground Aquifer, where we bottle it at the source.",
                "bg": "https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/7b1f2b80-1411-4b4e-9c6d-04f9cb35ec00/public",
                "color": "white"
            }
        ]
    },
    "testimonials": [
        { "title": "Amazing product. The results are so transformative in texture and my face feels plump and healthy.", "author": "KATHLEEN LEE" },
        { "title": "Ipsum magna Lorem in ea ut enim occaecat cupidatat tempor officia.", "author": "KAREN LEE" },
        { "title": "Fugiat qui labore consectetur ea dolore duis quis. Occaecat occaecat quis culpa labore proident in ipsum ad occaecat commodo ex proident eu.", "author": "JAMMY NEUTRON" },
        { "title": "Tempor ullamco proident deserunt elit ex id nostrud aute sint sint eiusmod anim.", "author": "MOUTIN DEW" }
    ],
    "insights": [
      {
        "img": "https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-4.webp",
        "date": "August 16, 2022",
        "title": "THE HYDROLOGIST UNIQUE PRODUCTS",
        "url": "/insight/:1"
      },
      {
        "img": "https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-3.webp",
        "date": "August 16, 2022",
        "title": "CANADA WATER BRAND LAUNCHING IN UAE",
        "url": "/insight/:2"
      },
      {
        "img": "https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-2.webp",
        "date": "August 16, 2022",
        "title": "SALACIOUS DRINKS – ONLINE BOTTLED WATER BOUTIQUE",
        "url": "/insight/:3"
      },
      {
        "img": "https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog1.webp",
        "date": "October 1, 2021",
        "title": "BEGINNING OF THE LUXURY WATER WAVE",
        "url": "/insight/:4"
      }
    ],
    "fyw": {
      "title": "FIND YOUR WATER",
      "text": "Personalize your drinking experince",
       "bg": "https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/26cea500-b5d5-4233-7337-17af4293e000/public"
    }


}'
WHERE page = 'home';



/* <div key={index} style={{ marginBlock: 10, height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', flexDirection: 'column', marginTop: '3rem' , backgroundColor: '#ebebeb'}}  >
                        <h5 style={{ margin: 0, textAlign: 'left', width: '100%' }}>swiper title <PenIcon size="15px" /> </h5>
                        <div style={{ display: 'flex', width: '90%', border: '1px solid black' }}>  <input type='text' style={{ backgroundColor: 'transparent', textAlign: 'left', padding: '1rem', display: 'inline', flex: 1, border: 'none', outline: 'none' }} value={item.title} onChange={(e) => handleTitleChange(index, e.target.value)} /> </div>

                        <h5 style={{ margin: 0, textAlign: 'left', width: '100%' }}>swiper subtitle  <PenIcon size="15px" /> </h5>
                        <div style={{ display: 'flex', width: '90%', border: '1px solid black' }}>   <input type='text' style={{ backgroundColor: 'transparent', textAlign: 'left', padding: '1rem', display: 'inline', flex: 1, border: 'none', outline: 'none' }} value={item.description} onChange={(e) => handleDescriptionChange(index, e.target.value)} /></div>
                        <h5 style={{ margin: 0, textAlign: 'left', width: '100%' }}>change image  <PenIcon size="15px" /> </h5>
                        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                          <input type='file' onChange={(e) => { handleFileChange(e); }} />
                          {file && <button onClick={() => handleImageChange(index, item.bg)}>upload image</button>}
                          <img style={{ width: 200, height: 100 }} src={item.bg || ""} />
                        </div>

                      </div> */







{
"price": "15 AED",
"name": "TEST UPDATE",
"rating": 23,
"quantity": 3,
"category": "well-being",
"id": 24,
"image": "https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/500b0ab4-4c45-49ff-8c1e-d1159d3b4100/public",
"description": "test test test api test postman test"
}


{
  "header": {
    "header": {
      "home": "Home",
      "categories": {"title": "CATEGORIES", "content": {}},
      "shop": "SHOPE",
      "insights": "INSIGHTS",
      "offers": "OFFERS",
      "who_we_are": "WHO WE ARE",
      "water_sommelier": "WATER SOMMELIER",
      "executive_lounge": "EXECUTIVE LOUNGE"
    },
    "header": {
      "home": "Accueil",
      "categories": {"title": "CATÉGORIES", "content": {}},
      "shop": "BOUTIQUE",
      "insights": "APERÇUS",
      "offers": "OFFRES",
      "who_we_are": "QUI NOUS SOMMES",
      "water_sommelier": "SOMMELIER DE L'EAU",
      "executive_lounge": "SALON EXÉCUTIF"
    },
    "es": {
      "home": "Inicio",
      "categories": {"title": "CATEGORÍAS", "content": {}},
      "shop": "TIENDA",
      "insights": "PERSPECTIVAS",
      "offers": "OFERTAS",
      "who_we_are": "QUIÉNES SOMOS",
      "water_sommelier": "SOMMELIER DE AGUA",
      "executive_lounge": "SALA EJECUTIVA"
    },
    "ru": {
      "home": "Главная",
      "categories": {"title": "КАТЕГОРИИ", "content": {}},
      "shop": "МАГАЗИН",
      "insights": "ВЗГЛЯДЫ",
      "offers": "ПРЕДЛОЖЕНИЯ",
      "who_we_are": "КТО МЫ",
      "water_sommelier": "СОММЕЛЬЕ ПО ВОДЕ",
      "executive_lounge": "ЭКСКЛЮЗИВНЫЙ ЗАЛ"
    },
    "ar": {
      "home": "الصفحة الرئيسية",
      "categories": {"title": "الفئات", "content": {}},
      "shop": "المتجر",
      "insights": "رؤى",
      "offers": "عروض",
      "who_we_are": "من نحن",
      "water_sommelier": "خبير المياه",
      "executive_lounge": "صالة تنفيذية"
    }
  }
}


















[
  {
    "id": 1,
    "url": "/insight/:1",
    "header": "The hydrologist unique Products",
    "ftxt": "Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.",
    "quote": "I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.",
    "stxt": "If I fell in love with a woman for an artistic reason, or from the point of view of my work, I think it would rob her of something. We live in an era of globalization and the era of the woman. Never in the history of the world have women been more in control of their destiny.",
    "stitle": "Your imagination, our creation",
    "ttxt": "Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…",
    "ltxt": "Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.",
    "aurther": "Jeff",
    "date": "2-2-223",
    "img": "https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-4.webp"
  },
  {
    "id": 2,
    "url": "/insight/:2",
    "header": "CANADA WATER BRAND LAUNCHING IN UAE",
    "ftxt": "Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.",
    "quote": "I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.",
    "stxt": "If I fell in love with a woman for an artistic reason, or from the point of view of my work, I think it would rob her of something. We live in an era of globalization and the era of the woman. Never in the history of the world have women been more in control of their destiny.",
    "stitle": "Your imagination, our creation",
    "ttxt": "Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…",
    "ltxt": "Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.",
    "aurther": "Jeff",
    "date": "2-2-223",
    "img": "https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-3.webp"
  },
  {
    "id": 3,
    "url": "/insight/:3",
    "header": "SALACIOUS DRINKS – ONLINE BOTTLED WATER BOUTIQUE",
    "ftxt": "Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.",
    "quote": "I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.",
    "stxt": "If I fell in love with a woman for an artistic reason, or from the point of view of my work, I think it would rob her of something. We live in an era of globalization and the era of the woman. Never in the history of the world have women been more in control of their destiny.",
    "stitle": "Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…",
    "ttxt": "Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…",
    "ltxt": "Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.",
    "aurther": "Jeff",
    "date": "2-2-223",
    "img": "https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-2.webp"
  },
 {
  "id": 3,
  "url": "/insight/:4",
  "header": "BEGINNING OF THE LUXURY WATER WAVE",
  "ftxt": "Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.",
  "quote": "I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.",
  "stxt": "If I fell in love with a woman for an artistic reason, or from the point of view of my work, I think it would rob her of something. We live in an era of globalization and the era of the woman. Never in the history of the world have women been more in control of their destiny.",
  "stitle": "Your imagination, our creation",
  "ttxt": "Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…",
  "ltxt": "Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.",
  "aurther": "Jeff",
  "date": "2-2-223",
  "img": "https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog1.webp"
}
]


{
  "page_title": "Who We Are",
  "About_us_title": "About Us",
  "About_us_body": `About Us Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`,
  "our_story_title": "Our Story",
  "our_story_body": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
  "our_team": [
    {
      "name": "lorem ibseam",
      "position": "lorem ibseam",
      "pic" : "https://example.com/pictures/1"
    },
    {
      "name": "lorem ibseam",
      "position": "lorem ibseam",
      "pic" : "https://example.com/pictures/1"
    },
    {
      "name": "lorem ibseam",
      "position": "lorem ibseam",
      "pic" : "https://example.com/pictures/1"
    },
    {
      "name": "lorem ibseam",
      "position": "lorem ibseam",
      "pic" : "https://example.com/pictures/1"
    }
  ],
  "our_team_title": "Our Team",
  background_pics: [
    "",
    "",
    "",
    ""
  ]

}

{
  "banner_img": "https://tearappy.com/wp-content/uploads/2022/08/Banner_1.png",
  "banner_txt": "Welcome To Your Executive Lounge",
  "banner_btn_txt": "Shope Now",
  "page_paragraph" : " Are you interested in Lifestyle, Sports, Photography, Sustainable Products, or eCommerce? Are you a social media influencer looking to collaborate with brands that add value to your audience? Look no further! The Hydrologist Affiliate Program is here to partner with enthusiastic individuals who share our passion for sustainability and our brand.

                        By joining our affiliate program, you can benefit from our optimized website, designed to maximize conversions and increase your earnings. We are thrilled to form partnerships with individuals who are genuinely passionate about our brand, as well as influencers who possess a strong engagement with their audience.

                        Embark on this exciting journey with us and become a part of our affiliate programs and business affiliate opportunities. Join Hydrologist today!",
  "page_list_title": "How Does it Work",
  "page_list": [
    "Register as an affiliate on our network completely free of charge.",
    "Submit your    application to become a part of the Venture Pal Affiliate program",
    "Incorporate  our creative assets into your website and begin earning commissions right away!"
  ] 

}