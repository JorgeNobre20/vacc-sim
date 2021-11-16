export function maskPhoneNumber(value: string) {
  var receivedValue = value.replace(/\D/g, "");
  receivedValue = receivedValue.replace(/^0/, "");
  if (receivedValue.length > 10) {
    receivedValue = receivedValue.replace(
      /^(\d\d)(\d{5})(\d{4}).*/,
      "($1) $2-$3"
    );
  } else if (receivedValue.length > 5) {
    receivedValue = receivedValue.replace(
      /^(\d\d)(\d{4})(\d{0,4}).*/,
      "($1) $2-$3"
    );
  } else if (receivedValue.length > 2) {
    receivedValue = receivedValue.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    receivedValue = receivedValue.replace(/^(\d*)/, "($1");
  }
  return receivedValue;
}

export function maskCpf(cpf: string) {
  const cpfNumbers = cpf.replace(/\D/g, "");

  const formmatedValue = cpfNumbers
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");

  return formmatedValue;
}

export function maskDate(date: Date) {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

  const formattedDate = `${day}/${month}/${date.getFullYear()}`;

  return formattedDate;
}
