// export const API_URL = "http://mohamedasalam-001-site1.etempurl.com/api";
export const API_URL = "http://specialistorg-001-site1.btempurl.com/api";
export const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block", "image", "link"],

  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button,
];
export const modules = {
  toolbar: {
    container: toolbarOptions,
  },
  clipboard: {
    matchVisual: false,
  },
};

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];
export const HostUrl = "http://specialistorg-001-site1.btempurl.com";
export const imageUrlToFile = async (imageUrl) => {
  // Fetch the image data from the URL
  try {
    // Fetch the image data from the URL
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Image fetch failed with status: ${response.status}`);
    }

    // Read the image data as a blob
    const blob = await response.blob();
    console.log(
      blob,
      "blobblobblobblobblobblobblobblobblobblobblobblobblobblobblob",
      response
    );
    // Create a File object from the Blob
    const file = new File([blob], blob.type, { type: blob.type });
    console.log(file, "Ssssssssssssssssssssssssssssssssssssssssssssss");
    return file;
  } catch (error) {
    console.error(error);
    return null; // Return null in case of an error
  }
};
