async function createMenuItemPages({ graphql, actions }) {
  const path = require("path");
  const menuItemTemplate = path.resolve("./src/templates/MenuItem.js");

  const { data } = await graphql(`
    query {
      menuItems: allSanityMenuItem {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.menuItems.nodes.forEach((item) => {
    actions.createPage({
      path: `menu/${item.slug.current}`,
      component: menuItemTemplate,
      context: {
        slug: item.slug.current,
      },
    });
  });
}

async function createBeerNodes({ actions, createNodeId, createContentDigest }) {
  const fetch = require("isomorphic-fetch");
  const response = await fetch("https://api.sampleapis.com/beers/ale");
  const beers = await response.json();

  // randomize the order of beers
  beers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  beers.forEach((beer) => {
    if (!beer.image) return;
    const nodeMeta = {
      id: createNodeId(`beer--${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: "Beer",
        mediaType: "application/json",
        contentDigest: createContentDigest(beer),
      },
    };

    actions.createNode({
      ...beer,
      ...nodeMeta,
    });
  });
}

exports.sourceNodes = async (params) => {
  await Promise.all([createBeerNodes(params)]);
};

exports.createPages = async (params) => {
  await Promise.all([createMenuItemPages(params)]);
};
