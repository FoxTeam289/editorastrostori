/** @format */

const useDownloadSky = (name, dataUrl) => {
  var link = document.createElement("a");
  link.download = name;
  link.href = dataUrl;
  link.click();
};

export default useDownloadSky;
