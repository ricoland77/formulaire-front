document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      // console.log("ok");
      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };
      // console.log(document.querySelector("#firstname").value);
      // console.log(document.querySelector("#lastname").value);
      // console.log(document.querySelector("#email").value);
      // console.log(document.querySelector("#subject").value);
      // console.log(document.querySelector("#message").value);

      const response = await axios.post(
        "http://localhost:4000/send-email",
        data
      );
      console.log(response);
    });
});
