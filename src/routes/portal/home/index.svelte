<script context="module" lang="ts">
    export async function load({ session }) {
        return {
            props: {
                UserSession: session.user
            }
        };
    }
</script>
<script lang="ts">
	export let UserSession;
    console.log(UserSession);
</script>
<div>
    this is portal page.
</div>