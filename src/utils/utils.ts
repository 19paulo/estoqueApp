export function isProduct(value) {
  return (value.categorie && value.price && value.qtd ? true : false);
}

export function isLogin(value) {
  return (value === 'login' || value === 'password' ? true: false);
}
