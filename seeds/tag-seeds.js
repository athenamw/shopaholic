const { Tag } = require("../models");

const tagData = [
  {
    tagname: "rock music",
  },
  {
    tagname: "pop music",
  },
  {
    tagname: "blue",
  },
  {
    tagname: "red",
  },
  {
    tagname: "green",
  },
  {
    tagname: "white",
  },
  {
    tagname: "gold",
  },
  {
    tagname: "pop culture",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
