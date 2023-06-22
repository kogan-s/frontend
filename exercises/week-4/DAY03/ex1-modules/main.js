const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const toSkewerCase = function (str) {
    return str.replace(/\s+/g, '-');
  };

  return {
    capitalizeFirst: capitalizeFirst,
    toSkewerCase: toSkewerCase,
  };
};

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); // Output: Dorothy
console.log(formatter.toSkewerCase("blue box")); // Output: blue-box


console.log(formatter.capitalizeFirst("doRoTHy g0eS tO HelL")); // Output: Dorothy
console.log(formatter.toSkewerCase("blUe bOx 1232 Is HeRe: ")); // Output: blue-box
