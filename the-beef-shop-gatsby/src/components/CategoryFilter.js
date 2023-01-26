import React from "react";
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from "styled-components";

const CategoryStyles = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:2.5rem;
    margin:5rem auto;
    place-content:center;
    a {
        display:grid;
        grid-template-columns:auto 1fr;
        grid-gap:0 1rem;
        place-content:center;
        padding:0.5rem;
        background:var(--red);
        border-radius:2px;
        font-size:clamp(2.5rem, 1.4vw, 2.5rem);
        color:var(--white);
        transition:0.3s ease-in-out transform;

        .count {
            display:inline-block;
            padding:2px;
            margin:1px;
            background:var(--beige);
            color:var(--black);
        }

        &[aria-current='page']{
            background:var(--orange);
            transform:scale(1.2) rotate(-3.5deg);
        }
    }

`

function countMenuItemsinCategory(menuItems) {
    const counts = menuItems
    .map((item) => item.category)
    .flat()
    .reduce((acc, category) => {
        const existingCategory = acc[category.id]
        if(existingCategory) {
            existingCategory.count += 1;
        } else {
            acc[category.id] = {
                id: category.id,
                name: category.name,
                count: 1,
            }
        }
        return acc
    }, {});

    const sortedCats = Object.values(counts).sort((a,b) => b.count - a.count);
    return sortedCats
}

export default function CategoryFilter({ activeCategory }) {
    const { menuItems } = useStaticQuery(graphql`
    query {
        categories: allSanityMenuCategory {
            nodes {
                name
                id
                slug {
                    current
                }
            }
        }
        menuItems: allSanityMenuItem {
            nodes {
                category {
                    name
                    id
                }
            }
        }
    }
    `);

    const categoriesWithCounts = countMenuItemsinCategory(menuItems.nodes)
    return (
        <CategoryStyles>
            <Link to="/menu">
                <span className="name">All</span>
                <span className="count">{menuItems.nodes.length}</span>
            </Link>
            {categoriesWithCounts.map((category) => (
                <Link
                to={`/menu/${category.name}`}
                key={category.id}
                className={category.name === activeCategory ? 'active' : ''}>
                    <span className="name">{category.name}</span>
                    <span className="count">{category.count}</span>
                </Link>
            ))}
        </CategoryStyles>
    )
}