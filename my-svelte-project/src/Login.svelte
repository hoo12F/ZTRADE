<script>
    import { user } from './user';


    let username;
    let password;



    <script>

    <label for="username">Username</label>
    <input name="username" bind:value={username} minlength="3" maxlength="16" />

    <label for="password">Passwords</label>
    <input name="password" bind:value={password} type="password"  />

    <button class="login">Login</button>
    <button class="login">Sign Up</button>
