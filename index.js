import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";
import { training } from "./views";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
  ${header(state)}
  ${nav(store.links)}
  ${main(state)}
  ${footer()}
  `;
}

router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "workout":
        axios
        .get(`${process.env.API_URL}/trainings`)
        .then(response => {
          console.log("response.data", response.data);
          store.workout.savedWorkouts = response.data.reverse();
          console.log(store.workout.savedWorkouts[0])
          done();
        })
        break;
      // New Axios get request utilizing already made environment variable
      case "home":
        // Get request to retrieve the status
        axios
          .get(`${process.env.API_URL}/status`)
          .then(response => {
            console.log("response.data", response.data);
            done();
          });
          break;
      default :
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
        // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    if (view === "training") {
       /*Source from W3 Schools */
        var toggler = document.getElementsByClassName("caret");
        var i;
        for (i = 0; i < toggler.length; i++) {
          toggler[i].addEventListener("click", function() {
          this.parentElement.querySelector(".nested").classList.toggle("active");
          this.classList.toggle("caret-down");
            });
        }
    }
    render(store[view]);
  },
  after: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    if (view === "training") {
      const dropdown = document.getElementById("muscle-group");

      dropdown.addEventListener("change", function() {
        const selectedValue = this.value;

        store.training.selected = selectedValue
        console.log("Selected Muscle Group:", store.training.selected);
      });

      document.querySelector("#get-Options").addEventListener("submit", (event) => {
        event.preventDefault();

        axios
        .get(`${process.env.NINJAS_URL}?muscle=${store.training.selected}`, {
          headers: {
            'X-Api-Key': process.env.NINJAS_API_KEY
          }
        })

        .then(response => {
          store.training.workouts = response.data
          console.log(response.data);
          router.navigate("/training");

          document.querySelector("#save").addEventListener("submit", event => {
            event.preventDefault();

            const inputList = event.target.querySelectorAll("input:checked");
            console.log("Input Element List", inputList);

            const workouts = [];
            for(let input of inputList) {
              console.log("input id:", inputList);
              for (let storeWorkout of store.training.workouts) {
                if (Object.values(storeWorkout).includes(input.id)) {
                  workouts.push(storeWorkout);
                }
              }
            }
            console.log(workouts);

            const requestData = {
              exerciseRoutine: workouts
            }
            console.log("request body", requestData);

            axios
            .post(`${process.env.API_URL}/trainings`, requestData)
            .then(response => {
              store.workout.savedWorkouts.push(response.data);
              console.log("saved training data", store.workout.savedWorkouts);
              router.navigate("/workout");
            })
            .catch(error => {
              console.log("Error:", error);
            })
          })
        })

        .catch(err => {
          console.log(err);
        });
      });


    }
    router.updatePageLinks();

    document.querySelector(".fa-bars").addEventListener("click", () => {
        document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  }
});

router.on({
  "/": () => render(),
  // The :view slot will match any single URL segment that appears directly after the domain name and a slash
  '/:view': function(match) {
    // If URL is '/about-me':
    // match.data.view will be 'about-me'
    // Using Lodash's camelCase to convert kebab-case to camelCase:
    // 'about-me' becomes 'aboutMe'
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    // If the store import/object has a key named after the view
    if (view in store) {
      // Then the invoke the render function using the view state, using the view name
      render(store[view]);
    } else {
      // If the store
      render(store.viewNotFound);
      console.log(`View ${view} not defined`);
    }
  }
}).resolve();
