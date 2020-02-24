import { store } from 'react-easy-state';
import { Post, Comment, Profile } from './post';

interface AppStore {
    posts: Post[];
    comments: Comment[];
    profile?: Profile;
    fetchPosts(): void;
    addPost(post: Post): void;
    fetchProfile(): Promise<Profile>;
    updateProfile(profile: Profile): void;
}

const appStore = store<AppStore>({ 
    posts: [],
    comments: [],
    async fetchPosts() {
        appStore.posts = await (await fetch('http://localhost:3000/posts')).json();
    },
    async addPost(post: Post) {
        await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        });
        appStore.posts.push(post);
    },
    async fetchProfile(): Promise<Profile> {
        const profile: Profile = await (await fetch('http://localhost:3000/profile')).json();
        appStore.profile = profile;
        return profile;
        
    },
    async updateProfile(profile: Profile) {
        await fetch('http://localhost:3000/profile', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(profile)
        });

        appStore.profile = profile;
    }
 });

 export default appStore;