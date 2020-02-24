import React, { useEffect } from 'react';
import { view } from 'react-easy-state';
import { Link, RouteComponentProps } from '@reach/router'
import appStore from './appStore';

export default view((props: RouteComponentProps) => {
    useEffect(() => {
        if (appStore.posts === null || appStore.posts.length === 0){
            appStore.fetchPosts();
        }
    });

    const addPost = (): void => {
        appStore.addPost({
            text: 'Testar',
            author: 'Pelle'
        });
    };

    return (
        <div>
            <p>Go to: <Link to='/subpage1'>Page 1</Link></p>
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
