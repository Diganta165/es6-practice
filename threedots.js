const ages = [12,14,16,17];
const ages2 = [15,16,12];
const allAges = [...ages, ...ages2,5];
console.log(allAges);

//maximum ber kora

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoysha = [650,450,250];

const maximumtk = Math.max(...takaPoysha);

const maximum = Math.max(business,minister,sochib);
console.log(maximum);
console.log(maximumtk);