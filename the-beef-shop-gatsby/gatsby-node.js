
async function createMenuItemPages({ graphql, actions }) {

    const path = require('path')
    const menuItemTemplate = path.resolve('./src/templates/MenuItem.js')

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
            path:`menu/${item.slug.current}`,
            component:menuItemTemplate,
            context: {
                slug: item.slug.current
            }
        })
    })
}

exports.createPages = async (params) => {
    await Promise.all([
        createMenuItemPages(params)
    ])
}