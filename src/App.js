import React, { useState } from 'react';
import Card from './components/Card';
import InputField from './components/InputField';
import LogIn from './components/LogIn';
import ReLoad from './components/ReLoad';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, SetPosts] = useState([]);

  const onSubmit = (post) => {
    if (!post.media && !post.text && /^\s*$/.test(post.text)) {
      return;
    }

    const newPosts = [post, ...posts];
    SetPosts(newPosts);
  };

  return (
    <div className="bg-main-bg min-h-screen max-h-full pb-14">
      {!isLoggedIn ? (
        <LogIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <InputField onSubmit={onSubmit} />
          <ReLoad />
          {posts.map((val, ind) => {
            return (
              <div key={ind}>
                <Card text={val.text} media={val.media} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
