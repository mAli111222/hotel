import firebase from "firebase/app"
import "firebase/firestore"

/** Firebase docs */
// Get a Firestore instance
export const DB = firebase
	.initializeApp(
		{
			projectId: "MY PROJECT ID", 
		}
	)
	.firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { GeoPoint, TimeStamp, } = firebase.firestore
export {
	GeoPoint, TimeStamp 
}

// if using Firebase JS SDK < 5.8.0
DB.settings({
	timestampsInSnapshots: true, 
})
/** END Firebase docs */

