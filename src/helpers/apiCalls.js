export const getRandomUnsplash = async () => {
  let url = `https://api.unsplash.com/photos/random/?client_id=RtkytSQr9sF6UkcWvzYMW2bkHHSfLDyrQYep3tNkGBs`;
  console.log('I am getting an image');
  let res = await (await fetch(url)).json();

  return res.urls.regular;
};
