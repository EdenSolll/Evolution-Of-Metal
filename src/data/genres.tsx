const Genres = [
  {
  genre: "Alternative Metal",
  year: 1985,
  parents:[],
  children:[],
  y_axis: 800,
  transition_genre: [],
  },
  {
  genre: "Funk Metal",
  year: 1995,
  parents: ["Alternative Metal"],
  children: ["Nu Metal"],
  y_axis: 850,
  transition_genre: ["Alternative Metal"],
  },
  {
  genre: "Nu Metal",
  year: 1993,
  parents: ["Funk Metal"],
  children: [],
  y_axis: 885,
  transition_genre: ["Funk Metal"],
  },
  {
  genre: "Rap Metal",
  year: 1987,
  parents: ["Funk Metal"],
  children: [],
  y_axis: 885,
  transition_genre: ["Funk Metal"],
  },
  {
  genre: "Black Metal",
  year: 1984,
  parents:["Alternative Metal"],
  children:[],
  y_axis: 825,
  transition_genre: ["Alternative Metal"],
  },
];
export default Genres;
