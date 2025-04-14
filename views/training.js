import html from "html-literal";

export default () => html`
  <main>
    <section id="beginner">
      <h2 class="lato-regular">Beginner</h2>
      <p class="lato-regular">
        New to Exercising? Get started with a beginner friendly workout!
      </p>
      <a href="https://www.youtube.com/watch?v=UItWltVZZmE&t=2s"
        >Link to Workout</a
      >
    </section>

    <section id="moderate">
      <h2 class="lato-regular">Moderate</h2>
      <p class="lato-regular">
        Want to maintain your current fitness level and exercise pattern? Try
        the moderate workout!
      </p>
      <a href="https://www.youtube.com/watch?v=qditvmztsfg&t=1s"
        >Link to Workout</a
      >
    </section>

    <section id="challenge">
      <h2 class="lato-regular">Challenging</h2>
      <p class="lato-regular">
        Already an expert? Try the challenging routine below!
      </p>
      <a href="https://www.youtube.com/watch?v=-YpRYNREDV8&t=7s"
        >Lik to Workout</a
      >
    </section>
  </main>
`;
