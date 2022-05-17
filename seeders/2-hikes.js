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
          countryRef: "RO",
          seasonRefs: [0, 1],
          startLocation: "Medieseni campground",
          endLocation: "Zărnești town",
          badgeIds: [0, 1],
          coverImage:
            "https://www.romanianfriend.com/uploads/media/dsc-0673-edit-frontend-gallery-image.jpeg",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ben Nevis (CMD route)",
          description:
            "An alternative route up Ben Nevis along the Carn Mor Dearg Arete ridge. Expect plenty of scrambling.",
          likes: 12,
          countryRef: "GB",
          seasonRefs: [0, 1, 2],
          startLocation: "North Face Car Park, Torlundy",
          endLocation: "North Face Car Park, Torlundy",
          badgeIds: [0, 2],
          coverImage:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/dd/49/e2/the-mighty-ben-is-sleeping.jpg?w=1200&h=-1&s=1",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Koscielec z Kuznic",
          description:
            "Enjoy this 15.9-km loop trail near Zakopane, Lesser Poland (Malopolskie). Generally considered a challenging route, it takes an average of 5 h 52 min to complete.",
          likes: 3,
          countryRef: "PL",
          seasonRefs: [0, 1, 2, 3],
          startLocation: "Kasprowy",
          endLocation: "Kasprowy",
          badgeIds: [0, 2],
          coverImage:
            "https://1.bp.blogspot.com/-zB6p8xX38XE/V-BEs4EUmxI/AAAAAAAAJpY/Dp-m5ev-BVI1EwNgKpoZemJsQ19e-PVHgCLcB/w1200-h630-p-k-no-nu/koscielec%2Bzdj%25C4%2599cie.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Julian Alps Trail",
          description:
            "A steep trail from beautiful Lake Bohinj to the peaks of Triglav national park.",
          likes: 12,
          countryRef: "SI",
          seasonRefs: [0, 1],
          startLocation: "Lake Bohinj campsite",
          endLocation: "Lake Bohinj campsite",
          badgeIds: [0, 2],
          coverImage:
            "https://www.earthtrekkers.com/wp-content/uploads/2020/05/Julian-Alps-Hike.jpg",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Corsica GR20",
          description:
            "The legendary 180km GR20 trail along the jagged spine of Corsica's mountainous centre.",
          likes: 31,
          countryRef: "FR",
          seasonRefs: [1, 2],
          startLocation: "Conza",
          endLocation: "Calenzana",
          badgeIds: [0, 2],
          coverImage:
            "https://www.mountainiq.com/wp-content/uploads/2017/12/GR20-Corsica-France-MountainIQ-Best-Hikes-in-Europe.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Peleaga Peak Trail, Retezat",
          description:
            "As the tallest summit in the park, reaching the peak is one of the most common challenging hikes in the Retezat Mountains",
          likes: 2,
          countryRef: "RO",
          seasonRefs: [1],
          startLocation: "Rausor complex",
          endLocation: "Capul complex",
          badgeIds: [0, 2],
          coverImage:
            "https://www.walkopedia.net/assets/walkimages/2624/Retezat_View_over_Bucura_lake-wikimediacommons-DanielIghisan.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Eifelsteig",
          description:
            "The Eifelsteig is the long-distance hiking trail through the Eifel. It connects the historic cities of Aachen in North Rhine-Westphalia and Trier in Rhineland",
          likes: 56,
          countryRef: "DE",
          seasonRefs: [0, 1, 2, 3],
          startLocation: "Kornelimünster",
          endLocation: "Trier",
          badgeIds: [0, 2],
          coverImage:
            "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/eifelsteig-hiking-trail-1519033298-785X440.jpg",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sella-Herbetet Traverse",
          description:
            "This classic one-day hike takes you right to the heart of the Graian Alps.",
          likes: 12,
          countryRef: "IT",
          seasonRefs: [1, 2],
          startLocation: "town bridge, Valnontey",
          endLocation: "Valnontey",
          badgeIds: [0, 2],
          coverImage:
            "https://lp-cms-production.imgix.net/features/2015/11/GettyImages-1059342800-6ae4b97ba44b.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tre Cime di Lavaredo",
          description:
            "If you're going to do just one day hike here, make it the Tre Cime di Lavaredo Circuit in the Parco Naturale Tre Cime.",
          likes: 4,
          countryRef: "IT",
          seasonRefs: [1],
          startLocation: "Rifugio Auronzo",
          endLocation: "Rifugio Auronzo",
          badgeIds: [0, 2],
          coverImage:
            "https://lp-cms-production.imgix.net/features/2015/11/GettyImages-148538280-a8396f873f92.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
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
