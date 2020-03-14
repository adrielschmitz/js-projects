const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // previne o comportamento padrão do form

  const gender = getSelectedValue("gender");
  const activity_level = getSelectedValue("activity_level");
  const age = getInputNumber("age");
  const weight = getInputNumber("weight");
  const height = getInputNumber("height");

  const tnb = Math.round(
    gender === "female"
      ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age
      : 66 + 13.7 * weight + 5 * height - 6.8 * age
  );

  const maintenance = Math.round(tnb * Number(activity_level));
  const lose_weight = maintenance - 400;
  const gain_weight = maintenance + 400;

  const layout = `
    <h2>Aqui está o resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${tnb} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média
          <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média
          <strong>${lose_weight} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média
          <strong>${gain_weight} calorias</strong>.
        </li>
      </ul>
    </div>
  `;

  const result = document.getElementById("result");

  result.innerHTML = layout;
}

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputNumber(id) {
  return Number(document.getElementById(id).value);
}
