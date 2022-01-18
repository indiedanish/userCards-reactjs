import "./App.css";
import React  from "react";

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import "./App.css";
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import axios from 'axios'



export default function AddQuiz() {


    const [question , setQuestion] = React.useState("")


    const postQuestion = async (q) => {
      console.log(q)


        await axios.put("http://localhost:3000/teacher/addquiz/61e47ea33a814a12e4e3dc8c" ,

   {
       quizzes : q
   }
 

 )


    }
  return (
    <div style={{ height: 1366,  marginBottom: '20%',  paddingTop: '10%', backgroundImage: "url(https://wallpapercave.com/wp/wp8832220.jpg)" }}>

      <div>

        <div style={{ width: '50%', marginLeft: '25%', background: '#F0F3F5', borderRadius: 25, padding: '1%' }}>

          <React.Fragment >
            <Typography variant="h6" gutterBottom>
              Submit the Quiz
            </Typography>
            <Grid container spacing={3}>

              <Grid item xs={12}>
                <TextField

                value ={question}
                onChange={(e)=>{setQuestion(e.target.value)}}
                  required
                  id="1"
                  name="Question"
                  label="Question 1"
                  fullWidth
                  autoComplete="Question 1"
                  variant="standard"
                />
              </Grid>
    

            </Grid>
            <Button
            onClick={()=>{postQuestion(question)}}
            
            style={{ marginTop: '2%', marginLeft: '40%' }} variant="contained">Submit</Button>;

          </React.Fragment>
        </div>
      </div>
    </div>
  );
}