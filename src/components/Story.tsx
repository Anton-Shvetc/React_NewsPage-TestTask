/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from "react";
import { getStory } from "../services/api";
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from "./style";
// import { mapTime } from "../mappers/mapTime";
import { Link } from "react-router-dom";


// Тестовый id с 2 комментариям - 33410153

export const Story = memo(function Story({ storyId }: any) {
  const [story, setStory] = useState<any>({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <Link to={`/news/${storyId}`}>{story.title}</Link>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>
        <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement>
          {story.time}
        </span>
        <span data-testid="story-score">
          <StoryMetaElement color="#000">Score:</StoryMetaElement>
          {story.score}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
});
