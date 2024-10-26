import axios from "axios";
import { ToasterMessage } from "./ToastHelper";

export const unfollowUser = async (id) => {
  try {
    const response = await axios.delete(
      `https://academics.newtonschool.co/api/v1/linkedin/follow/${id}`,
      {
        headers: {
          projectID: "60lfboqs7rjy",
          Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDFmN2JiYTUyYmMxYjdhMmNhN2EwYSIsImlhdCI6MTcyNTA4NzcyMCwiZXhwIjoxNzU2NjIzNzIwfQ.jykhOzvIzy9Z1tnbnrTcSDF7HWw2KUoxdbqAWaqoOXM",
        },
      }
    );
    console.log(response);
    if(response.status === 201){
        ToasterMessage('info','unfollowed user successfully')
    }
  } catch (error) {
    console.log(error);
  }
};
