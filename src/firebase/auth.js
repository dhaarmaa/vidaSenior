//login Google

export const loginGoogle=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(result => {
        const user = result.user;
        let userData = {
            uid: user.uid,
            fullName: user.displayName,
            email: user.email,
            authentication: "google",
        }
        const db = firebase.firestore();
        db.collection('users').get()
        .then((list) => {
            let authentication = false;
            list.forEach((doc) => {
            if (doc.data().authentication === "email" && doc.data().email === user.email) {
                authentication = true;
                alert("Usted esta auntentificado por email");
            }
            });
            if (!authentication) {
            saveUserToDatabaseAfterLogin(userData);
            }
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    })
    .catch(err => {
        console.log(err);
    });
}
//salvando los datos de firebase
export const saveUserToDatabaseAfterLogin = (userData) => {
    const db = firebase.firestore();
    let docRef = db.collection('users').doc(userData.uid);
    docRef.get()
      .then(doc => {
        let user = {};
        if (!doc.exists) {
          docRef.set(userData);
          user = userData
        } else {
          user = doc.data();
        }
        localStorage.setItem('uid', user.uid);
        localStorage.setItem('fullName', user.fullName);
        localStorage.setItem('email', user.email);
  
        if (user.authentication === "google") {
          window.location.hash = '#/wall';
        }
      })
      .catch(err => {
        console.log('Error al obtener documento', err);
      });
  };
  




firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });