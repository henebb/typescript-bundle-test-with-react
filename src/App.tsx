import React, { PureComponent, useEffect } from 'react';
import { view } from 'react-easy-state';
import appStore from './appStore';

export default view(() => {
    useEffect(() => {
        if (appStore.posts === null || appStore.posts.length === 0){
            appStore.fetchPosts();
        }
    });

    const addPost = () => {
        appStore.addPost({
            text: 'Testar',
            author: 'Pelle'
        });
    }
    return (
        <div>
            {appStore.posts.map((post, index) => (
                <div key={index} style={{borderBottom: '1px solid gray'}}>
                    <p>Author: {post.author}</p>
                    <p>Text: {post.text}</p>
                </div>
            ))}
            <button type="button" onClick={addPost}>Ny</button>
        </div>
    );
});
