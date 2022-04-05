import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2 className='blog-title'>QnA <span>Blogs</span></h2>
            <div className="qna-section">
                <h2>Q. What is context api?</h2>
                <p>
                    In react we can pass the data only in one direction, from top to bottom via props. Here comes props drilling. When we try to pass the data at the lowest level, we need to pass every child to get the data at the last child. Sometimes this can be very hectic work. To solve this issue, we can use <b>context api</b>. Context api simply pass our data from the parent component to the required child component.
                </p>
            </div>
            <div className="qna-section">
                <h2>Q.What is Semantic Element?</h2>
                <p>Semantic elements let us know by defining specific tags that what role they are playing in a web page. For example, <b>header, footer, article</b> are considered semantic elements as they clearly describe their purpose in a web page. Semantic tags help the search engine to find the correct informative webpages. This helps to index a webpage in a greate manner.</p>
                <h4>Some example of semantic tags are -</h4>
                <ul>
                    <li>header</li>
                    <li>footer</li>
                    <li>article</li>
                    <li>section</li>
                    <li>main</li>
                    <li>aside</li>
                    <li>figcaption</li>
                    <li>mark</li>
                    <li>time</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;