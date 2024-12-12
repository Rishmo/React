import React, {memo} from 'react';

const NewMemo = (prop) => {
    console.log("newMemo render");
  return (
    <div>
      <h1>NewMemo: {prop.newCount}</h1>
    </div>
  )
}

export default memo(NewMemo);
