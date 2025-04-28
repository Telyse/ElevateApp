import html from "html-literal";

export default () => html`
  <main>
    <section id="bio">
      <h2 class="lato-regular">Get in Touch!</h2>
      <p class="lato-regular">
        We're here to help and answer any questions you might have. We look
        forward to hearing from you. Feel free to to use the form!
      </p>
    </section>

    <section id="form">
      <form
        id="contact-form"
        action="https://formspree.io/f/xnndnbrl"
        method="POST"
      >
        <div class="name">
          <label for="name">Name</label>
          <input id="name" name="name" type="name" required />
        </div>

        <div class="email">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>

        <div class="comment">
          <label for="Comment">comment</label>
          <input id="comment" name="comment" type="comment" required />
        </div>

        <input type="submit" class="button" value="send" name="submit" />
      </form>
    </section>
  </main>
`;
