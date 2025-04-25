//import html from "html-literal";

//export default state => html`
//  <table id="workouts">
//    <tr>
//      <th>muscle</th>
//      <th>name</th>
//      <th>type</th>
//      <th>difficulty</th>
//      <th>instructions</th>
//    </tr>
//    ${state.savedWorkouts
//      .map(workout => {
//        return `
//        <tr>
//          <td>${workout.muscle}</td>
//          <td>${workout.name}</td>
//          <td>${workout.type}</td>
//          <td>${workout.difficulty}</td>
//          <td>${workout.instructions}</td>
//        </tr>`;
//      })
//      .join("")}
//  </table>
//`;

import html from "html-literal";

export default state => html`
  <h1>Saved Workouts</h1>

  <pre>${JSON.stringify(state.savedWorkouts, null, 2)}</pre>

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
        .map(
          workout => html`
            <tr>
              <td>${workout.muscle}</td>
              <td>${workout.name}</td>
              <td>${workout.type}</td>
              <td>${workout.difficulty}</td>
              <td>
                ${Array.isArray(workout.instructions)
                  ? workout.instructions.join("<br>")
                  : workout.instructions}
              </td>
            </tr>
          `
        )
        .join("")}
    </tbody>
  </table>
`;
