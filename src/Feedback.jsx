import React, { useState } from "react";

const FeedbackSystem = () => {

  const initialState = [
    {
      name: 'Readability',
      upVoteCount: 0,
      downVoteCount: 0
    },
    {
      name: 'Performance',
      upVoteCount: 0,
      downVoteCount: 0
    },
    {
      name: 'Security',
      upVoteCount: 0,
      downVoteCount: 0
    },
    {
      name: 'Documentation',
      upVoteCount: 0,
      downVoteCount: 0
    },
    {
      name: 'Testing',
      upVoteCount: 0,
      downVoteCount: 0
    }
  ];
  const [aspects, setAspects ] = useState(initialState);
  
  const handleClick = (aspectName, votingOp) => {
    let updatedList = aspects.map(item => {
        if (item.name == aspectName){
          return {
            ...item, 
            [votingOp]: item[votingOp] + 1
          };
        }
        return item;
      });
      setAspects(updatedList);
  } 
  
  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">

        {
                /*  This maps each array item to a div adds
                the style declared above and return it */
                aspects.map((item, index) => (
                  <div className="pa-10 w-300 card" key={index}>
                        <h2>{item.name}</h2>
                        <div className="flex my-30 mx-0 justify-content-around">
                          <button className="py-10 px-15" data-testid={`upvote-btn-${index}`} onClick={() => handleClick(item.name, 'upVoteCount')}>
                            👍 Upvote
                          </button>
                          <button className="py-10 px-15 danger" data-testid="downvote-btn-0" onClick={() => handleClick(item.name, 'downVoteCount')}>
                            👎 Downvote
                          </button>
                        </div>
                        <div>
                        <p className="my-10 mx-0" data-testid="upvote-count-0">
                          Upvotes: <strong>{item.upVoteCount}</strong>
                        </p>
                        <p className="my-10 mx-0" data-testid="downvote-count-0">
                          Downvotes: <strong>{item.downVoteCount}</strong>
                        </p>
                      </div>
                    </div>
                ))
            }
      </div>
    </div>
  );
};

export default FeedbackSystem;
