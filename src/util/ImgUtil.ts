export const imageToBase64 = (image: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(image);
    reader.onload = (event: ProgressEvent<FileReader>) =>
      resolve(event?.target?.result);
  });
};
