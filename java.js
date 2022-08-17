function go() {
  let name = document.querySelector("input[name='name']").value;
  let email = document.querySelector("input[name='e-mail']").value;
  let pass = document.querySelector("input[name='pass']").value;
  alert(
    "bem-vindo! " +
      "\ndados do seu login estão abaixo:" +
      "\nnome: " +
      name +
      "\nemail: " +
      email +
      "\nsenha: " +
      pass
  );
}
