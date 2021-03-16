// /.netlify/functions/create_post
let firebase = require('./firebase')

exports.handler = async function(event) {
  let db = firebase.firestore()
  let body = JSON.parse(event.body)
  let currentUserId = body.currentUserId
  let username = body.username
  let storeText = body.storeText
  let waittimeText = body.waittimeText
  let submittimeText = body.submittimeText
  let dateText = body.dateText
  
  console.log(`user: ${currentUserId}`)
  console.log(`wait-time: ${waittimeText}`)

  let newPost = { 
    userId: currentUserId,
    username: username, 
    storeText: storeText,
    waittimeText: waittimeText,
    submittimeText: submittimeText,
    dateText: dateText,
    created: firebase.firestore.FieldValue.serverTimestamp()
  }

  let docRef = await db.collection('posts').add(newPost)
  newPost.id = docRef.id

  return {
    statusCode: 200,
    body: JSON.stringify(newPost)
  }

}
