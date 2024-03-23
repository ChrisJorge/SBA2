// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    this.course = course 
    this.ag = ag
    this.submission = submissions
    
    let ids = []
    let assignment_id = []
    let possiblePoints = []
    let studentPoints = []

    // Get Ids, submissions, and scores
    for (let i = 0; i < submissions.length; i++)
    {
        
        if (ids.includes(submissions[i].learner_id) )
        {
          
        }
        else{
            ids.push(submissions[i].learner_id)
        }

        if (assignment_id.includes(submissions[i].assignment_id))
        {
            
        }
        else{
            assignment_id.push(submission[i].assignment_id)
        }

        if (assignment_id.includes(submissions[i].assignment_id))
        {
            studentPoints.push(submissions[i].submission.score)
        }

    }
    

    // Get Assignment Id's
    let y = 0;
    while (y < ag.assignments.length)
    {
        if(ag.assignments[y].due_at > '2024-03-22')
        {
            let del = (assignment_id.indexOf(ag.assignments[y].id))
             assignment_id.splice(del)

        }

        if(assignment_id.includes(ag.assignments[y].id))
        {
            possiblePoints.push(ag.assignments[y].points_possible)
        }
       
        y++
        
    }


    // Check If assignments were handed in late or not
    for(i = 0; i < assignment_id.length; i++)
    {
        for(j = 0; j < submissions.length; j++)
        {
            if(assignment_id[i] === submissions[j].assignment_id && submissions[j].submission.submitted_at > ag.assignments[i].due_at)
            {
                let index = (studentPoints.indexOf(submissions[j].submission.score))
                studentPoints[index] = Math.floor(submissions[j].submission.score - (submissions[j].submission.score * .1))
            }
            else{
                
            }
        }
    }

    
    let score1 = 0;
    let score2 = 0;
    let divide = 0;
    let s2 = studentPoints.splice(assignment_id.length * -1)
    let avg = []
    let assignment_student1 = []
    let assignment_student2= []
    // Calculate Average
    for(i = 0; i < studentPoints.length && i < s2.length; i++)
    {
       assignment_student1.push(studentPoints[i] / possiblePoints[i])
       assignment_student2.push(s2[i] / possiblePoints[i])
       score1 += studentPoints[i]
       score2 += s2[i]
       divide += possiblePoints[i]
    }
    avg.push(score1 / divide)
    avg.push(score2 / divide)

    // console.logs testing to make sure all outputs are functioning correctly 

    // console.log(assignment_student1)
    // console.log(assignment_student2)
    // console.log(`Score1: ${score1} Score2: ${score2} Divide: ${divide}`)
    // console.log(avg)
    // console.log(`Student Ids ${ids}`)
    // console.log(`Assignment Ids ${assignment_id}`)
    // console.log(`Possible Points ${possiblePoints}`)
    // console.log(`Student one points ${studentPoints}`)
    // console.log(`Student two points ${s2}`)


    let result = []
    
    function Obj (id, avg, s1, s2) {
        this.id = id;
        this.avg = avg;
        this.s1 = s1;
        this.s2 = s2;
    }

    for (i = 0; i < assignment_id.length; i++)
    {

        let obj = new Obj(ids[i], avg[i], assignment_student1[i], assignment_student2[i]);
        result.push(obj)
    }

  return(result)
  }

  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
// console.log(AssignmentGroup.assignments[0].id)