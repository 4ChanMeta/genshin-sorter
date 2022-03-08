dataSetVersion = "2019-04-12"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Remove DekaFumos",
    key: "deka",
    tooltip: "Check this to remove DekaFumos."
  },
  {
    name: "Remove Old Versions",
    key: "old",
    tooltip: "Check this to remove older versions of characters."
  },
  {
    name: "Remove Alternate Versions",
    key: "alt",
    tooltip: "Check this to remove alternate versions of characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "FumoFumo Reimu",
    img: "touhou1.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Marisa",
    img: "touhou2.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Sakuya",
    img: "touhou3.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Remilia",
    img: "touhou4.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Patchy",
    img: "touhou5.jpg",
    opts: {
      old: true
    }
  },
  {
    name: "FumoFumo Alice",
    img: "touhou6.jpg",
    opts: {
      old: true
    }
  },
  {
    name: "FumoFumo Flan",
    img: "touhou7.jpg",
    opts: {
      old: true
    }
  },
  {
    name: "FumoFumo Sanae",
    img: "touhou8.jpg",
    opts: {
      old: true
    }
  },
  {
    name: "FumoFumo Cirno",
    img: "touhou9.jpg",
    opts: {
      old: true
    }
  },
  {
    name: "FumoFumo Suwako",
    img: "touhou10.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Youmu",
    img: "touhou11.jpg",
    opts: {
      old: true
    }
  },
  {
    name: "FumoFumo Yuyuko",
    img: "touhou12.jpg",
    opts: {
      old: true
    }
  },
  {
    name: "FumoFumo Meiling",
    img: "touhou13.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Chen",
    img: "touhou14.jpg",
    opts: {
      old: true
    }
  },
  {
    name: "FumoFumo Ran",
    img: "touhou15.jpg",
    opts: {
      old: true
    }
  },
  {
    name: "FumoFumo Yukari",
    img: "touhou16.jpg",
    opts: {
      old: true
    }
  },
  {
    name: "FumoFumo Kaguya",
    img: "touhou17.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Moko",
    img: "touhou18.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Satori",
    img: "touhou19.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Koishi",
    img: "touhou20.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Udonge",
    img: "touhou21.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Tewi",
    img: "touhou22.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Marisa (ver.2)",
    img: "touhou23.jpg",
    opts: {
      alt: true
    }
  },
  {
    name: "FumoFumo Sanae (ver.2)",
    img: "touhou24.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Kokoro",
    img: "touhou25.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Flan (ver.1.5)",
    img: "touhou26.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Reimu (Kourindou ver.)",
    img: "touhou27.jpg",
    opts: {
      alt: true
    }
  },
  {
    name: "FumoFumo Remilia (Kourindou ver.)",
    img: "touhou28.jpg",
    opts: {
      alt: true
    }
  },
  {
    name: "FumoFumo Sakuya (Kourindou ver.)",
    img: "touhou29.jpg",
    opts: {
      alt: true
    }
  },
  {
    name: "FumoFumo Udonge (Hisouten ver.)",
    img: "touhou30.jpg",
    opts: {
      alt: true
    }
  },
  {
    name: "FumoFumo Marisa (Kourindou ver.)",
    img: "touhou31.jpg",
    opts: {
      alt: true
    }
  },
  {
    name: "FumoFumo Kasen",
    img: "touhou32.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Aya",
    img: "touhou33.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Hatate",
    img: "touhou34.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Alice (ver.1.5)",
    img: "touhou35.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Patchy (ver.1.5)",
    img: "touhou36.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Youmu (ver.1.5)",
    img: "touhou37.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Yuyuko (ver.1.5)",
    img: "touhou38.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Chen (ver.1.5)",
    img: "touhou39.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Ran (ver.1.5)",
    img: "touhou40.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Yukari (ver.1.5)",
    img: "touhou41.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Cirno (ver.1.5)",
    img: "touhou42.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Cirno (with a tan)",
    img: "touhou43.jpg",
    opts: {
      alt: true
    }
  },
  {
    name: "FumoFumo Tenshi",
    img: "touhou44.jpg",
    opts: {}
  },
  {
    name: "FumoFumo Shion",
    img: "touhou45.jpg",
    opts: {}
  },
  {
    name: "DekaFumo Reimu",
    img: "touhouex1.jpg",
    opts: {
      deka: true
    }
  },
  {
    name: "DekaFumo Marisa",
    img: "touhouex2.jpg",
    opts: {
      deka: true
    }
  },
  {
    name: "DekaFumo Cirno",
    img: "touhouex3.jpg",
    opts: {
      deka: true
    }
  },
  {
    name: "DekaFumo Remilia",
    img: "touhouex4.jpg",
    opts: {
      deka: true
    }
  },
  {
    name: "DekaFumo Flan",
    img: "touhouex5.jpg",
    opts: {
      deka: true
    }
  }
];
