# The Beef Shop

A sample webpage for an italian beef restaurant

## About
I wanted to test myself with building a website using both Gatsby and a Headless CMS. After watching the entire first season of "The Bear" multiple times, I came up with the idea to make a website for a fake Italian Beef restaurant, using the various foods from the show as menu items in addition to a couple staples that are typically served at this type of restaurant.

## Tech Stack
**This Project was built with**
* Gatsby
* Sanity
* Styled Components

## Run The Project Locally

To run the site locally, first clone the repo
```bash
    git clone https://github.com/CHamat96/the-beef-shop.git
```

Go into the project directory

```bash
    cd the-beef-shop-gatsby
```

Install dependencies

```bash
    npm install
```

Start the server

```bash
    npm run start
```

### API Reference
***Note***: Since the project uses the Sanity headless CMS for some of the content, an API Key is required when viewing the content locally. Please [message me directly](mailto:coreyhamat@gmail.com) for access to an API Key. 

Once you've received the key, go to the root of the project 

```bash
  cd the-beef-shop-gatsby
```

create a new `.env.development` file 

```bash
  touch .env.development
```

in the .env file, add the following variable:

```bash
  SANITY_TOKEN=[your API key]
```
Now, the content pulled from Sanity should be viewable in your local build of the project

## Deployment

to deploy the project run

```bash
    npm run build
```