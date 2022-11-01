import { useState, useEffect } from "react";
import { getStory } from "../services/api";
import { useHistory, Link, useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Comments } from "./Comments";

//// 33424354

function StoryItem() {
  const [story, setStory] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams<{ id?: string }>();
  const history = useHistory();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  useEffect(() => {
    if (id) {
      getStory(id).then((data) => {
        data && data.url && setStory(data);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Back
      </button>

      {isLoading ? (
        <Spin indicator={antIcon} />
      ) : (
        <>
          <Link to={{ pathname: story.url }} target="_blank">
            Link
          </Link>
          <h4>{story.title}</h4>
          <p>{story.time}</p>
          <p>{story.by}</p>
          <p>
            {story.kids
              ? `Комментариев : ${story.kids.length}`
              : "Нет комментариев"}{" "}
          </p>

          <div>
            <Comments commentsIds={story.kids} />
          </div>
        </>
      )}
    </>
  );
}

export default StoryItem;

// const App: React.FC = () => <Spin indicator={antIcon} />;

// export default App;
