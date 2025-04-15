/* eslint-disable no-unused-vars */
import html from "html-literal";

export default state => html`
  <main>
    <select id="muscle-group">
      <option value="chest">Chest</option>
      <option value="lower_back">Lower Back</option>
      <option value="middle_back">Middle Back</option>
      <option value="biceps">Biceps</option>
      <option value="triceps">Triceps</option>
      <option value="abdominal">Abdominal</option>
      <option value="abductors">Abductors</option>
      <option value="adductors">Adductors</option>
      <option value="calves">Calves</option>
      <option value="forearms">Forearms</option>
      <option value="glutes">Glutes</option>
      <option value="hamstrings">Hamstrings</option>
      <option value="lats">Lats</option>
      <option value="quadriceps">Quadriceps</option>
      <option value="traps">Traps</option>
      <option value="neck">Neck</option>
    </select>

    <button id="my-button">Click Me!</button>

    ${state.workouts
      .map(workout => {
        return `<tr>
          <td>${workout.difficulty}</td>
        </tr>`;
      })
      .join("")}
  </main>
`;
