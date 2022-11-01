import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { getComments } from "../../services/api";
import { TreeChild } from "../TreeChild/TreeChild";
import { TreeStyle } from "./style";

export function Tree({ treeData }: any) {
  const [test, setTest] = useState<any>([]);

  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      if (treeData) {
        treeData.forEach((id: any) => {
          getComments(id).then((res) => {
            setTest((test: number[]) => [...test, res]);
          });
        });
      }
    }
  });

  //https://hacker-news.firebaseio.com/v0/item/33397781.json?print=pretty
  return (
    <TreeStyle>
      <div>
        {test &&
          test.map((node: any) => <TreeChild node={node} key={node.id} />)}
      </div>
    </TreeStyle>
  );
}


