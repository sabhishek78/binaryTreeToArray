function treeToArray(tree){
let root=tree;
let nodesList=[];
let targetList=[];
nodesList.push(root.value);
targetList.push(root);
for(let i=0;i<targetList.length;i++){
  extractLeftAndRightChild(targetList[i],nodesList,targetList);
}
return nodesList;
}




function extractLeftAndRightChild(node,nodesList,targetList){
  if(node.left===undefined && node.right===undefined){
    return;
  }
  if(node.left===undefined ){
    nodesList.push(null);
  }
  else{
   nodesList.push(node.left.value); 
   targetList.push(node.left);
  }
  if(node.right===undefined){
    nodesList.push(null);
  }
  else{
   nodesList.push(node.right.value); 
   targetList.push(node.right);
  }
}

treeToArray(
    {
        value: 1,
        left: {
            value: 6,
            right: {
                value: 2,
                left: {
                    value: 12
                },
                right: {
                    value: 4
                }
            }
        },
        right: {
            value: 10,
            left: {
                value: 3,
                right: {
                    value: 9
                }
            },
            right: {
                value: 7
            }
        }
    }
); // [1, 6, 10, null, 2, 3, 7, 12, 4, null, 9]