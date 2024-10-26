import axios from "axios";
import { ToasterMessage } from "./ToastHelper";

export const followUser = async (id) => {
  try {
    const response = await axios.post(
      `https://academics.newtonschool.co/api/v1/linkedin/follow/${id}`,
      "",
      {
        headers: {
          projectID: "60lfboqs7rjy",
          Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDFmN2JiYTUyYmMxYjdhMmNhN2EwYSIsImlhdCI6MTcyNTA4NzcyMCwiZXhwIjoxNzU2NjIzNzIwfQ.jykhOzvIzy9Z1tnbnrTcSDF7HWw2KUoxdbqAWaqoOXM",
        },
      }
    );

    if(response.status === 201)
    {
        ToasterMessage('success','followed successfull')
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};
