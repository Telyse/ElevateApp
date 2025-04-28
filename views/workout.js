/* eslint-disable no-undef */
import html from "html-literal";

export default state => html`
  <table id="workouts" border="1" cellpadding="10" cellspacing="0">
    <thead>
      <tr>
        <th>Muscle</th>
        <th>Name</th>
        <th>Type</th>
        <th>Difficulty</th>
        <th>Instructions</th>
      </tr>
    </thead>
    <tbody>
      ${state.savedWorkouts
        .map(workout => {
          return `
          ${workout.exerciseRoutine
            .map(individualExercise => {
              return `<tr>
              <td>${individualExercise.muscle}</td>
              <td>${individualExercise.name}</td>
              <td>${individualExercise.type}</td>
              <td>${individualExercise.difficulty}</td>
              <td>${individualExercise.instructions}</td>
              </tr>
          `;
            })
            .join("")}
            <tr style="background-color: black"><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        `;
        })
        .join("")}
    </tbody>
  </table>
`;

/* <td>${workout.exerciseRoutine[0].muscle}</td>
<td>${workout.exerciseRoutine[0].name}</td>
<td>${workout.exerciseRoutine[0].type}</td>
<td>${workout.exerciseRoutine[0].difficulty}</td>
<td>${workout.exerciseRoutine[0].equipment}</td>
<td>${workout.exerciseRoutine[0].instructions}</td> */
