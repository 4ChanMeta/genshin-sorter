dataSetVersion = "2022-03-08"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter Unreleased Characters",
    key: "unr",
    tooltip: "Check this to remove Unreleased Characters." //should i add more filters? i think this is enough for now. let me know if any others would be nice
  },
  {
    name: "Filter Women",
    key: "fem",
    tooltip: "Check this to remove female characters."
  },
  {
    name: "Filter Men",
    key: "men",
    tooltip: "Check this to remove male characters."
  },
  {
    name: "Filter Mondstadtians",
    key: "mond",
    tooltip: "Check this to remove characters from Mondstadt."
  },
  {
    name: "Filter Liyueians",
    key: "liy",
    tooltip: "Check this to remove characters from Liyue."
  },
  {
    name: "Filter Sumeruians",
    key: "sum",
    tooltip: "Check this to remove characters from Sumeru."
  },
  {
    name: "Filter Inazumans",
    key: "ina",
    tooltip: "Check this to remove characters from Inazuma."
  },
  {
    name: "Filter Nationless People",
    key: "lol",
    tooltip: "Check this to remove characters who don't have an associated nationality."
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Albedo",
    img: "genshin1.png",
    opts: {
      men: true,
      mond: true
    }
  },
  {
    name: "Aloy",
    img: "genshin2.png",
opts: {
    fem: true,
    lol: true
}
  },
  {
    name: "Arataki Itto",
    img: "genshin3.png",
opts: {
    men: true,
    ina: true
}
  },
  {
    name: "Barbara",
    img: "genshin4.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Beidou",
    img: "genshin5.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Bennett",
    img: "genshin6.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Chongyun",
    img: "genshin7.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Keqing",
    img: "genshin8.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Diluc",
    img: "genshin9.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Diona",
    img: "genshin10.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Eula",
    img: "genshin11.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Fischl",
    img: "genshin12.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Ganyu",
    img: "genshin13.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Gorou",
    img: "genshin14.png",
opts: {
    men: true,
    ina: true
}
  },
  {
    name: "Hu Tao",
    img: "genshin15.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Jean",
    img: "genshin16.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Kaedehara Kazuha",
    img: "genshin17.png",
opts: {
    men: true,
    ina: true
}
  },
  {
    name: "Kaeya",
    img: "genshin18.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Kamisato Ayaka",
    img: "genshin19.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Klee",
    img: "genshin20.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Kujou Sara",
    img: "genshin21.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Lisa",
    img: "genshin22.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Mona",
    img: "genshin23.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Ningguang",
    img: "genshin24.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Noelle",
    img: "genshin25.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Qiqi",
    img: "genshin26.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Raiden Shogun",
    img: "genshin27.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Razor",
    img: "genshin28.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Rosaria",
    img: "genshin29.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Sangonomiya Kokomi",
    img: "genshin30.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Sayu",
    img: "genshin32.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Shenhe",
    img: "genshin33.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Sucrose",
    img: "genshin34.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Tartaglia (Childe)",
    img: "genshin35.png",
opts: {
    men: true,
    liy: true //should i add a snezhnaya one for this? i feel like it's unecessary since he's the only playable character from it so far. I'll keep him as liyueian for now
}
  },
  {
    name: "Thoma",
    img: "genshin36.png",
opts: {
    men: true,
    ina: true
}
  },
  {
    name: "Lumine",
    img: "genshin37.png",
opts: {
    fem: true,
    lol: true
}
  },
  {
    name: "Aether",
    img: "genshin38.png",
opts: {
    men: true,
    lol: true
}
  },
  {
    name: "Amber",
    img: "genshin31.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Venti",
    img: "genshin39.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Xiangling",
    img: "genshin40.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Xiao",
    img: "genshin41.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Xingqiu",
    img: "genshin42.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Xinyan",
    img: "genshin43.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Yae Miko",
    img: "genshin44.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Yanfei",
    img: "genshin45.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Yoimiya",
    img: "genshin46.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Yun Jin",
    img: "genshin47.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Zhongli",
    img: "genshin48.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Kamisato Ayato",
    img: "genshinex1.png",
opts: {
   men: true,
   ina: true
}
  },
  {
    name: "Dainslief",
    img: "genshinex2.png",
opts: {
   men: true,
   unr: true,
   lol: true //same as childe. he's from khanreiah but seems redundant to add a specific filter just for that. he will stay as nationless for now
}
  },
  {
    name: "Yelan",
    img: "genshinex3.png",
opts: {
   fem: true,
   liy: true
}
  },
  {
    name: "Kuki Shinobu",
    img: "genshinex4.png",
opts: {
   fem: true,
   ina: true
}
  },
  {
    name: "Yaoyao",
    img: "genshinex5.png",
opts: {
   fem: true,
   unr: true,
   liy: true
}
  },
  {
    name: "Heizou",
    img: "genshinex6.png",
opts: {
   men: true,
   unr: false,
   ina: true
}
  },
  {
    name: "Collei",
    img: "Character_Collei_Card.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Dori",
    img: "Character_Dori_Card.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Tighnari",
    img: "Character_Tighnari_Card.png",
opts: {
   men: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Alhaitham",
    img: "al haitham.png",
opts: {
   men: true,
   unr: true,
   sum: true
}
  },
  {
    name: "Cyno",
    img: "cyno.jpg",
opts: {
   men: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Deyha",
    img: "deyha.png",
opts: {
   fem: true,
   unr: true,
   sum: true
}
  },
  {
    name: "Nahida",
    img: "kusanali.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Nilou",
    img: "nilou.jpg",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Candace",
    img: "candace.jpg",
opts: {
   fem: true,
   unr: true,
   sum: true
}
  },
  {
    name: "Layla",
    img: "layla.png",
opts: {
   fem: true,
   unr: true,
   sum: true
}
  },
  {
    name: "Faruzan",
    img: "Faruzan.jpg",
opts: {
   fem: true,
   unr: true,
   sum: true
}
  },
  {
    name: "Wanderer (Scaramouche)",
    img: "wanderer.jpg",
opts: {
   men: true,
   unr: true,
   sum: true
}
  }
]
