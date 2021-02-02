export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.info('======middleware auth=====')
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}