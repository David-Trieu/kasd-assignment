export const seedData = {
  users: {
    _model: "User",
    George: {
      userName:"George",
      email: "George@george.com",
      password: "g"
    },
    Mona: {
      userName:"Mona",
      email: "Mona@mona.com",
      password: "m"
    },
    Admin: {
      userName:"Admin",
      email: "admin@admin.com",
      password: "admin",
      hasAdminRights: true,
    },
    David: {
      userName:"David",
      email:"d@d.com",
      password: "d",
    }
  },
  categories:{
    _model: "category",
    cat1:{
      name: "Landscape feature",
      createdBy: "->users.Admin"
    },
    cat2:{
      name: "National monument"
      ,createdBy: "->users.Admin"
    },
    cat3:{
      name: "Walking Trail"
      ,createdBy: "->users.Admin"
    },
    cat4:{
      name: "Bridge"
      ,createdBy: "->users.Admin"
    },
    cat5:{
      name: "Tree"
      ,createdBy: "->users.Admin"
    },
    cat6:{
      name: "Entertainment Venue"
      ,createdBy: "->users.Admin"
    },
    cat7:{
      name: "Island"
      ,createdBy: "->users.Admin"
    },
    cat8:{
      name: "Town"
      ,createdBy: "->users.Admin"
    },
    cat9:{
      name: "City"
      ,createdBy: "->users.Admin"
    },
    cat10:{
      name: "Forest"
      ,createdBy: "->users.Admin"
    },
    cat11:{
      name: "River"
      ,createdBy: "->users.Admin"
    },
    cat12:{
      name: "Archaeological Feature"
      ,createdBy: "->users.Admin"
    },
  },
  pointofinterest:{
    _model:"poi",
    poi1:{
      name: "Null Island",
      location:{
        latitude:"0",
        longitude:"0"
      },
      description:"Null Island is the point on Earth's surface at zero degrees latitude and zero degrees longitude",
      categoryId: "->categories.cat7",
      categoryName: "->categories.cat7.name",
      createdBy: "->users.Admin",
    },
    poi2:{
      name: "Regensburg",
      location:{
        latitude:"49.0134",
        longitude:"12.1016"
      },
      description:"Regensburg is a German city located in Bavaria.",
      categoryId: "->categories.cat9",
      categoryName: "->categories.cat9.name",
      createdBy: "->users.David",
    },
    poi3:{
      name: "Eiffel Tower",
      location:{
        latitude:"48.858",
        longitude:"2.2944"
      },
      description:"The Eiffel Tower is a famous monument in Paris.",
      categoryId: "->categories.cat2",
      categoryName: "->categories.cat2.name",
      createdBy: "->users.Mona",
    },
    poi4:{
      name: "Neuschwanstein Castle",
      location:{
        latitude:"47.55",
        longitude:"10.749"
      },
      description:"A famous castel near Hohenschwangau",
      categoryId: "->categories.cat2",
      categoryName: "->categories.cat2.name",
      createdBy: "->users.Mona",
    },
    poi5:{
      name: "Taj Mahal",
      location:{
        latitude:"27.175",
        longitude:"78.042"
      },
      description:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.",
      categoryId: "->categories.cat2",
      categoryName: "->categories.cat2.name",
      createdBy: "->users.Mona",
    },
    poi6:{
      name: "Singapore",
      location:{
        latitude:"1.2833",
        longitude:"103.8333"
      },
      description:"Singapore, officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia.",
      categoryId: "->categories.cat9",
      categoryName: "->categories.cat9.name",
      createdBy: "->users.David",
    },
    poi7:{
      name: "Stonehenge",
      location:{
        latitude:"51.1788",
        longitude:"-1.82611"
      },
      description:"Stonehenge is a prehistoric monument on Salisbury Plain in Wiltshire, England, two miles (3 km) west of Amesbury.",
      categoryId: "->categories.cat12",
      categoryName: "->categories.cat12.name",
      createdBy: "->users.David",
    },
    poi8:{
      name: "Golden Gate Bridge",
      location:{
        latitude:"37.8197",
        longitude:"-122.4786"
      },
      description:"The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean.",
      categoryId: "->categories.cat4",
      categoryName: "->categories.cat4.name",
      createdBy: "->users.David",
    },
    poi9:{
      name: "Bodhi Tree",
      location:{
        latitude:"24.695",
        longitude:"84.9914"
      },
      description:"The Bodhi Tree, also called the Mahabodhi Tree, Bo Tree, is a large sacred fig tree located in Bodh Gaya, Bihar, India.",
      categoryId: "->categories.cat5",
      categoryName: "->categories.cat5.name",
      createdBy: "->users.David",
    },

  }
};
