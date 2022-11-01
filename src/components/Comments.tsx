import React, { useState, useEffect } from "react";
import {Tree}  from "./Tree/Tree";
import styled from 'styled-components'
// const comIds = [
//   33397711, 33400659, 33397477, 33399667, 33402658, 33397458, 33401426,
//   33394799, 33398243, 33394779, 33399169, 33394746, 33393888, 33395982,
// ];


const CommentsStyle = styled.div({

})



//Тестовая новость -  33424354
 export function Comments({ commentsIds } : any) {

  return (
    <CommentsStyle>
      <h1>React Tree View</h1>
      <Tree treeData={commentsIds} />
      {/* {commentsIds.length} */}
	  
    </CommentsStyle>
  );
}





