import { store } from 'react-easy-state';
import { IPost } from './post';

interface IAppStore {
    posts: IPost[],
    fetchPosts(): void,
    addPost(post: IPost): void
}

const appStore = store<IAppStore>({ 
    posts: [],
    async fetchPosts() {
        appStore.posts = await (await fetch('http://localhost:3000/posts')).json();
    },
    async addPost(post: IPost) {
        await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        });
        appStore.posts.push(post);
    }
 });

 export default appStore;