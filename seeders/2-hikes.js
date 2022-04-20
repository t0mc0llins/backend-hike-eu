"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "hikes",
      [
        {
          title: "Fagaras mountain trail",
          description:
            "A 4 day hike through the beautiful Fagaras mountains in the famous Transylvania region of Romania. Watch out for bears!",
          likes: 4,
          distance: 60,
          countryRef: 40,
          seasonRefs: [0, 1],
          startLocation: "Medieseni campground",
          endLocation: "Zărnești town",
          badgeIds: [0, 1],
          coverImage:
            "https://www.romanianfriend.com/uploads/media/dsc-0673-edit-frontend-gallery-image.jpeg",
          mapImage:
            "https://intotheworld.eu/itw/wp-content/uploads/2015/08/localizare-fagaras-vest.jpg",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ben Nevis (CMD route)",
          description:
            "An alternative route up Ben Nevis along the Carn Mor Dearg Arete ridge. Expect plenty of scrambling.",
          likes: 12,
          distance: 18,
          countryRef: 49,
          seasonRefs: [0, 1, 2],
          startLocation: "North Face Car Park, Torlundy",
          endLocation: "North Face Car Park, Torlundy",
          badgeIds: [0, 2],
          coverImage:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/dd/49/e2/the-mighty-ben-is-sleeping.jpg?w=1200&h=-1&s=1",
          mapImage:
            "http://littlewanderluststories.com/wp-content/uploads/2017/09/map-1024x724.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Koscielec z Kuznic",
          description:
            "Enjoy this 15.9-km loop trail near Zakopane, Lesser Poland (Malopolskie). Generally considered a challenging route, it takes an average of 5 h 52 min to complete.",
          likes: 3,
          distance: 15.9,
          countryRef: 38,
          seasonRefs: [0, 1, 2, 3],
          startLocation: "Kasprowy",
          endLocation: "Kasprowy",
          badgeIds: [0, 2],
          coverImage:
            "https://1.bp.blogspot.com/-zB6p8xX38XE/V-BEs4EUmxI/AAAAAAAAJpY/Dp-m5ev-BVI1EwNgKpoZemJsQ19e-PVHgCLcB/w1200-h630-p-k-no-nu/koscielec%2Bzdj%25C4%2599cie.jpg",
          mapImage:
            "https://cdn-assets.alltrails.com/static-map/production/at-map/22821302/trail-poland-lesser-poland-malopolskie-koscielec-z-kuznic-at-map-22821302-1642654919-414x200-2.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Julian Alps Trail",
          description:
            "A steep trail from beautiful Lake Bohinj to the peaks of Triglav national park.",
          likes: 12,
          distance: 18,
          countryRef: 43,
          seasonRefs: [0, 1],
          startLocation: "Lake Bohinj campsite",
          endLocation: "Lake Bohinj campsite",
          badgeIds: [0, 2],
          coverImage:
            "https://www.earthtrekkers.com/wp-content/uploads/2020/05/Julian-Alps-Hike.jpg",
          mapImage:
            "https://www.researchgate.net/publication/274888486/figure/fig1/AS:669977002651669@1536746373836/Triglav-NP-with-the-Soca-and-Triglavska-Bistrica-trails-and-the-survey-locations.png",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Corsica GR20",
          description:
            "The legendary 180km GR20 trail along the jagged spine of Corsica's mountainous centre.",
          likes: 31,
          distance: 180,
          countryRef: 17,
          seasonRefs: [1, 2],
          startLocation: "Conza",
          endLocation: "Calenzana",
          badgeIds: [0, 2],
          coverImage:
            "https://www.mountainiq.com/wp-content/uploads/2017/12/GR20-Corsica-France-MountainIQ-Best-Hikes-in-Europe.jpg",
          mapImage:
            "https://tmbtent.com/wp-content/uploads/2019/10/GR20-map-with-alternates.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Peleaga Peak Trail, Retzat",
          description:
            "As the tallest summit in the park, reaching the peak is one of the most common challenging hikes in the Retzat Mountains",
          likes: 2,
          distance: 35,
          countryRef: 40,
          seasonRefs: [1],
          startLocation: "Deva campsite",
          endLocation: "Retzat town",
          badgeIds: [0, 2],
          coverImage:
            "https://www.walkopedia.net/assets/walkimages/2624/Retezat_View_over_Bucura_lake-wikimediacommons-DanielIghisan.jpg",
          mapImage:
            "https://s3.amazonaws.com/com-avenza-heroku-mapstore-production/VendorMaps/337/20200811141537_Retezat_Mountains_6kb_preview_2.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Eifelsteig",
          description:
            "The Eifelsteig is the long-distance hiking trail through the Eifel. It connects the historic cities of Aachen in North Rhine-Westphalia and Trier in Rhineland",
          likes: 56,
          distance: 312,
          countryRef: 11,
          seasonRefs: [0, 1, 2, 3],
          startLocation: "Kornelimünster",
          endLocation: "Trier",
          badgeIds: [0, 2],
          coverImage:
            "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/eifelsteig-hiking-trail-1519033298-785X440.jpg",
          mapImage:
            "https://www.ecktiv.nl/wp-content/uploads/2016/02/Schermafbeelding-2016-05-04-om-13.30.45.png",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sella-Herbetet Traverse",
          description:
            "This classic one-day hike takes you right to the heart of the Graian Alps.",
          likes: 12,
          distance: 20.5,
          countryRef: 26,
          seasonRefs: [1, 2],
          startLocation: "town bridge, Valnontey",
          endLocation: "Valnontey",
          badgeIds: [0, 2],
          coverImage:
            "https://lp-cms-production.imgix.net/features/2015/11/GettyImages-1059342800-6ae4b97ba44b.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
          mapImage:
            "https://www.gulliver.it/hub/wp-content/uploads/2010/07/06/herbetet-casolari-dellda-valnontey-anello-per-vermiana-e-rifugio-vittorio-sella_a7b2.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tre Cime di Lavaredo",
          description:
            "If you're going to do just one day hike here, make it the Tre Cime di Lavaredo Circuit in the Parco Naturale Tre Cime.",
          likes: 4,
          distance: 9.5,
          countryRef: 26,
          seasonRefs: [1],
          startLocation: "Rifugio Auronzo",
          endLocation: "Rifugio Auronzo",
          badgeIds: [0, 2],
          coverImage:
            "https://lp-cms-production.imgix.net/features/2015/11/GettyImages-148538280-a8396f873f92.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
          mapImage:
            "https://www.moonhoneytravel.com/wp-content/uploads/2018/12/moonhoneytravel_Tre-Cime-Loop-Trail_Dolomites.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hikes", null, {});
  },
};
