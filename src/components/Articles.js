import React, { useState, useEffect } from "react";
import { Button, Card, Image,Menu } from "semantic-ui-react";



function Articles() {
  let [articlesData, setArticlesData] = useState({});
  let [articlesError, setArticlesError] = useState(null);
  let [tagsData, setTagsData] = useState({});
  let [tagsError, setTagsError] = useState(null);
  let [selectedTag, setSelectedTag] = useState(null)
  let articlesUrl =
    `https://mighty-oasis-08080.herokuapp.com/api/articles?limit=10&offset=0${selectedTag ? "&tag=" + selectedTag : null}`;
    const tagsUrl = "https://mighty-oasis-08080.herokuapp.com/api/tags";

  useEffect(() => {
    fetch(articlesUrl)
      .then((res) => res.json())
      .then((data) => {
        setArticlesData(data);
      })
      .catch((err) => setArticlesError(err));
  }, [articlesUrl]);

  useEffect(() => {
    fetch(tagsUrl)
      .then((res) => res.json())
      .then((data) => {
        setTagsData(data);
      })
      .catch((err) => setTagsError(err));
  }, []);



  let { articles } = articlesData;
  let { tags } = tagsData;


  if (articles && tags) {
    return (
      <>
      <div className='articleDiv'>
      <Card.Group>
        {articles.map((article,index) => {
          return (
            <Card className="card" key={index}>
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
      </div>
       <div className='tagsDiv'>
       <Menu vertical>
         {tags.map((tag,index) => {
           return <Menu.Item key={index} onClick={() => {setSelectedTag(tag)}}>{tag}</Menu.Item>;
         })}
       </Menu>
       </div>
       </>

    );
  } else { let dependency = true
    return <h1>Loading</h1>;
  }

}

export default Articles;
