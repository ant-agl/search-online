const onImgUpload = (e, imageUrl) => {
  const fileType = e.target.files[0].type;
  if (["image/jpg", "image/jpeg", "image/png"].includes(fileType)) {
    const size = e.target.files[0].size;
    if (size < 2 * 1024 * 1024) {
      imageUrl.value = URL.createObjectURL(e.target.files[0]);
      // newImg.value = e.target.files[0];
    } else {
      alert("Размер файла слишком большой");
    }
  } else {
    alert("Файл не является изображением");
  }
};

export { onImgUpload };
