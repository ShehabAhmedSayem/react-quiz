import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestionList(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());
      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(quizQuery);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
        console.log(err);
      }
    }
    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
