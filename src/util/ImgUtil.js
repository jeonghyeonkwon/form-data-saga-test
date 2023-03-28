export const imageToBase64 = (image) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(image);
    reader.onload = (event) => resolve(event.target.result);
    reader.onerror = (error) => reader(error);
  });
};
