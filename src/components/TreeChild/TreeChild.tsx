import {useState} from 'react'

import {Tree} from '../Tree/Tree'

import styled from 'styled-components';

export const TreeChildStyle = styled.div({
//   border: "1px solid #000",
  marginBottom: 2,
	 width: 500
 
});

export function TreeChild({ node }: any) {
  const { kids, label } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <TreeChildStyle>
      <div onClick={handleClick} style={{ marginBottom: "10px" }}>
        <span>{node.text}</span>
      </div>
      <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
        {showChildren && <Tree treeData={kids} />}
      </ul>
    </TreeChildStyle>
  );
}

