// Step 2: Change main event listener from DOMContentLoaded to 
// firebase.auth().onAuthStateChanged and move code that 
// shows login UI to only show when signed out

firebase.auth().onAuthStateChanged(async function(user) {
  
    if (user) {
      // Signed in
      console.log('signed in')
      let db = firebase.firestore()
  
      db.collection('users').doc(user.uid).set({
        name: user.displayName,
        email: user.email
      })
      userId = firebase.auth().currentUser.displayName
      uId = firebase.auth().currentUser.uid

      document.querySelector('.sign-in-or-sign-out').innerHTML = `
      <button class="text-black-500 underline sign-out">Sign Out</button>
      `
      
      document.querySelector('.sign-out').addEventListener('click', function(event) {
        event.preventDefault()  
        console.log('sign out clicked')
        firebase.auth().signOut()
        document.location.href = 'store.html'
      })
  
      document.querySelector('form').addEventListener('submit', async function(event) {
        event.preventDefault()
  
        let username = user.displayName
        let currentUserId = firebase.auth().currentUser.uid
        let storeText = document.querySelector('#store').value
        let waittimeText = document.querySelector('#wait-time').value
        let submittimeText = document.querySelector('#submission-time').value
        let dateText = document.querySelector('#date').value
  
        let response = await fetch ('/.netlify/functions/create_posts', {
          method: "POST",
          body: JSON.stringify({
            username: username,
            currentUserId: currentUserId,
            storeText: storeText,
            waittimeText: waittimeText,
            submittimeText: submittimeText,
            dateText: dateText,
          })
        })
        let post = await response.json()
        document.querySelector('#store').value = '' 
        document.querySelector('#wait-time').value = '' 
        document.querySelector('#submission-time').value = '' 
        document.querySelector('#date').value = '' 
        // clear field
        renderPost(post)
      })

        let response = await fetch('/.netlify/functions/get_posts')
        let posts = await response.json()
        for (let i=0; i<posts.length; i++) {
          let post = posts[i]
          renderPost(post)
        }
      } else {
        // Not logged-in
        console.log('signed out')
    
        // Step 3: Hide the form when signed-out
        document.querySelector('form').classList.add('hidden')
    
        // Step 1: Un-comment to add FirebaseUI Auth
    
        // Initializes FirebaseUI Auth
        let ui = new firebaseui.auth.AuthUI(firebase.auth())
    
        // FirebaseUI configuration
        let authUIConfig = {
          signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
          ],
          signInSuccessUrl: 'store.html'
        }
    
        // Starts FirebaseUI Auth
        ui.start('.sign-in-or-sign-out', authUIConfig)
      }
    })

    async function renderPost(post) {
      let postId = post.id
      document.querySelector('.posts').insertAdjacentHTML('beforeend', `
      
          <div class="p-2">
          <div class="shadow-md my-2 border-2 border-black md:flex">
            <table class="text-left w-full">
              <thead>
                <tr>
                  <th class="p-4 font-bold text-sm text-grey-dark border-b border-grey-light">Store Name</th>
                  <th class="p-4 font-bold text-sm text-grey-dark border-b border-grey-light">Current Wait Time (Minutes)</th>
                  <th class="p-4 font-bold text-sm text-grey-dark border-b border-grey-light">Date of Submission</th>
                  <th class="p-4 font-bold text-sm text-grey-dark border-b border-grey-light">Time of Submission</th>
                  <th class="p-4 font-bold text-sm text-grey-dark border-b border-grey-light">Submitted By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border-b border-grey-light">${post.storeText}</td>
                  <td class="px-4 py-2 border-b border-grey-light">${post.waittimeText}</td>
                  <td class="px-4 py-2 border-b border-grey-light">${post.dateText}</td>
                  <td class="px-4 py-2 border-b border-grey-light">${post.submittimeText}</td>
                  <td class="px-4 py-2 border-b border-grey-light">${post.username}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
          `)}
        // if (storeText.length > 0) {
        //   // Step 5: Add user ID to newly created wait time
        //   let docRef = await db.collection('stores').add({
        //     text: storeText,
        //     userId: user.uid
        //   })
  
        //   let storeId = docRef.id
        //   console.log(`new store with ID ${storeId} created`)
  
        //   document.querySelector('.stores').insertAdjacentHTML('beforeend', `
        //     <div class="store-${storeId} py-4 text-xl border-b-2 border-purple-500 w-full">
        //       <a href="#" class="done p-2 text-sm bg-green-500 text-white">✓</a>
        //       ${storeText}
        //     </div>
        //   `)
        //   document.querySelector('#store').value = ''
        // }

      
  
      // // Step 5: Show only my wait time submissions
      // let querySnapshot = await db.collection('stores').where('userId', '==', user.uid).get()
      // console.log(`Number to stores in collection: ${querySnapshot.size}`)
  
      // let stores = querySnapshot.docs
      // for (let i=0; i<stores.length; i++) {
      //   let storeId = stores[i].id
      //   let store = stores[i].data()
      //   let storeText = store.text
  
      //   document.querySelector('.stores').insertAdjacentHTML('beforeend', `
      //     <div class="store-${storeId} py-4 text-xl border-b-2 border-purple-500 w-full">
      //       <a href="#" class="done p-2 text-sm bg-green-500 text-white">✓</a>
      //       ${storeText}
      //     </div>
      //   `)
      // }


