import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router'
import { view } from 'react-easy-state';
import { Link } from '@reach/router';
import appStore from './appStore';

export default view((props: RouteComponentProps) => {
    const [profileName, setProfileName] = useState('');

    useEffect(() => {
        const fetchProfileAndSetName = async (): Promise<void> => {
            const profile = await appStore.fetchProfile();
            
            setProfileName(profile.name);
        }
        if (appStore.profile === undefined) {
            fetchProfileAndSetName();
        } else {
            setProfileName(appStore.profile.name);
        }
    }, []);

    const updateProfile = (): void => {
        appStore.updateProfile({ name: profileName })
    };

    return (
        <div>
            <p>Go to: <Link to='/'>Main</Link></p>
            <p>Hello from {props.path}</p>
            <p>Profile name: {appStore.profile?.name ?? '...'}</p>
            <p>
                <input type="text" value={profileName} onChange={(ev): void => setProfileName(ev.target.value)}/>
                <button type="button" onClick={updateProfile}>Ändra profilnamn</button>
            </p>
        </div>
    );
});
