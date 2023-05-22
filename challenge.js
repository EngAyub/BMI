function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
  }
  
  const aliWeight = 93;
  const aliHeight = 1.6;
  const aliBMI = calculateBMI(aliWeight, aliHeight);
  
  const mohamedWeight = 75;
  const mohamedHeight = 1.75;
  const mohamedBMI = calculateBMI(mohamedWeight, mohamedHeight);
  
  console.log(`Ali's BMI: ${aliBMI}`);
  console.log(`Mohamed's BMI: ${mohamedBMI}`);
  
  if (aliBMI > mohamedBMI) {
    console.log("Ali has a higher BMI.");
  } else if (aliBMI < mohamedBMI) {
    console.log("Mohamed has a higher BMI.");
  } else {
    console.log("Ali and Mohamed have the same BMI.");
  }
