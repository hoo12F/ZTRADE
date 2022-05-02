// wow, i'm actually using javascript.. i can't believe it. I thought i would never use JAVASCRIPT.
import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writeable } from 'svelte/store';


export const db = GUN();

export const user = dbuser().recall({sessionStorage: true});


user.get('alias')

export const username = writeable('');

user.get('alias').on(v => username.set(v))

db.on('auth', async(event) => {

    const alias = await user.get('alias');
    username.set('alias');

    console.log(`signed in as ${alias}`);

});

// such colorful code