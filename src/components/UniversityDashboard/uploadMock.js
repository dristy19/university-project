// src/components/UniversityDashboard/uploadMock.js
import { db } from "../../firebase";
import { collection, setDoc, doc } from "firebase/firestore";
import { universityDashboardMock } from "./mockData";

export const uploadDashboardData = async () => {
  try {
    // Save stats
    await setDoc(doc(collection(db, "dashboard"), "stats"), universityDashboardMock.stats);

    // Save recent applications
    for (const app of universityDashboardMock.recentApplications) {
      await setDoc(doc(collection(db, "applications"), app.id.toString()), app);
    }

    // Save announcements
    for (let i = 0; i < universityDashboardMock.announcements.length; i++) {
      await setDoc(doc(collection(db, "announcements"), i.toString()), {
        message: universityDashboardMock.announcements[i],
      });
    }

    console.log("✅ Mock data uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading mock data:", error);
  }
};
