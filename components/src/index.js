import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";
import faker from 'faker';

const App = () => {
  return(
   <div className="ui container comments">
     <ApprovalCard>
       <CommentDetail
        author="Sam"
        date="Today at 4:45PM"
        avatar={faker.image.avatar()}
        comment="Cool story bruh..."
        />
     </ApprovalCard>

     <ApprovalCard>
      <CommentDetail
        author="Alex"
        date="Today at 2:00AM"
        avatar={faker.image.avatar()}
        comment="Wow!"
      />
     </ApprovalCard>

     <ApprovalCard>
      <CommentDetail
        author="Jane"
        date="Yesterday at 5:00PM"
        avatar={faker.image.avatar()}
        comment="Guys I saw a cat!"
      />
     </ApprovalCard>
   </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
