export class CarLabels{

public static CarLabelsMap = new Map([
["cor","Corola"],
["yar","Yaris"],
["cam","Camry"],
["rio","Rio"],
["civ","Civic"],
["acc","Accord"],
["pil","Pilot"],
["hond","Honda"],
["toyo","Toyota"],
["kia","Kia"],

]);

public static ColorLabelsMap = new Map([
["en",new Map([["beig","Beige"],["blac","Black"],["blue","Blue"],["brow","Brown"],["gold","Gold"],["gree","Green"], ["grey","Grey"],
["red","Red"],["silve","Silver"], ["whit","White"],["null",""],["",""],["undefined",""],["other",""] ])],

["fr",new Map([["beig","Beige"],["blac","Noir"],["blue","Bleu"],["brow","Brun"],["gold","Or"],["gree","Vert"], ["grey","Gris"],
["red","Rouge"],["silve","Argent"], ["whit","Blanc"],["null",""],["",""],["undefined",""],["other",""] ])]

]);


public static TransmissionLabelsMap = new Map([
["en",new Map([["auto","Automatic"],["manu","Manual"],["oth",""],["null",""],["",""] ])],

["fr",new Map([["auto","Automatique"],["manu","Manuelle"],["oth",""],["null",""],["",""] ])]
]);


public static DrivetrainLabelsMap = new Map([
["en",new Map([["awd","All-wheel Drive AWD"],["fwd","Front-Wheel drive"],["rwd","Rear-Wheel drive"],["oth",""],["xxx","4x4"],["null",""],["",""] ])],

["fr",new Map([["awd","Traction intégrale"],["fwd","Roues motrices avant"],["rwd","Roues motrices arrière"],["oth",""],["null",""],["xxx","4x4"],["",""] ])]
]);

public static BodyTypeLabelsMap = new Map([
["en",new Map([["coup","coupe (2 doors)"],["conv","Convertible"],["van","Mini Van"],["sed","Sedan"],["oth",""],["null",""],["",""] ])],

["fr",new Map([["coup","coupé (2 portes)"],["conv","Décapotable"],["van","Mini Van"],["sed","Berline"],["oth",""],["null",""],["",""] ])]
]);

public static FuelTypeLabelsMap = new Map([
["en",new Map([["dis","Diesel"],["gas","Gasoline"],["hyb","Hybrid"],["elec","Electric"],["oth",""],["null",""],["",""] ])],

["fr",new Map([["dis","Diesel"],["gas","Essence"],["hyb","Hybride"],["elec","Electrique"],["oth",""],["null",""],["",""] ])]
]);

}
