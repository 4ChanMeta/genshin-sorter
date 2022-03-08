dataSetVersion = "2022-03-08"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Remove Unreleased Characters",
    key: "deka",
    tooltip: "Check this to remove Unreleased Characters."
  },
  {
    name: "Remove Women",
    key: "fem",
    tooltip: "Check this to remove female characters."
  },
  {
    name: "Remove Men",
    key: "men",
    tooltip: "Check this to remove male characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Albedo",
    img: "genshin1.png",
    opts: {
      men: true
    }
  },
]