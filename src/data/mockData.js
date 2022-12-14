import { tokens } from "../theme";

export const patronsData = [
  {
    id: 1000,
    id2: "22-1000",
    firstname: "Roseline",
    lastname: "Stevy",
    birthday: "24/09/2002",
    sex: "F",
    address: "MÃ©rida",
    email: "Roseline.Stevy@yopmail.com",
    contact: "AO",
    dateregistered: "27/04/1995"
  },
  {
    id: 1001,
    id2: "22-1001",
    firstname: "Candi",
    lastname: "Sperling",
    birthday: "28/06/2017",
    sex: "F",
    address: "Hat Yai",
    email: "Candi.Sperling@yopmail.com",
    contact: "CX",
    dateregistered: "17/12/1960"
  },
  {
    id: 1002,
    id2: "22-1002",
    firstname: "Esmeralda",
    lastname: "Delp",
    birthday: "25/07/1973",
    sex: "M",
    address: "Ahmedabad",
    email: "Esmeralda.Delp@yopmail.com",
    contact: "SG",
    dateregistered: "22/07/1937"
  },
  {	
    id: 1003,
    id2: "22-1003",
    firstname: "Luci",
    lastname: "Orelee",
    birthday: "27/10/2010",
    sex: "M",
    address: "Dibrugarh",
    email: "Luci.Orelee@yopmail.com",
    contact: "NF",
    dateregistered: "18/09/1980"
  },
  {
    id: 1004,
    id2: "22-1004",
    firstname: "Correy",
    lastname: "Kiersten",
    birthday: "06/01/1998",
    sex: "M",
    address: "Salt Lake City",
    email: "Correy.Kiersten@yopmail.com",
    contact: "ZA",
    dateregistered: "22/11/1932"
  },
  {
    id: 1005,
    id2: "22-1005",
    firstname: "",
    lastname: "",
    birthday: "",
    sex: "F",
    address: "",
    email: "",
    contact: "",
    dateregistered: ""
  },
  {
    id: 1006,
    id2: "22-1006",
    firstname: "",
    lastname: "",
    birthday: "",
    sex: "M",
    address: "",
    email: "",
    contact: "",
    dateregistered: ""
  },
  {
    id: 1007,
    id2: "22-1007",
    firstname: "",
    lastname: "",
    birthday: "",
    sex: "F",
    address: "",
    email: "",
    contact: "",
    dateregistered: ""
  },
  {
    id: 1008,
    id2: "22-1008",
    firstname: "",
    lastname: "",
    birthday: "",
    sex: "F",
    address: "",
    email: "",
    contact: "",
    dateregistered: ""
  },
  {
    id: 1009,
    id2: "22-1009",
    firstname: "",
    lastname: "",
    birthday: "",
    sex: "M",
    address: "",
    email: "",
    contact: "",
    dateregistered: ""
  },
];

export const pieChartData = [
  {
    id: "Children (0-14)",
    label: "Children (0-14)",
    value: 60,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Early working age (15-24)",
    label: "Early working age (15-24)",
    value: 98,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "Prime working age (25-54)",
    label: "Prime working age (25-54)",
    value: 180,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "Mature working age (55-64)",
    label: "Mature working age (55-64)",
    value: 10,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "Elderly (65 and above)",
    label: "Elderly (65 and above)",
    value: 30,
    color: "hsl(344, 70%, 50%)",
  },
];

export const lineChartData = [
  {
    id: "Male",
    color: tokens("dark").primary[500],
    data: [
      {
        x: "JAN",
        y: 192,
      },
      {
        x: "FEB",
        y: 75,
      },
      {
        x: "MAR",
        y: 36,
      },
      {
        x: "APR",
        y: 216,
      },
      {
        x: "MAY",
        y: 35,
      },
      {
        x: "JUN",
        y: 236,
      },
      {
        x: "JUL",
        y: 88,
      },
      {
        x: "AUG",
        y: 232,
      },
      {
        x: "SEP",
        y: 281,
      },
      {
        x: "OCT",
        y: 1,
      },
      {
        x: "NOV",
        y: 35,
      },
      {
        x: "DEC",
        y: 14,
      },
    ],
  },
  {
    id: "Female",
    color: tokens("dark").secondary[500],
    data: [
      {
        x: "JAN",
        y: 1,
      },
      {
        x: "FEB",
        y: 300,
      },
      {
        x: "MAR",
        y: 36,
      },
      {
        x: "APR",
        y: 216,
      },
      {
        x: "MAY",
        y: 35,
      },
      {
        x: "JUN",
        y: 432,
      },
      {
        x: "JUL",
        y: 828,
      },
      {
        x: "AUG",
        y: 987,
      },
      {
        x: "SEP",
        y: 261,
      },
      {
        x: "OCT",
        y: 123,
      },
      {
        x: "NOV",
        y: 335,
      },
      {
        x: "DEC",
        y: 213,
      },
    ],
  }
];

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "Male",
    color: tokens("dark").primary[500],
    data: [
      {
        x: "JAN",
        y: 192,
      },
      {
        x: "FEB",
        y: 75,
      },
      {
        x: "MAR",
        y: 36,
      },
      {
        x: "APR",
        y: 216,
      },
      {
        x: "MAY",
        y: 35,
      },
      {
        x: "JUN",
        y: 236,
      },
      {
        x: "JUL",
        y: 88,
      },
      {
        x: "AUG",
        y: 232,
      },
      {
        x: "SEP",
        y: 281,
      },
      {
        x: "OCT",
        y: 1,
      },
      {
        x: "NOV",
        y: 35,
      },
      {
        x: "DEC",
        y: 14,
      },
    ],
  },
  {
    id: "Female",
    color: tokens("dark").secondary[500],
    data: [
      {
        x: "JAN",
        y: 1,
      },
      {
        x: "FEB",
        y: 300,
      },
      {
        x: "MAR",
        y: 36,
      },
      {
        x: "APR",
        y: 216,
      },
      {
        x: "MAY",
        y: 35,
      },
      {
        x: "JUN",
        y: 432,
      },
      {
        x: "JUL",
        y: 828,
      },
      {
        x: "AUG",
        y: 987,
      },
      {
        x: "SEP",
        y: 261,
      },
      {
        x: "OCT",
        y: 123,
      },
      {
        x: "NOV",
        y: 335,
      },
      {
        x: "DEC",
        y: 213,
      },
    ],
  }
];
