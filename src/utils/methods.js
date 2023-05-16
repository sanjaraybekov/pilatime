export function getAge(dob) {
  const today = new Date();
  const getBirthYear = parseInt(dob.substring(0, 4));
  const getBirthMonth = parseInt(dob.substring(4, 6));
  const getBirthDay = parseInt(dob.substring(6));
  var calAge = today.getFullYear() - getBirthYear;
  const calAgeMonth = today.getMonth() + 1 - getBirthMonth;
  const calAgeDay = today.getDate() - getBirthDay;
  if (calAgeMonth < 0 || (calAgeMonth === 0 && calAgeDay < 0)) {
    calAge = calAge - 1;
  }
  return calAge;
}

export const dateConverter = (selected) => {
  const date = selected?.toLocaleDateString().split("/");
  return `${date[2]}-${date[0].length === 1 ? "0" + date[0] : date[0]}-${
    date[1].length === 1 ? "0" + date[1] : date[1]
  }`;
};

function buildFormData(formData, data, parentKey) {
  if (data && typeof data === "object" && !data.lastModified) {
    Object.keys(data).forEach((key) => {
      // const a = k.split(".")[0];
      //     const b = k.split(".")[1]?.replace("[", "").replace("]", "");
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;
    formData.append(parentKey, value);
  }
}

export function jsonToFormData(data) {
  const formData = new FormData();

  buildFormData(formData, data);

  return formData;
}

function converterJTFD(formData, data, parentKey) {
  if (data && typeof data === "object" && !data.lastModified) {
    Object.keys(data).forEach((key) => {
      const a = `${parentKey}[${key}]`.split(".")[0];
      const b = `${parentKey}[${key}]`
        .split(".")[1]
        ?.replace("[", "")
        .replace("]", "");
      converterJTFD(
        formData,
        data[key],
        parentKey ? (b ? `${a}.${b}` : `${parentKey}[${key}].`) : key
      );
    });
  } else {
    const value = data == null ? "" : data;
    formData.append(parentKey, value);
  }
}

export function converterJsonToFormData(data) {
  const formData = new FormData();

  converterJTFD(formData, data);

  return formData;
}
