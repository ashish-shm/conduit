import React, { useState, useEffect } from "react";
import { Grid, Menu } from "semantic-ui-react";

function TagsList() {
  let [tagsData, setTagsData] = useState({});
  let [tagsError, setTagsError] = useState(null);
  const tagsUrl = "https://mighty-oasis-08080.herokuapp.com/api/tags";

  useEffect(() => {
    fetch(tagsUrl)
      .then((res) => res.json())
      .then((data) => {
        setTagsData(data);
      })
      .catch((err) => setTagsError(err));
  }, []);

  let { tags } = tagsData;

  if (tags) {
    return (
      <Grid>
        <Grid.Row>
          <Menu vertical>
            {tags.map((tag) => {
              return <Menu.Item>{tag}</Menu.Item>;
            })}
          </Menu>
        </Grid.Row>
      </Grid>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default TagsList;
