import React from 'react';
import { useState } from 'react';
import img from '../images/user.png';

const InputField = (props) => {
  const [media, setMedia] = useState('');
  const [content, setContent] = useState('');

  // get value of media and input field
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handelMedia = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/x-png,image/gif,image/jpeg';
    input.addEventListener('change', (ev) => {
      const file = ev.target.files[0];
      const src = URL.createObjectURL(file);
      setMedia(src);
    });
    input.click();
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      media: media,
      text: content,
    });
    setContent('');
    setMedia('');
  };

  React.useEffect(() => {});

  return (
    <div className="relative">
      <h1 className="text-3xl lg:text-4xl font-semibold absolute top-2 lg:top-6 left-3 lg:left-6">
        sonar
      </h1>
      <div className=" w-11/12 sm:w-8/12 lg:w-1/2 xl:w-680 h-44 lg:h-52 pt-10 mx-auto">
        <h1 className="mt-4 lg:-mt-3 font-medium text-2xl lg:text-4xl">Home</h1>
        <div className="bg-white border-2 border-black h-full mt-2 lg:mt-4 rounded-3xl">
          <form onSubmit={handleSubmit}>
            <div className="flex mt-3 lg:mt-6 ml-4 lg:ml-8">
              <img
                src={img}
                alt=""
                className="h-8 w-8 rounded-full mr-3 lg:mr-6"
              />
              <textarea
                value={content}
                onChange={handleChange}
                placeholder="What's up?"
                className="w-9/12 h-14 resize-none outline-none text-lg"
              ></textarea>
            </div>
            <div className="flex justify-end sm:justify-between mt-3 lg:mt-6 text-lg">
              <div
                className="hidden sm:block border-2 border-border-btn px-3 lg:px-5 py-1 ml-4 lg:ml-8 hover:bg-signIn-btn shadow-basic cursor-pointer"
                onClick={handelMedia}
              >
                Add Media
              </div>

              <button
                type="submit"
                className={
                  media || content
                    ? 'bg-bg-btn border-2 border-border-btn px-3 lg:px-5 py-1 mr-4 lg:mr-8 hover:bg-signIn-btn shadow-basic'
                    : 'bg-bg-btn border-2 border-border-btn px-3 lg:px-5 py-1 mr-4 lg:mr-8 cursor-default opacity-60'
                }
                disabled={media || content ? false : true}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputField;
