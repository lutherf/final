firebase.auth().onAuthStateChanged(async function(user) {
  if (user) {
    // Signed in
    console.log('signed in')
    let db = firebase.firestore()
    document.querySelector('posts').insertAdjacentHTML('beforeend',`
              <button class = "stores md:w-1/4 p-4 mt-2 border-4 border-blue-700 text-left">
                <div class="md:flex">
                <div class = "w-1/2">
                  <p class="text-xl">${post.storeText}</p>
                  <p class="text-xl font-bold pt-1 text-gray-600">${post.waittimeText}</p>
                </div>
                <div class = "w-1/2 text-right">
                  <p class="text-sm">Submitted By:</p>
                  <p class="text-sm">${post.username}</p>
                  <p class="text-sm">${post.submittimeText}</p>
                </div>
              </div>
              </button>
              <button class = "stores md:w-1/4 p-4 mt-2 border-4 border-blue-700 text-left">
                <div class="md:flex">
                <div class = "w-1/2">
                  <p class="text-xl">${post.storeText}</p>
                  <p class="text-xl font-bold pt-1 text-gray-600">${post.waittimeText}</p>
                </div>
                <div class = "w-1/2 text-right">
                  <p class="text-sm">Submitted By:</p>
                  <p class="text-sm">${post.username}</p>
                  <p class="text-sm">${post.submittimeText}</p>
                </div>
              </div>
              </button>
              <button class = "stores md:w-1/4 p-4 mt-2 border-4 border-blue-700 text-left">
                <div class="md:flex">
                <div class = "w-1/2">
                  <p class="text-xl">${post.storeText}</p>
                  <p class="text-xl font-bold pt-1 text-gray-600">${post.waittimeText}</p>
                </div>
                <div class = "w-1/2 text-right">
                  <p class="text-sm">Submitted By:</p>
                  <p class="text-sm">${post.username}</p>
                  <p class="text-sm">${post.submittimeText}</p>
                </div>
              </div>
              </button>
            </div>
            <div class="stores-section my-4 ml-2 md:flex space-x-4">
                <button class = "stores md:w-1/4 p-4 mt-2 border-4 border-blue-700 text-left">
                  <div class="md:flex">
                  <div class = "w-1/2">
                    <p class="text-xl">${post.storeText}</p>
                    <p class="text-xl font-bold pt-1 text-gray-600">${post.waittimeText}/p>
                  </div>
                  <div class = "w-1/2 text-right">
                    <p class="text-sm">Submitted By:</p>
                    <p class="text-sm">${post.username}</p>
                  <p class="text-sm">${post.submittimeText}</p>
                  </div>
                </div>
                </button>
                <button class = "stores md:w-1/4 p-4 mt-2 border-4 border-blue-700 text-left">
                  <div class="md:flex">
                  <div class = "w-1/2">
                    <p class="text-xl">${post.storeText}</p>
                    <p class="text-xl font-bold pt-1 text-gray-600">${post.waittimeText}</p>
                  </div>
                  <div class = "w-1/2 text-right">
                    <p class="text-sm">Submitted By:</p>
                    <p class="text-sm">${post.username}</p>
                  <p class="text-sm">${post.submittimeText}</p>
                  </div>
                </div>
                </button>
                <button class = "stores md:w-1/4 p-4 mt-2 border-4 border-blue-700 text-left">
                  <div class="md:flex">
                  <div class = "w-1/2">
                    <p class="text-xl">${post.storeText}</p>
                    <p class="text-xl font-bold pt-1 text-gray-600">${post.waittimeText}</p>
                  </div>
                  <div class = "w-1/2 text-right">
                    <p class="text-sm">Submitted By:</p>
                    <p class="text-sm">${post.username}</p>
                    <p class="text-sm">${post.submittimeText}</p>
                  </div>
                </div>
                </button>
              </div>
              `)

              // CVS Button
              let CVSButton = document.querySelector('.CVS')
              CVSButton.addEventListener('click', async function(event){
                let response = await fetch('/.netlify/functions/get_posts')
                let posts = await response.json()
                let post = posts[i]
                renderPost(post)

              // Whole Foods Button
              let WholeFoodsButton = document.querySelector('.WholeFoods')
              WholeFoodsButton.addEventListener('click', async function(event){
                let response = await fetch('/.netlify/functions/get_posts')
                let posts = await response.json()
                let post = posts[i]
                renderPost(post)

              // TraderJoe's Button
              let TraderJoesButton = document.querySelector('.TraderJoes')
              TraderJoesButton.addEventListener('click', async function(event){
                let response = await fetch('/.netlify/functions/get_posts')
                let posts = await response.json()
                let post = posts[i]
                renderPost(post)
              
              // Tomate Button
              let TomateKitchenButton = document.querySelector('.TomateKitchen')
              TomateKitchenButton.addEventListener('click', async function(event){
                let response = await fetch('/.netlify/functions/get_posts')
                let posts = await response.json()
                let post = posts[i]
                renderPost(post)
              
              // 527 Button
              let CafeButton = document.querySelector('.527Cafe')
              CafeButton.addEventListener('click', async function(event){
                let response = await fetch('/.netlify/functions/get_posts')
                let posts = await response.json()
                let post = posts[i]
                renderPost(post)

              // Sea Kitchen Button
              let SeaKitchenButton = document.querySelector('.CVS')
              SeaKitchenButton.addEventListener('click', async function(event){
                let response = await fetch('/.netlify/functions/get_posts')
                let posts = await response.json()
                let post = posts[i]
                renderPost(post)
              })

              // creates sign out button
              document.querySelector('.sign-in-or-sign-out').innerHTML =`
              <button class = "text-black-500 underline sign-out">Sign Out</button>
              `
              // creates event listener to sign out when button is clicked
              document.querySelector('.sign-out').addEventListener('click', function(event){
              event.preventDefault()
              firebase.auth().signOut()
              document.location.href = 'index.html' // refreshes page when sign out button is clicked
              })

  } else {
    // Initializes FirebaseUI Auth
    let ui = new firebaseui.auth.AuthUI(firebase.auth())

    // FirebaseUI configuration
    let authUIConfig = {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: 'index.html'
    }

    // Starts FirebaseUI Auth
    ui.start('.sign-in-or-sign-out', authUIConfig)
  }
})
