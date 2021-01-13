const checkDomain = (email) => {
  const listDomain = ["@gmail.com"];
  const verified = listDomain.find((item) => email.endsWith(item));

  if (verified) return true;
  else return false;
};

export default checkDomain;
