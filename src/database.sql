UPDATE your_table_name
SET page_content = '{
  "page_title": "Who We Are",
  "About_us_title": "About Us",
  "About_us_body": "About Us Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  "our_story_title": "Our Story",
  "our_story_body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  "our_team": [
    {
      "name": "lorem ibseam",
      "position": "lorem ibseam",
      "pic": "https://example.com/pictures/1"
    },
    {
      "name": "lorem ibseam",
      "position": "lorem ibseam",
      "pic": "https://example.com/pictures/1"
    },
    {
      "name": "lorem ibseam",
      "position": "lorem ibseam",
      "pic": "https://example.com/pictures/1"
    },
    {
      "name": "lorem ibseam",
      "position": "lorem ibseam",
      "pic": "https://example.com/pictures/1"
    }
  ],
  "our_team_title": "Our Team",
  "background_pics": [
    "",
    "",
    "",
    ""
  ]
}'
WHERE page_name = 'about';

-- about page ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
                "title": "EARTH''S FINEST WATER",
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