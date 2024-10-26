import axios from "axios";

export const fetchAuthorDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/linkedin/user/${id}`,
      {
        headers: {
          projectID: "60lfboqs7rjy",
          Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDFmN2JiYTUyYmMxYjdhMmNhN2EwYSIsImlhdCI6MTcyNTA4NzcyMCwiZXhwIjoxNzU2NjIzNzIwfQ.jykhOzvIzy9Z1tnbnrTcSDF7HWw2KUoxdbqAWaqoOXM",
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      return {
        userDetails: response.data.data,
        isFollowed: response.data.data.isFollowed,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
