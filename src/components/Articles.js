import React, { useState, useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";

function Articles() {
  let [articlesData, setArticlesData] = useState({});
  let [articlesError, setArticlesError] = useState(null);
  const articlesUrl =
    "https://mighty-oasis-08080.herokuapp.com/api/articles?limit=10&offset=0";
  useEffect(() => {
    fetch(articlesUrl)
      .then((res) => res.json())
      .then((data) => {
        setArticlesData(data);
      })
      .catch((err) => setArticlesError(err));
  }, []);

  let { articles } = articlesData;

  if (articles) {
    return (
      <Card.Group>
        {articles.map((article) => {
          return (
            <Card className="card">
              <Image src="https://unsplash.com/photos/L8o2sIPSOnc" />
              <Card.Content>
                <Image floated="right" size="mini" src={article.author.image} />
                <Card.Header>{article.title}</Card.Header>
                <Card.Meta>{article.author.username}</Card.Meta>
                <Card.Description>{article.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Read More
                  </Button>
                </div>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default Articles;
