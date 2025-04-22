/* eslint-disable no-unused-vars */
import html from "html-literal";

export default state => html`
  <main>
    <form id="get-Options">
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

      <button id="my-button" type="submit">Click Me!</button>
    </form>

    <form id="save">
      <table>
        ${state.workouts
          .map(workout => {
            return `<ul id="myUL">
  <input type="checkbox" name="selection" id="${workout.name}" value="${workout}"></input>
  <li> <label for="${workout.name}"> <span class="caret">${workout.name}</span> </label>
    <ul class="nested">
      <li>${workout.type}</li>
      <li>${workout.difficulty}</li>
      <li>${workout.instructions}</li>
    </ul>
  </li>
</ul>`;
          })
          .join("")}
        <button id="save-button" type="submit">Save your workout!</button>
      </table>
    </form>
  </main>
`;
